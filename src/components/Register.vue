<template>
    <div class="section">
        <div class="container">
            <form @submit.prevent="onSubmit">
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input v-model="email" class="input" type="email" placeholder="email">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input v-model="password" class="input" type="password" placeholder="password">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button is-link is-fullwidth" type="submit" placeholder="Registra't">Registra't</button>
                        <!-- <input class="button is-link is-fullwidth" type="submit" placeholder="Registra't"> -->
                    </div>
                </div>
            </form>
            <div>
                Ja estàs registrat? 
                <router-link :to="{name: 'login'}">Inicia sessió</router-link>
            </div>
        </div>
    </div>
    <!-- 
    1 - Hacer un formulario de login con los inputs de 
    nombre, email y contrasena 
    2- cuando enviemos el formulario actualizar el store
    y redirigirnos al home
    -->
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'

const router = useRouter();
const authStore = useAuthStore();
const name = ref('');
const email = ref('');
const password = ref('');

const onSubmit = () => {
    console.log('formulario enviado', email.value, password.value)
    authStore.register(email.value, password.value);
    // Nos redirige al home
    router.push({ name: 'login' })
}

</script>
<style scoped>
.container{
    background-color: green;
    height: 100%;
    width: 100%;
}
</style>