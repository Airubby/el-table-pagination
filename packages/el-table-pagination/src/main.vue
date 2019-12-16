
<template>
  <div style="background:#fff;position:relative" class="search_form_table">

    <search-form
      v-if="formOptions"
      ref="searchForm"
      :forms="formOptions.forms"
      :size="formOptions.size"
      :fuzzy="formOptions.fuzzy"
      :inline="formOptions.inline"
      :initParams="formOptions.initParams"
      :placeholder="formOptions.placeholder"
      :label-width="formOptions.labelWidth"
      :item-width="formOptions.itemWidth"
      :submit-handler="searchHandler"
      :submit-loading="loading"
      :showResetBtn="formOptions.showResetBtn"
      :submitBtnText="formOptions.submitBtnText"
      :resetBtnText="formOptions.resetBtnText" />

    <slot name="form" :loading="loading" :search="searchHandler" />

    <slot />
    <el-table v-loading.lock="loading"
      ref="table"
      :data="tableData"
      :border="border"
      :stripe="stripe"
      :height="height"
      :max-height="maxHeight"
      :size="size"
      :fit="fit"
      :show-header="showHeader"
      :highlight-current-row="highlightCurrentRow"
      :current-row-key="currentRowKey"
      :row-class-name="rowClassName"
      :row-style="rowStyle"
      :row-ket="rowKey"
      :empty-text="emptyText"
      :default-expand-all="defaultExpandAll"
      :expand-row-keys="expandRowKeys"
      :default-sort="defaultSort"
      :tooltip-effect="tooltipEffect"
      :show-summary="showSummary"
      :sum-text="sumText"
      :summary-method="summaryMethod"
      @select="(selection, row) => emitEventHandler('select', selection, row)"
      @select-all="selection => emitEventHandler('select-all', selection)"
      @selection-change="selection => emitEventHandler('selection-change', selection)"
      @cell-mouse-enter="(row, column, cell, event) => emitEventHandler('cell-mouse-enter', row, column, cell, event)"
      @cell-mouse-leave="(row, column, cell, event) => emitEventHandler('cell-mouse-leave', row, column, cell, event)"
      @cell-click="(row, column, cell, event) => emitEventHandler('cell-click', row, column, cell, event)"
      @cell-dblclick="(row, column, cell, event) => emitEventHandler('cell-dblclick', row, column, cell, event)"
      @row-click="(row, event, column) => emitEventHandler('row-click', row, event, column)"
      @row-dblclick="(row, event) => emitEventHandler('row-dblclick', row, event)"
      @row-contextmenu="(row, event) => emitEventHandler('row-contextmenu', row, event)"
      @header-click="(column, event) => emitEventHandler('header-click', column, event)"
      @sort-change="args => emitEventHandler('sort-change', args)"
      @filter-change="filters => emitEventHandler('filter-change', filters)"
      @current-change="(currentRow, oldCurrentRow) => emitEventHandler('current-change', currentRow, oldCurrentRow)"
      @header-dragend="(newWidth, oldWidth, column, event) => emitEventHandler('header-dragend', newWidth, oldWidth, column, event)"
      @expand-change="(row, expanded) => emitEventHandler('expand-change', row, expanded)" >

      <slot name="prepend" />
      <el-table-column type="index" :index="indexMethod" :label="showIndexTitle" width="55px" v-if="showIndex"></el-table-column>
      <el-table-column
        v-for="(column, columnIndex) in columns" :key="columnIndex"
        :column-key="column.columnKey"
        :prop="column.prop"
        :label="column.label"
        :width="column.minWidth ? '-' : (column.width || 100)"
        :minWidth="column.minWidth || column.width || 100"
        :fixed="column.fixed"
        :render-header="column.renderHeader"
        :sortable="column.sortable"
        :sort-method="column.method"
        :resizable="column.resizable"
        :formatter="column.formatter"
        :show-overflow-tooltip="column.showOverflowTooltip"
        :align="column.align"
        :header-align="column.headerAlign || column.align"
        :class-name="column.className"
        :label-class-name="column.labelClassName"
        :selectable="column.selectable"
        :reserve-selection="column.reserveSelection"
        :filters="column.filters"
        :filter-placement="column.filterPlacement"
        :filter-multiple="column.filterMultiple"
        :filter-method="column.filterMethod"
        :filtered-value="column.filteredValue">
        <template slot-scope="scope" :scope="newSlotScope ? 'scope' : false ">
          <span v-if="column.filter">
            {{ Vue.filter(column['filter'])(scope.row[column.prop]) }}
          </span>
          <span v-else-if="column.slotName">
            <slot :name="column.slotName" :row="scope.row" :$index="scope.$index" />
          </span>
          <span v-else>
            {{ column.render ? column.render(scope.row) : scope.row[column.prop] }}
          </span>
        </template>
      </el-table-column>

      <slot name="append" />

    </el-table>

    <div v-if="showPagination" class="showPagination" :style="computeStyle"
      style="text-align:right;padding:15px 0;">
      <div style="width:100%;height:100%;position:relative">
        <div class="showSelect" style="font-size:14px;position:absolute;left:10px;top:0;height:32px;line-height:32px;color:#606266;" v-if="showSelectAll&&allSelection.length>0">
            <i class="el-icon-warning"></i>
            <span style="margin:0 15px 0 5px;">已选择<em style="margin:0 2px;color:#409EFF;">{{allSelection.length}}</em>项</span>
            <a @click="clearSelect" style="cursor:pointer;color:#409EFF;">清空</a>
        </div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagination.pageIndex"
          :page-sizes="pageSizes"
          :background="background"
          :page-size="pagination.pageSize"
          :layout="paginationLayout"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Props} from './props'
  import ElTableForm from '../../el-table-form/src/main.vue'

  export default {
    name: 'ElTablePagination',
    components: {
      ElTableForm
    },
    props:Props,
    data() {
      const _this = this
      return {
        Vue,
        pagination: {
          pageIndex: 1,
          pageSize: (() => {
            const { pageSizes } = _this
            if (pageSizes.length > 0) {
              return pageSizes[0]
            }
            return 20
          })()
        },
        total: 0,
        loading: false,
        background: true,
        tableData: [],
        cacheLocalData: [],
        resultInfo:{},
        multipleSelection:true,  //默认是计算勾选的，当切换分页时为false，不计算勾选，只是勾选选项时计算
        allSelection:[],
        currentSelection:[],
      }
    },
    computed: {
      newSlotScope() {
        return Number(Vue.version.replace(/\./g, '')) >= 250
      },
      computeStyle(){
        return this.border?'border:1px solid #EBEEF5;border-top:none;':'';
      }
    },
    methods: {
      indexMethod(index){
        return (this.pagination.pageIndex-1)*this.pagination.pageSize+index+1;
      },
      handleSizeChange(size) {
        this.pagination.pageSize = size
        this.dataChangeHandler()
      },
      handleCurrentChange(pageIndex) {
        this.pagination.pageIndex = pageIndex
        this.dataChangeHandler()
      },
      searchHandler(resetPageIndex = true) {
        this.clearSelect();
        if (resetPageIndex) {
          this.pagination.pageIndex = 1
        }
        this.dataChangeHandler(arguments[0])
      },
      dataChangeHandler() {
        const { type } = this
        if (type === 'local') {
          this.dataFilterHandler(arguments[0])
        } else if (type === 'remote') {
          this.fetchHandler(arguments[0])
        }
      },
      dataFilter(data) {
        const { pageIndex, pageSize } = this.pagination
        return data.filter((v, i) => {
          return i >= (pageIndex - 1) * pageSize && i < pageIndex * pageSize
        })
      },
      dataFilterHandler(formParams) {
        const { cacheLocalData, params, pagination } = this
        const { pageIndex, pageSize } = pagination
        const mergeParams = Object.assign(params, formParams)
        const validParamKeys = Object.keys(mergeParams).filter(v => {
          return mergeParams[v] !== undefined && mergeParams[v] !== ''
        })
        const searchForm = this.$refs['searchForm']
        let paramFuzzy
        if (searchForm) {
          paramFuzzy = searchForm.getParamFuzzy()
        }

        if (validParamKeys.length > 0) {
          const validData = cacheLocalData.filter(v => {
            let valids = []
            validParamKeys.forEach(vv => {
              if(v[vv]){
                if (typeof v[vv] === 'number') {
                  valids.push(
                    paramFuzzy && paramFuzzy[vv] ? (String(v[vv]).indexOf(String(mergeParams[vv])) !== -1)
                    : (mergeParams[vv]?(String(v[vv]).indexOf(String(mergeParams[vv])) !== -1):(String(v[vv]) === String(mergeParams[vv])))
                  )
                } else {
                  valids.push(
                    paramFuzzy && paramFuzzy[vv] ? (v[vv].indexOf(mergeParams[vv]) !== -1) 
                    : (mergeParams[vv]? (v[vv].indexOf(mergeParams[vv]) !== -1)  : (v[vv] === mergeParams[vv]))
                  )
                }
              }
              
            })
            return valids.every(vvv => {
              return vvv
            })
          })

          this.tableData = this.dataFilter(validData)
          this.total = validData.length
        } else {
          this.total = cacheLocalData.length
          this.tableData = this.dataFilter(cacheLocalData)
        }

        this.$emit('resultData',this.tableData); 
        this.multipleSelection=false;
        this.$nextTick(function(){
          this.changePage()
        })
      },
      fetchHandler(formParams = {}) {
        this.loading = true
        let { fetch, method, url, $axios, headers,
              listField, pageIndexKey, pageSizeKey,
              totalField, params, showPagination,
              pagination } = this

        params = JSON.parse(JSON.stringify(Object.assign(params, formParams)))

        if (showPagination) {
          params = Object.assign(params, {
            [pageIndexKey]: pagination.pageIndex,
            [pageSizeKey]: pagination.pageSize
          })
        }

        let requestObject = null

        if (fetch) {
          requestObject = fetch(params)
        } else {
          $axios.interceptors.request.use(
            config => {
              Object.keys(headers).forEach(v => {
                config.headers[v] = headers[v]
              })
              return config;
            },
            error => {
              return Promise.reject(error);
            }
          )

          method = method.toLowerCase();

          if (method === 'get') {
            requestObject = $axios[method](url, { params })
          } else {
            requestObject = $axios[method](url, params)
          }
        }

        requestObject.then(response => {
            let result = response
            this.resultInfo=response
            if (response && !(response instanceof Array)) {
                if (listField && listField.indexOf('.') !== -1) {
                    listField.split('.').forEach(vv => {
                        result = result[vv]
                    })
                } else {
                    result = response[listField]
                }
            }
            if(!result){
                result=[];
            }else if(!(result instanceof Array)){
                throw new Error(`The result of key:${listField} is not Array.`)
                this.loading = false
                return false
            }
            if (this.dataHandler) {
                this.tableData = result.map(this.dataHandler)
            } else {
                this.tableData = result
            }
            
            let totalValue = response
            if (Object.prototype.toString.call(response) === '[object Array]') {
                totalValue = response.length
            } else if (typeof response === 'object') {
                if (totalField && totalField.indexOf('.') !== -1) {
                    totalField.split('.').forEach(vv => {
                        totalValue = totalValue[vv]
                    })
                } else {
                    totalValue = response[totalField]
                }
            } else {
                totalValue = 0
            }
            this.total = Number(totalValue)

            this.loading = false
            }).catch(error => {
                // console.error('Get remote data failed. ', error)
                this.loading = false
            })
        },
      emitEventHandler(event) {
        this.$emit(event, ...Array.from(arguments).slice(1))
        if(this.showSelectAll&&arguments[0]=='selection-change'){
          if(this.multipleSelection){
            let val=arguments[1]
            let currentArr = [];
            if(val.length>this.currentSelection.length){ //增加
              this.allSelection=this.allSelection.concat(this.checkItem(val,this.currentSelection))
            }else{//减少
              currentArr=this.checkItem(this.currentSelection,val);
              let list=[];
              if(this.allSelection.length>currentArr.length){
                this.allSelection=this.checkItem(this.allSelection,currentArr);
              }else{
                this.allSelection=this.checkItem(currentArr,this.allSelection);
              }
            }
            this.currentSelection = JSON.parse(JSON.stringify(val));
          }
          this.multipleSelection=true;
        }
      },
      loadLocalData(data) {
        if (!data) {
          throw new Error(`When the type is 'local', you must set attribute 'data' and 'data' must be a array.`)
          this.showPagination = false
          return false
        }
        const cacheData = JSON.parse(JSON.stringify(data))
        this.tableData = this.dataFilter(data)
        this.cacheLocalData = data
        this.total = data.length
      },
      clearSelect(){
        this.$refs.table.clearSelection();
        this.allSelection=[];
			  this.currentSelection=[];
      },
      setSelect(arr){
        this.allSelection=arr;
      },
      setRowSelection(row,selected){
        this.$refs.table.toggleRowSelection(row,selected);
      },
      checkItem(arr1,arr2){
        let arr=[];
        for(let i=0;i<arr1.length;i++){
          let id=arr1[i][this.selectId];
          let isExit=false;
          for(let j=0;j<arr2.length;j++){
            let cid=arr2[j][this.selectId];
            if(id==cid){
              isExit=true;
              break;
            }
          }
          if(!isExit){
            arr.push(arr1[i]);
          }
        }
        return arr;
      },
      changePage(){  //改变当前页后，操作勾选项问题
        this.currentSelection=[];
        for(let i=0;i<this.tableData.length;i++){
          for(let j=0;j<this.allSelection.length;j++){
            if(this.tableData[i][this.selectId]==this.allSelection[j][this.selectId]){
              this.multipleSelection=false;
              this.$refs.table.toggleRowSelection(this.tableData[i],true); 
              this.currentSelection.push(this.tableData[i]);
            }
          }
        }
        this.multipleSelection=true;  //local需要用
      },
    },
    mounted() {
      // event: expand changed to `expand-change` in Element v2.x
      this.$refs['table'].$on('expand', (row, expanded) => this.emitEventHandler('expand', row, expanded))
      const { type, autoLoad, data, formOptions, params } = this
      if (type === 'remote' && autoLoad) {
        if (formOptions) {
          this.$refs['searchForm'].getParams((error, formParams) => {
            if (!error) {
              this.fetchHandler(Object.assign(formParams, params))
            }
          })
        } else {
          this.fetchHandler(params)
        }
      } else if (type === 'local') {
        this.loadLocalData(data)
      }
    },
    watch: {
      data: function(value) {
        this.loadLocalData(value)
      },
      resultInfo:function(value){
        this.$emit('resultData',value); 
        this.$nextTick(function(){
          this.changePage()
        })
      },
      webSocketInfo:function(value){
        this.tableData=this.webSocketInfo;
      },
    }

  }
</script>
