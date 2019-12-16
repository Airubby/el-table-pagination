
<template>
  <el-form :model="params" :inline="inline" ref="form" @submit.native.prevent="searchHandler()"
    :label-width="labelWidth ? (labelWidth + 'px') : ''">
    <el-form-item v-for="(form, index) in forms" :key="index"
      :prop="form.itemType != 'datetimerange' ? (form.itemType != 'daterange'? form.prop: (datePrefix + index)) : (dateTimePrefix + index)"
      :label="form.label" :rules="form.rules || []"
      :label-width="form.labelWidth ? (form.labelWidth + 'px') : ''">
      <el-input v-if="form.itemType === 'input' || form.itemType === undefined"
        v-model="params[form.modelValue]"
        :size="form.size ? form.size : size"
        :readonly="form.readonly"
        :disabled="form.disabled"
        :placeholder="form.placeholder"
        :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')" />
      <el-select v-else-if="form.itemType === 'select'"
        v-model="params[form.modelValue]"
        :size="form.size ? form.size : size"
        :disabled="form.disabled"
        :placeholder="form.placeholder"
        :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')" >
        <el-option v-for="(option, optionIndex) in form.options" :key="optionIndex + '_local'"
          :value="(typeof option === 'object') ? option[form.valueKey || 'value'] : option"
          :label="(typeof option === 'object') ? option[form.labelKey || 'label'] : option" />
        <el-option v-for="(op, opIndex) in selectOptions[selectOptionPrefix + index]" :key="opIndex + '_remote'"
          :value="(typeof op === 'object') ? op[form.valueKey || 'value'] : op"
          :label="(typeof op === 'object') ? op[form.labelKey || 'label'] : op" />
      </el-select>
      <el-date-picker v-else-if="form.itemType === 'date'"
        v-model="params[form.modelValue]"
        type="date" :placeholder="form.placeholder"
        :size="form.size ? form.size : size"
        :disabled="form.disabled"
        :readonly="form.readonly"
        :editable="form.editable"
        :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
        :picker-options="form.pickerOptions || {}" />
      <el-date-picker v-else-if="form.itemType === 'daterange'"
        v-model="params[form.modelValue]"
        :size="form.size ? form.size : size"
        type="daterange" @change="date => changeDate(date, form.prop.split('-')[0], form.prop.split('-')[1])"
        :disabled="form.disabled"
        :readonly="form.readonly"
        :editable="form.editable"
        :placeholder="form.placeholder"
        :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
        :picker-options="form.pickerOptions || {}" />
    <el-date-picker v-else-if="form.itemType === 'datetimerange'"
        v-model="params[form.modelValue]"
        :size="form.size ? form.size : size"
        type="datetimerange" @change="datetime => changeTimeDate(datetime, form.prop.split('-')[0], form.prop.split('-')[1])"
        :disabled="form.disabled"
        :readonly="form.readonly"
        :editable="form.editable"
        :placeholder="form.placeholder"
        :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
        :picker-options="form.pickerOptions || {}" />
    </el-form-item>
    <el-form-item label="" v-if="forms.length>0">
      <el-button
        type="primary"
        :size="size"
        @click="searchHandler"
        :loading="submitLoading" v-if="forms.length>0">
        {{ submitBtnText }}
      </el-button>
      <el-button type="primary" :plain="true"
        :size="size" v-if="showResetBtn"
        @click="resetForm"
        :loading="submitLoading">
        {{ resetBtnText }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { Props } from './props'

  export default {
    name: 'ElTableForm',
    props: Props,
    data() {
      const { forms, fuzzy ,initParams } = this.$props
      const datePrefix = 'daterange-prefix'
      const dateTimePrefix = 'datetimerange-prefix'
      const selectOptionPrefix = 'select-option-prefix'
      let dataObj = {
        selectOptions: {}
      }

      let params = {}
      let format = {}
      let fuzzyOps = {}

      forms.forEach((v, i) => {
        const propType = typeof v.prop
        if (propType === 'string') {
          v.modelValue = v.prop
          params[v.prop] = ''
          
          fuzzyOps[v.prop] = v.fuzzy ? v.fuzzy : fuzzy
          if (v.format) {
            format[v.prop] = v.format
          }
        } else if (propType === 'object' && Object.prototype.toString.call(v.prop) === '[object Array]') {
          v.prop.forEach(vv => {
            params[vv] = ''
            if (v.format) {
              format[vv] = v.format
            }

            fuzzyOps[vv] = v.fuzzy ? v.fuzzy : fuzzy
          })
        }
        if (v.itemType === 'daterange') {
          params[datePrefix + i] = ''
          v.modelValue = datePrefix + i
        }
        if (v.itemType === 'datetimerange') {
          params[dateTimePrefix + i] = ''
          v.modelValue = dateTimePrefix + i
        }
        if (v.itemType === 'select' && (v.selectFetch || v.selectUrl)) {
          const dataKey = selectOptionPrefix + i
          dataObj.selectOptions[dataKey] = []
          const { $axios } = this
          if (!v.selectMethod) {
            v.selectMethod = 'get'
          }
          this.getRemoteData({
            fetch: v.selectFetch ? v.selectFetch : () => {
              return $axios[v.selectMethod](v.selectUrl, v.selectMethod.toLowerCase() === 'get' ?
                     { params: v.selectParams } : v.selectParams)
            },
            dataKey,
            resultField: v.selectResultField || 'result',
            resultHandler: v.selectResultHandler
          })
        }
       
      })

      return {
        params,
        datePrefix,
        dateTimePrefix,
        selectOptionPrefix,
        dataObj:dataObj,
        format,
        fuzzyOps,
      }
    },
    computed: {
     
      itemStyle() {
        const { itemWidth } = this
        if (itemWidth) {
          return `width: ${itemWidth}px;`
        }
        return ''
      }
       
    },
    methods: {
      isArray(value) {
        return typeof value === 'object' && Object.prototype.toString.call(value) === '[object Array]'
      },
      searchHandler() {
        this.getParams((error, params) => {
          if(!error) {
            const { submitHandler } = this
            if (submitHandler) {
              submitHandler(params)
            } else {
              throw new Error('Need to set attribute: submitHandler !')
            }
          }
        })
      },
      getParamFuzzy() {
        return this.fuzzyOps
      },
      getParams(callback) {
        this.$refs['form'].validate(valid => {
          if (valid) {
            const { params, datePrefix,dateTimePrefix, format } = this
            let formattedForm = {}
            Object.keys(params).forEach(v => {
              if (v.indexOf(datePrefix) === -1&&v.indexOf(dateTimePrefix) === -1) {
                formattedForm[v] = format[v] ? format[v](params[v], v) : params[v]
              }
            })
            if (callback) callback(null, formattedForm)
          } else {
            if (callback) callback(new Error())
          }
        })
      },
      resetForm() {
        this.$refs['form'].resetFields()
      },
      changeDate(date, startDate, endDate) {
        let dates
        if (date === null) {
          this.params[startDate] = ''
          this.params[endDate] = ''
          return
        }
        if (typeof date === 'string') {
          dates = date.split(' - ')
        } else if (date && date.hasOwnProperty('length')) {
          const firstDate = date[0]
          const secondDate = date[1]
          dates = [
            `${firstDate.getFullYear()}-${('0' + (firstDate.getMonth() + 1)).substr(-2)}-${('0' + firstDate.getDate()).substr(-2)}`,
            `${secondDate.getFullYear()}-${('0' + (secondDate.getMonth() + 1)).substr(-2)}-${('0' + secondDate.getDate()).substr(-2)}`
          ]
        }

        this.params[startDate] = dates[0]
        this.params[endDate] = dates[1]
      },
      changeTimeDate(datetime, startDate, endDate) {
        let dates
        if (datetime === null) {
          this.params[startDate] = ''
          this.params[endDate] = ''
          return
        }
        if (typeof datetime === 'string') {
          dates = datetime.split(' - ')
        } else if (datetime && datetime.hasOwnProperty('length')) {
          const firstDate = datetime[0]
          const secondDate = datetime[1]
          dates = [
            `${firstDate.getFullYear()}-${('0' + (firstDate.getMonth() + 1)).substr(-2)}-${('0' + firstDate.getDate()).substr(-2)} ${('0' + firstDate.getHours()).substr(-2)}:${('0' + firstDate.getMinutes()).substr(-2)}:${('0' + firstDate.getSeconds()).substr(-2)}`,
            `${secondDate.getFullYear()}-${('0' + (secondDate.getMonth() + 1)).substr(-2)}-${('0' + secondDate.getDate()).substr(-2)} ${('0' + secondDate.getHours()).substr(-2)}:${('0' + secondDate.getMinutes()).substr(-2)}:${('0' + secondDate.getSeconds()).substr(-2)}`
          ]
        }

        this.params[startDate] = dates[0]
        this.params[endDate] = dates[1]
      },
      getRemoteData({ fetch, dataKey, resultField, resultHandler }) {
        fetch().then(response => {
          let result = response
          if (typeof response === 'object' && !this.isArray(response)) {
            if (resultField.indexOf('.') !== -1) {
              resultField.split('.').forEach(vv => {
                result = result[vv]
              })
            } else {
              result = response[resultField]
            }
          }

          if (!result || !(result instanceof Array)) {
            console.warn(`The result of key:${resultField} is not Array. 接口返回的字段:${resultField} 不是一个数组`)
          }

          if (this.resultHandler) {
            this.selectOptions[dataKey] = result.map(this.resultHandler)
          } else {
            this.selectOptions[dataKey] = result
          }
        })
      }
    },
    watch:{
        params:{
          handler:function(val,oldval){
              this.forms.forEach((v, i) => {
                for(var item in this.params){
                   if(v.prop==item){
                     v.propValue=this.params[item];
                     continue;
                   }
                }
              })
              var allNull=true;
              for(var item in this.params){
                  if(this.params[item]!=''&&this.params[item]!=null){
                    allNull=false;
                    break;
                  }
              }
              if(allNull){
                  this.searchHandler();
              }
          },
          deep: true
        },
        forms:{
          handler:function(val,oldval){
              this.forms.forEach((v, i) => {
                for(var item in this.params){
                   if(v.prop==item){
                     this.params[item]=v.propValue;
                     continue;
                   }
                }
              })
          },
          deep: true
        },
        //上面两个只针对一个下拉框根据另一个下拉框的条件筛选用的
        initParams:{
          handler:function(val,oldval){
              this.searchHandler();
          },
          deep: true
        },
        //下面这个用上面的了，因为有下拉框筛选条件的问题
        // params:{
        //   handler:function(val,oldval){
        //       var allNull=true;
        //       for(var item in this.params){
        //           if(this.params[item]!=''&&this.params[item]!=null){
        //             allNull=false;
        //             break;
        //           }
        //       }
        //       if(allNull){
        //           this.searchHandler();
        //       }
        //   },
        //   deep: true
        // },

    }
    
  }
</script>
