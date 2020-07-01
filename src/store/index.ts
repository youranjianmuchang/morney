import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '@/lib/idCreator'
import router from '@/router'

Vue.use(Vuex);//把store绑定到vue.prototype
const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as RootState,
  mutations: {
    createRecord(state, record: RecordItem) {
      const newRecord: RecordItem = clone(record);
      newRecord.createAt = new Date().toISOString();
      state.recordList.push(newRecord);
      store.commit('saveRecord');
    },
    fetchRecord(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem('recordList') || "[]"
      );
    },
    saveRecord(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter(tag => tag.id === id)[0]
    },
    createTag(state, name) {
      const names = state.tagList.map(tag => tag.name);
      if (names.indexOf(name) >= 0) {
        state.tagListError = new Error('标签已存在');
      } else {
        state.tagList.push({ 'id': createId().toString(), 'name': name });
        store.commit('saveTag');
      }
    },
    fetchTag(state) {
      state.tagList = JSON.parse(
        window.localStorage.getItem('tagList') || "[]"
      );
      if (state.tagList.length < 1) {
        store.commit('createTag', '衣');
        store.commit('createTag', '食');
        store.commit('createTag', '住');
        store.commit('createTag', '行');
      }
    },
    updateTag(state, payload: { id: string; name: string }) {
      const ids = state.tagList.map(tag => tag.id);
      if (ids.indexOf(payload.id) >= 0) {
        const names = state.tagList.map(tag => tag.name);
        if (names.indexOf(payload.name) < 0) {
          const currentTag = state.tagList.filter(tag => tag.id === payload.id)[0];
          if (currentTag) {
            currentTag.name = payload.name;
            store.commit('saveTag');
          }
        }
      }
    },
    removeTag(state, id: string) {
      let index = 0;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      state.tagList.splice(index, 1);
      store.commit('saveTag');
      router.back();
    },
    saveTag(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store;