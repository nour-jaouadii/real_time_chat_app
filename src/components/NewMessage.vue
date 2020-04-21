<template>
    <div class="new-message">
        <form @submit.prevent='addMessage'>
           <label for="new-message">New Message (enter to add) </label>
           <input type="text" name="new-message" id="" v-model='newMessage' > 

        </form> 
    </div>
</template>

<script>
export default {
    name:'New Message ',
     props: ['name'], // name from welcome  (we recieve a prop from parent component)
    data() {
        return{
            newMessage: null, 

        }
    },
    methods: {
        addMessage(){
            console.log(this.newMessage, this.name, Date.now)

        } 
    }
}
</script>

