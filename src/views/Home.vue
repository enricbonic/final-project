<template>
  <div class="navbar">
    <h1>Què farem avui?</h1>
    <div class="languageOut">
    <select name="idioma" id="idioma">
                    <option value="cat">Català</option>
                    <option value="esp">Español</option>
                    <option value="eng">English</option>
                    <option value="fra">Français</option>
                </select>
                <router-link :to="{ name: 'login' }"
                ><button class="button" type="submit" placeholder="logout">
                  Tanca la sessió
                </button></router-link
                >
              </div>
  </div>
  <!-- <router-link :to="{name: 'creartask'}"><button>Tasca nova</button></router-link> -->
  <section>
    <CrearTask />
    <div class="arxiu">
      <button @click="filtered = 'unfinished'"><h1>Pendents</h1></button>
      <button @click="filtered = 'done'"><h1>Fetes</h1></button>
    <button @click="filtered = 'all'"><h1>Totes</h1></button>
  </div>
    <div class="taskGrid">
      <div v-for="task in tasks">
        <MainTasks :task="task" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
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

const tasks = computed(() => {
  if (filtered.value === 'all') {
    return taskStore.task;
  } else if (filtered.value === 'done'){
  return taskStore.task.filter(task => task.isCreated === true) 
  } else if (filtered.value === 'unfinished'){
  return taskStore.task.filter(task => task.isCreated === false)
  }
})
const filtered = ref('all')

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
  margin: 0px 20px;
}
.navbar>h1{
    color: beige;
    text-shadow: 1px 1px cornflowerblue;
}
.languageOut{
  margin: 20px;
}
select{
  background-color: cornflowerblue;
  color: white;
  border: none;
  padding: 2px;
}
select:hover{
  text-decoration: underline;
}
.languageOut button{
  border: 1px solid cornflowerblue;
  padding: 2px;
  color: cornflowerblue;
}
.taskGrid{
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 5%;
    margin: 2%;
    justify-content: center;
    
}
.arxiu{
  display: flex;
  justify-content: space-around;
  margin: 0% 30%;
}
button>h1{
color: cornflowerblue;
}
button:hover{
  text-decoration: underline;
  text-decoration-color: cornflowerblue;
}
@media (max-width: 1400px){
  .taskGrid{
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 5%;
    margin: 2%;
    justify-content: center;
}
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
