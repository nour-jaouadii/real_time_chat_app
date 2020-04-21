<template>
  <div class="home">
    <welcome  />
  </div>
</template>

<script>
// @ is an alias to /src
import welcome from "@/components/welcome.vue";

export default { 
  name: "Home",
  components: {
    welcome
  }
};
</script>
<style>
   .welcome{
     max-width: 480px;
     margin-top: 100px;
   }
   .welcome h2{
     font-size: 3em;
   } 
   .welcome button{
      
     margin: 30px auto;
   }

</style>

