<template>
  <div class="navbar">
    <h1>Què farem avui?</h1>
    <router-link :to="{ name: 'login' }"
      ><button class="button" type="submit" placeholder="logout">
        Log Out
      </button></router-link
    >
  </div>
  <!-- <router-link :to="{name: 'creartask'}"><button>Tasca nova</button></router-link> -->
  <section>
    <CrearTask />
    <div class="taskGrid">
      <div v-for="task in taskStore.task">
        <MainTasks :task="task" />
      </div>
    </div>
    <br>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";
import { useTaskStore } from "../store/task";
import MainTasks from "../components/MainTasks.vue";
import CrearTask from "../components/CrearTask.vue";
const router = useRouter();
const authStore = useAuthStore();
const email = ref("");
const password = ref("");
const taskStore = useTaskStore();

const onSubmit = () => {
  console.log("formulario enviado", email.value, password.value);
  authStore.logOut(email.value, password.value);
  router.push({ name: "login" });
};
taskStore.setTask();


</script>
<style scoped>
section{
  display: flex;
  flex-direction: column;
    margin: 0;
    padding: 0;
    position: relative;
}
.navbar {
  display: flex;
  justify-content: space-between;
}

.taskGrid{
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 5%;
    margin: 2%;
    justify-content: center;
    
}
@media (max-width: 950px){
  .taskGrid{
    display: grid;
    grid-template-columns: auto auto;
    gap: 5%;
    margin: 2%;
    justify-content: center;
}
}
@media (max-width: 550px){
  .taskGrid{
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
}
}
</style>
