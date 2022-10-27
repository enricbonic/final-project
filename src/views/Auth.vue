<template>
    <div class="auth">
        <div class="authThings">
    <h1>Què farem avui?</h1>
    <div class="authFlex">
    <router-view></router-view>
    <h2>No saps distingir "Sign In" de "Log In"? 
        <br> Nosaltres tampoc! 
    <br> Aquí podràs registrar-te o iniciar sessió</h2>
</div>
</div>
    <Footer></Footer>
</div>
</template>
<script setup>
import Footer from '../components/Footer.vue'
</script>
<style scoped>
.auth{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}
.authThings{
    padding: 20px;
}
.authFlex{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
}
.authFlex>h2{
    width: 40%;
}
@media (max-width: 600px){
.authFlex{
    flex-direction: column;
    align-items: center;
}
.authFlex>h2{
    width: 350px;
    text-align: center;
   
}
}
</style>