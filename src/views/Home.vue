<template>
    <h1>Home</h1>
   <router-link :to="{ name: 'login' }"><button class="button is-link is-fullwidth" type="submit" placeholder="logout">Log Out</button></router-link>
<MainTasks />
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'
import MainTasks from '../components/MainTasks.vue'

const router = useRouter();
const authStore = useAuthStore();
const name = ref('');
const email = ref('');
const password = ref('');

const onSubmit = () => {
    console.log('formulario enviado', email.value, password.value)
    authStore.logOut(email.value, password.value);
    // Nos redirige al home
    router.push({ name: 'login' })
}

</script>
<style scoped>
</style>