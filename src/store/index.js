import { createStore } from 'vuex'
import axios from 'axios';
const sStoreURL = "https://sushistoreapi.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, value) {
      state.product = value
    },
    setSpinner(state, value) {
      state.showSpinner = value
    },
    setMessage(state, value) {
      state.message = value
    }
  },
  actions: {
    async login(context, payload) {
      const res = await axios.patch(`${sStoreURL}login`, payload);
      const {result, err} = await res.data;
      if(result) {
        context.commit('setUser', result);
      }else {
        context.commit('setMessage', err);
      }
    },
    async register(context, payload) {
      let res = await axios.post(`${sStoreURL}register`, payload);
      let {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
      }else {
        context.commit('setMessage', err);
      }
    },
    async fetchUsers(context) {
      let res = await axios.get(`${sStoreURL}users`);
      let {results, err} = await res.data;
      if(results) {
        context.commit('setUsers', results);
      }else {
        context.commit('setMessage', err);
      }
    },
    async updateUser(context, payload) {
      let res = await axios.put(`${sStoreURL}users/${payload.id}`, payload);
      let {msg, err} = await res.data;
      if(msg) {
        context.dispatch('fetchUsers')
      }else {
        context.commit('setMessage', err);
      }
    },
    async deleteUser(context, id) {
      console.log(`Delete: ${id}`);
      let res = await axios.delete(`${sStoreURL}user/${id}`);
      let {msg, err} = await res.data;
      if(msg) {
        context.dispatch('fetchUsers');
      }else {
        context.commit('setMessage', err);
      }
    },
    async addProduct(context, payload) {
      let res = await axios.post(`${sStoreURL}product`, payload);
      let {msg, err}  = await res.data;
      if(msg) {
        context.commit('setMessage', msg)
      }
      if(err) {
        context.commit('setMessage', err)
      }
    },
    async fetchProducts(context) {
      const res = 
      await axios.get(`${sStoreURL}products`);
      const {results, err} = await res.data;
      if(results) {
          context.commit('setProducts', results);
          context.commit('setSpinner', false);
      }
      if(err) {
          context.commit('setMessage', err)
      }
    },
    async fetchProduct(context, id) {
      const res = 
      await axios.get(`${sStoreURL}product/${id}`);
      const {results, err} = await res.data;
      if(results) {
          context.commit('setProduct', results);
          context.commit('setSpinner', false);
      }
      if(err) {
          context.commit('setMessage', err)
      }    
    },
    async updateProduct(context, payload) {
      const res = 
      await axios.put(`${sStoreURL}product/${payload.id}`, payload);
      const {msg, err} = await res.data;
      if(msg) {
          context.dispatch('fetchProducts');
      }
      if(err) {
          context.commit('setMessage', msg || err)
      }
    },
    async deleteProduct(context, id) {
      const res = await axios.delete(`${sStoreURL}product/${id}`);
      const {err, msg} = await res.data;
      if(msg) {
          context.dispatch('fetchProducts');
      }
      if(err) {
          context.commit('setMessage', err);
      }
    }
  },
  modules: {
  }
})