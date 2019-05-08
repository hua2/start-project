
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
  import { one } from '@/request/api';// 导入我们的api接口
  export default {
    name: 'home',
    created () {
      this.onLoad();
    },
    methods: {
      // 获取数据
      onLoad() {
        // 调用api接口，并且提供了两个参数
        one({
          // type: 0,
          // sort: 1
        }).then(res => {
          // 获取数据成功后的其他操作
          console.log(res)
        })
      }
    }
  }
</script>