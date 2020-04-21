<template>
    <div class="chat container">
        <h2 class="center teal-text "> hello {{ this.name }}</h2>
         <div class="card">
             <div class="card-content">
                 <ul class="messages"></ul>
                   <li>
                     <span class="teal-text">Name </span> 
                     <span class="grey-text text-darken-3">message</span>
                     <span class="grey-text time">time</span>
                   </li>
             </div>
             <div class="card-action">
               <NewMessage :name='name' /> 
             </div>
         </div>
    </div>
</template>



<script>
import NewMessage from "@/components/NewMessage"

export default {
  name: "welcome",
     props: ['name'], // name from welcome  (we recieve a prop from parent component)
     components: {
       NewMessage
     },  

  data() {
    return{
         
    }
  },
 
};
</script>

<style>
.chat h2 {
  font-size:2.6em;
  margin-bottom: 40px;
} 
.chat span{
  font-size: 1.4em;

  }
 .chat .time{
   display: block;
   font-size: 1.2em;

 } 
</style>
