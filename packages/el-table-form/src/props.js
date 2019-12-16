
export const Props = {
  size: {
    type: String,
    default: '',
    validator: sizeValidator
  },
  showResetBtn: {
    type: Boolean,
    default: false
  },
  inline: {
    type: Boolean,
    default: false
  },
  fuzzy: {
    type: Boolean,
    default: false
  },
  labelWidth: Number,
  itemWidth: Number,
  submitHandler: Function,
  submitLoading: {
    type: Boolean,
    default: false
  },
  submitBtnText: {
    type: String,
    default: '查询'
  },
  resetBtnText: {
    type: String,
    default: '重置'
  },
  initParams:{
    type: Object,
    default: () => {
      return {}
    }
  },
  forms: {
    type: Array,
    required: true
  }
}
function sizeValidator(value) {
  const methodTypes = ['large', 'small', 'mini'];
  const valid = methodTypes.indexOf(value.toLowerCase()) !== -1 || value === ''
  if (!valid) {
    throw new Error(`Size must be one of ['large', 'small', 'mini']`)
  }
  return valid
}