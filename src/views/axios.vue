<template>
    <div>
        <navbar></navbar>
        <div >
        <table >
            <thead>
                <tr>
                    <label >idPanaderia</label>
                    <input type="text" v-model="form.userid"/>
                    <label >id</label>
                    <input type="text" v-model="form.id"/>
                    <label >image</label>
                    <input type="text" v-model="form.title"/>
                    <label >body</label>
                    <input type="text" v-model="form.body"/>
                </tr>
            </thead>
            <tbody>  

              
            </tbody>   
             
    
        </table>
        </div>
        
    </div>
    </template>
    <script>

import axios from 'axios'
export default{
    data(){
        return{
            posts:null

        }  
    },
    methods:{
        actualizar(id){
            this.$router.push("/actualizar/"+id)
        }    
    },
    computed:{
    },
    components:{

    },
    mounted() {  
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
            console.log(response.data)
            this.posts=response.data
        })
    },
}
</script>