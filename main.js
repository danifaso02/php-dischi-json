const { createApp } = Vue;

createApp({
    data() {
      return {
        dischi: [],
      };
    },
    created(){
        axios.get("http://localhost/php-dischi-json/api.php").then((res) => {
        console.log(res.data);
        this.dischi = res.data;
        });
    },
}).mount('#app');