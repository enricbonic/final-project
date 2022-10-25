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
                <br>
                <div class="field">
                    <label class="label">Contrasenya</label>
                    <div class="control">
                        <input v-model="password" class="input" type="password" placeholder="password">
                    </div>
                </div>
                <br>
                <div class="field">
                    <label class="label">Confirma la contrasenya</label>
                    <div class="control">
                        <input v-model="confirmPassword" class="input" type="password" placeholder="confirm password">
                    </div>
                </div>
                <br>
                <div class="field">
                    <div class="control">
                        <button class="button is-link is-fullwidth" type="submit" placeholder="Registra't">Registra't</button>
                        <!-- <input class="button is-link is-fullwidth" type="submit" placeholder="Registra't"> -->
                    </div>
                </div>
                <br>
                <div>
                    Ja estàs registrat? 
                    <router-link :to="{name: 'login'}">Inicia sessió</router-link>
                </div>
            </form>
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
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const onSubmit = (async () => {
    console.log('formulario enviado', email.value, password.value, confirmPassword.value)
    if (password.value === confirmPassword.value){
        try {
        await authStore.register(email.value, password.value);}
        catch (error) {
            console.log(error)
        }
        // email.value = '';
        // password.value = '';
        // confirmPassword.value = '';
        // Nos redirige al home
        router.push({ name: 'login' });
    } else {
        alert('Les contrasenyes no coincideixen')
    }
});

</script>
<style scoped>
.container{
    border: black 1px solid;
    border-radius: 8px;
    height: 100%;
    width: 350px;
}
.container>form{
    padding: 20px;
}
.field>div>input{
    height: 50px;
    width: 100%;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: beige;
    border-radius: 5px;
}
.field>div>button{
    height: 50px;
    width: 100%;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: cornflowerblue;
    color: white;
    border-radius: 5px;
}
</style>