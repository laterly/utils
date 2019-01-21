<template>
  <div id="wrap" @click="print" ref='box'>
    {{msg}}
  </div>
</template>

<script>
  import uaSdk from "@/libs/untils/uaSdk";
  import print  from '@/libs/untils/print'; 
  export default {
    data() {
      return {
        msg: '打印'
      }
    },
    created() {
      // console.log(uaSdk.isWechat());
      // console.log(uaSdk.isAndroid());
      // console.log(uaSdk.isMobile());
    },
    methods: {
      print(){
            let windows = print(this.$refs.box.innerHTML);
            windows.close();
        },
    }
  }
</script>


<style scoped>
  
</style>
