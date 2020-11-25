<template>
  <div class="about">
    <h1>{{test}}</h1>
  </div>
</template>
<script>
export default {
  data(){
    return{
      test:1
    }
  },
  mounted(){
    let _this = this;
    window.onresize = () => {
      return (() => {
       _this.test++
      })()
    }
  }
}
</script>
