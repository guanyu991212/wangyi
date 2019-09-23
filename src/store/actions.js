import {RECEIVE_GOODS,RECEIVE_CATEGORYS} from './mutations-type'
import {reqGoods,reqCategorys} from '../../src/api'

export default{
  async getGoods ({commit}){
    const result =await reqGoods()
    if (result.code === 0) {
      const addgoods = result.data
      // 提交更新数据
      commit(RECEIVE_GOODS, addgoods)
    }
  },
  async getCategorys ({commit}){
    const result =await reqCategorys()
    if (result.code === 0) {
      const addCategorys = result.data
      // 提交更新数据
      commit(RECEIVE_CATEGORYS, addCategorys)
    }
  }

}
