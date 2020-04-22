<template>
    <div class="chat container">
        <h2 class="center teal-text "> hello {{ this.name }}</h2>
         <div class="card">
             <div class="card-content">
                 <ul class="messages" > 
                   <li v-for="message in messages" :key="message.id ">
                     <span class="teal-text">{{ message.name}} </span> 
                     <span class="grey-text text-darken-3">{{ message.content}} </span>
                     <span class="grey-text time">>{{ message.timestamp}} </span>
                   </li>
                 </ul>
             </div>
             <div class="card-action">
               <NewMessage :name='name' /> 
             </div>
         </div>
    </div>
</template>



<script>
import NewMessage from "@/components/NewMessage"
import db from '@/firebase/init'

export default {
  name: "welcome",
     props: ['name'], // name from welcome  (we recieve a prop from parent component)
     components: {
       NewMessage
     },  
     

  data() {
    return{
         messages:[]
    }
  },
  created() {
    // we want to listen to collection
    let ref = db.collection('messages').orderBy('timestamp')
    // setup listener to listen to this collection
    ref.onSnapshot(snapshot => {
      // console.log( snapshot.docChanges()) // snapshot database
      
      // when we recieve a change of type added  we take document(doc) and we pushing it(doc) to message[]
       snapshot.docChanges().forEach(change => {
         if(change.type == 'added'){ // type of change inside the db is added
          
             let doc = change.doc  
             this.messages.push({
               id : doc.id,
               name: doc.data().name, 
               content:doc.data().content,
               timestamp: doc.data().timestamp
             })
         }
         
       });

    })

  
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
