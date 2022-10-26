<template>
    <div class="auth">
        <div class="authThings">
    <h1>Què farem avui?</h1>
    <router-view></router-view>
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
</style>