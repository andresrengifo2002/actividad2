<template>
    <div>
        <label >userid</label>
        <input type="text" v-model="form.userid"/>
        <label >id</label>
        <input type="text" v-model="form.id"/>
        <label >title</label>
        <input type="text" v-model="form.title"/>
        <label >body</label>
        <input type="text" v-model="form.body"/>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            form:{
                userid: null,
                id: null,
                title: null,
                body: null,    


            }

        }

    },
    methods(){


    },
    computed(){

    },
    mounted() {
        this.axios.get("https://jsonplaceholder.typicode.com/posts/1").then(response =>rg)

    }


}

</script>
