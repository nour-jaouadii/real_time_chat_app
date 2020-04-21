<template>
  <div class="welcome container">
    <div class="card">

      <div class="card-content center-align ">
        <h2 class="teal-text">welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" id="name" name="name" v-model="name">  
          <p v-if="feedback" class="red-text">{{ feedback }} </p>      
          <button class="btn teal">Enter chat</button>
        </form>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "welcome",
 
  data() {
    return{
         name: null,
         feedback: null,

    }
  },
  methods:{
    enterChat(){
      if(this.name){
           this.$router.push({name: 'chat', params: {name: this.name} }) 
           //  so we're redirecting them to chat component and we're passing the (name) in data as parameter  which is actualy a prop in chat.vue
           // and we said that u want to accept  this prop in chat.vue by passing it in router (  props:true,)
          this.feedback= ""
      }else{
          this.feedback = 'you must enter a name to join'
      }
    },

  }, //end methods
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



</style>


