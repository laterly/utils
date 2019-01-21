<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
  import uaSdk from "@/libs/untils/uaSdk";
  export default {
    data() {
      return {
        msg: '111'
      }
    },
    created() {
      console.log(uaSdk.isWechat());
      console.log(uaSdk.isAndroid());
      console.log(uaSdk.isMobile());
    },
    methods: {
      
    }
  }
</script>


<style scoped>
  
</style>
