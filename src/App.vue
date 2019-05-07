<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <!--<router-view/>-->
      <BasicLayout></BasicLayout>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  #app {
    width: 100%;
    height: 100%;
    z-index: 1;
  }

</style>
<script>
    import BasicLayout from "./components/BasicLayout";
    export default {
        components: {BasicLayout}
    }
</script>