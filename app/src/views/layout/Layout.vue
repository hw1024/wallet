<style lang="less">
  
</style>
<template>
  <div class="app-wrapper">
      <div>
        <loading :show="isLoading" :text="title"></loading>
      </div>
      <App-header class="header-container" v-if="$route.path !== '/user'"/>
        <App-main/>
      <App-footer class="footer-container" />
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { Loading } from "vux";
  import { AppHeader, AppFooter, AppMain } from 'views/layout';
  export default {
    name: 'Layout',
    data () {
      return {
        title: '加载中'
      }
    },
    computed: {
      ...mapState({
        isLoading: state => state.vux.isLoading
      })
    },
    components: { 
      AppHeader, 
      AppFooter,
      Loading,  
      AppMain
    },
    methods: {
    } 
  }
</script>
