import {RECEIVE_GOODS,RECEIVE_CATEGORYS} from'./mutations-type'

export default{

[RECEIVE_GOODS](state,goods){
  state.goods=goods
},
[RECEIVE_CATEGORYS](state,categorys){
  state.categorys =categorys
}

}
