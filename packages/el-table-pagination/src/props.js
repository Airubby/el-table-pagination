
export const Props = {
    height: [String, Number],
    maxHeight: [String, Number],
    stripe: Boolean,
    border: Boolean,
    size:{
      type:String,
      default:"medium"
    },
    fit: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    highlightCurrentRow: Boolean,
    currentRowKey: [String, Number],
    rowClassName: [String, Function],
    rowStyle: [String, Function],
    rowKey: [String, Function],
    emptyText: String,
    defaultExpandAll: Boolean,
    expandRowKeys: Array,
    defaultSort: Object,
    tooltipEffect: String,
    showSummary: Boolean,
    sumText: String,
    summaryMethod: Function,
    spanMethod:Function,
    // custom attributes
    fetch: {
      type: Function
    },
    url: {
      type: String
    },
    method: {
      type: String,
      default: 'get',
      validator: value => {
        const methodTypes = ['get', 'post', 'put', 'delete'];
        return methodTypes.indexOf(value.toLowerCase()) !== -1;
      }
    },
    headers: {
      type: Object,
      default: () => {
        return {}
      }
    },
    listField: {
      type: String,
      default: 'data.list'
    },
    totalField: {
      type: String,
      default: 'data.total'
    },
    params: {
      type: Object,
      default: () => {
        return {}
      }
    },
    formOptions: {
      type: Object
    },
    autoLoad: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'remote',
      validator(value) {
        const types = ['remote', 'local']
        const validType = types.indexOf(value) !== -1
        if (!validType) {
          throw new Error(`Invalid type of '${value}', please set one type of 'remote' or 'local'.`)
        }
        return validType
      }
    },
    data: {
      type: Array,
      default:()=>{
        return []
      }
    },
    //type为remote的时候需要用webSocket推送更改table的值的table列表项
    webSocketInfo: {
      type: Array,
      default: () => {
        return []
      }
    },
    dataHandler: {
      type: Function
    },
    columns: {
      type: Array,
      required: true
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    //显示勾选了多少项
    showSelectAll: {
      type:Boolean,
      default:false
    },
    selectId:{  //显示勾选时的id，默认不给就为id
        type:String,
        default:'id'
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    showIndexTitle: {
      type: String,
      default: "序号"
    },
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 50, 100]
      }
    },
    paginationLayout: {
      type: String,
      default: 'total, prev, pager, next, jumper, sizes'
    },
    pageIndexKey: {
      type: String,
      default: 'pageIndex'
    },
    pageSizeKey: {
      type: String,
      default: 'pageSize'
    },
    pageIndex:{
      type: [Number,String],
      default: 1
    },
    pageSize:{
      type: [Number,String],
      default:10
    }
}
