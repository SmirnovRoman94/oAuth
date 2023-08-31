<template>
     <h1>Root page</h1>
     <button @click="getUser">GetUser</button>
</template>

<script>
export default {
    name: "home_page",
    methods: {
        async getUser(){
            try {
               const response = await fetch("https://api.github.com/user", {
                   headers: {
                       Authorization: `Bearer a6abccded213c3d65560`
                   }
               });
               const data = await response.json();
 
               console.log(data);
           } catch (error) {
               console.log(error)
           }
        }
    }
}
</script>