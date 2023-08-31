<template>
    <button @click="getCode">Enter</button>
 </template>
  
 <script>
 const clientId = "bd7da8bef82caf0f2d50";
 const clientSecret = "2d2295771930a82bcf8e449716a27e4938512645";
 export default {
    name: "auth_page",
    methods: {
        getCode() {
            const githubAuthApi = "https://github.com/login/oauth/authorize";
  
            const params = new URLSearchParams();
           
            params.append('client_id', clientId);
            params.append('scope', 'repo:status read:user');
  
            window.location.href = `${githubAuthApi}?${params}`;
  
        }
    },
    async created() {
            const code = new URLSearchParams(window.location.search).get("code");
            if (code) {
               try {
                    const params = new URLSearchParams();
                    params.append('client_id', clientId);
                    params.append('client_secret', clientSecret);
                    params.append('code', code)


                    let url = `https://github.com/login/oauth/access_token?${params}`;
                    let response = await fetch(url, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8',
                            'Access-Control-Allow-Origin': '*',
                       }
                    });

                    const result = await response.json();
                   

                    console.log(result)
                //     const params = new URLSearchParams();
                //     params.append('client_id', clientId);
                //     params.append('client_secret', clientSecret);
                //     params.append('code', code);
            
                //    const response = await fetch(`https://github.com/login/oauth/access_token?${params}`, {
                //        method: "POST",
                //        mode: 'no-cors',
                //        headers: {
                //             "Content-Type": "application/json",
                //             "Access-Control-Allow-Origin": "*",
                //        }
                //    });

                //    const { token } = await response.json();
                  
                //    localStorage.setItem("token", token);
                //    this.$router.replace({ name: "home" });
  
                //    console.log(token);
               } catch (e) {
                console.log(e)
               }
            }
        }
 };
 </script>