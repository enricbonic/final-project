<template>
  <section class="crearTask">
      <div class="formTascanova" v-if="writing">
        <form  @submit.prevent="addTask()" id="form" action="">
            <button @click="write"><h1>Amaga</h1></button>
            <br>
            <!-- <label for="title">Títol</label> -->
            <input v-model="title" class="title" type="text" id="title" placeholder="Què has de fer?">
            <br>
            <!-- <label for="description">Detalls</label> -->
            <textarea v-model="description" name="description" id="description" cols="30" rows="10"
            placeholder="Explica-li què ha de fer al teu jo del futur."></textarea>
            <br>
            <button class="submit" id="submit" type="submit"><h1>Crea el recordatori</h1></button>
        </form>
    </div>
    <div class="botoTascanova" v-else>
        <form action="">
        <button @click="write"><h1>Crea una tasca nova</h1></button>
    </form>
    </div>
    </section>
  </template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTaskStore } from '../store/task';
import { useAuthStore } from '../store/auth';

const authStore = useAuthStore();
const router = useRouter();
const taskStore = useTaskStore();
const title = ref('');
const description = ref('');
const writing = ref(false);

const write = () => {
  writing.value = !writing.value;
};

console.log(`Títol: ${title.value}`);
console.log(`Descripció: ${description.value}`);

const addTask = (async () => {
    await taskStore.addTask(title.value, description.value, authStore.user.id);
    // router.push({ name: 'maintasks' });
    title.value = '';
    description.value = '';
    taskStore.setTask()
    router.push({ name: 'home' })
});
</script>

<style scoped>
.crearTask{
    margin: 0;
}
form{
    display: flex;
    /* background-color: rgb(236, 236, 236); */
    border: 1px solid;
    flex-direction: column;
    padding: 20px;
    margin: 2% 10%;
    border-radius: 8px;
}
form>input{
    height: 50px;
    width: 100%;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: beige;
    border-radius: 5px;
}
form>textarea{
    width: 100%;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: beige;
    border-radius: 5px;
    min-height: 200px;
}
form>button{
    height: 50px;
    border: 0;
    background-color:cornflowerblue;
    color: white;
    border-radius: 5px;
}
.botoTascanova>button{
    height: 50px;
    border: 0;
    background-color:cornflowerblue;
}
</style>