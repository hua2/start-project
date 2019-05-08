<template>
  <div id="app">
    <BasicLayout/>
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