<template>
  <div>
      
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.$axios.get("http://xx.com/api/app/banner").then((res)=>{
            console.log(res);
        })
    }
}
</script>

<style>

</style>