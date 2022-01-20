import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //所有的任务列表
    list:[],
    inputValue:'aaa',
    nextId:5,
    viewKey:'all'
  },
  mutations: {
    initList(state,list){
      state.list=list
    },
    setInputValue(state,inputValue){
      state.inputValue=inputValue
    },
    addItem(state){
      const obj={
        id:state.nextId,
        info:state.inputValue,
        done:false
      }
      state.list.push(obj)
      state.nextId++
      state.inputValue=''
    },
    removeItem(state,id){
     state.list=state.list.filter(item=>item.id!==id)
    },
    changeStatus(state,params){
      state.list.forEach(item=>{
        if(item.id===params.id){
          item.done=params.status
        }
      })
    },
    cleanDone(state){
      state.list=state.list.filter(item=>!item.done)      
    },
    changeViewKey(state,key){
      state.viewKey=key
    }
  },
  actions: {
   async getList(context){
     const {data}= await axios.get('/list.json')
     context.commit('initList',data)
    }
  },
  getters:{
    unDoneLength(state){
      return state.list.filter(item=>!item.done).length
    },
    fliterList(state){
      if(state.viewKey==='all'){
        return state.list
      }
      if(state.viewKey==='undone'){
        return state.list.filter(item=>!item.done)
      }
      if(state.viewKey==='done'){
        return state.list.filter(item=>item.done)
      }
    }
  },
  modules: {
  }
})
