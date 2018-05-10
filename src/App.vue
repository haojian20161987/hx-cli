<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    openOnetab(){
      window.open('/screen');
    }
  },
  mounted:function(){
    //window.open('/screen');
  }
}
</script>
<style lang="less">
@import './my-theme/index.less';
@import './styles/kj.less';
</style>





