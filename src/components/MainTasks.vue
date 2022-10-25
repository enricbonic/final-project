<template>
   <div class="updateCard" v-if="editing">
    <div class="updateInfo">
      <textarea v-model="updateTask.title" name="" id="" cols="30" rows="10">{{props.task.title}}</textarea>
      <textarea v-model="updateTask.description" name="" id="" cols="30" rows="10">{{props.task.description}}</textarea>
      <div>
        <button @click="saveTask">Guarda els canvis</button>
        <button @click="edit">Cancel·la</button>
      </div>
    </div>
  </div>
  <div class="card" v-else>
    <div class="cardInfo">
      <div class="titol">{{ props.task.title }}</div>
      <div class="descripcio">{{ props.task.description }}</div>
      <div>
        <button @click="edit">Editar</button>
        <button v-if="doing" @click="doneTask()">Tasca feta</button>
        <button v-else @click="doneTask()">Torna a crear</button>
        <button @click="deleteTask()">Eliminar</button>
      </div>
    </div>
  </div>
  <br />
  
  <router-view></router-view>
</template>

<script setup>
import { useAuthStore } from "../store/auth";
import { useTaskStore } from "../store/task";
import { defineProps } from "vue";
import { createClient } from "@supabase/supabase-js";
import { ref } from "vue";

const taskStore = useTaskStore();
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);
const props = defineProps({ task: Object });
const editing = ref(false);
const doing = ref(true);


const edit = () => {
  editing.value = !editing.value;
};
const updateTask = ref ({
    title: props.task.title,
    description: props.task.description
})
const saveTask = (async () => {
    await taskStore.updateTask(
        updateTask.value.title,
        updateTask.value.description,
        props.task.id
    );
    editing.value = !editing.value;
    taskStore.setTask();
});

const doneTask = async () => {
  await taskStore.doneTask(props.task.id, !props.task.isCreated);
  taskStore.setTask();
  console.log(props.task.id);
  doing.value = !doing.value
};
const deleteTask = async () => {
  await taskStore.deleteTask(props.task.id);
  taskStore.setTask();
};
</script>

<style>
.card {
  background-color: aqua;
  width: 300px;
  height: 200px;
  display: flex;
  border-radius: 8px;
}
.cardInfo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.titol {
  font-size: 20px;
  font-weight: bold;
}
.descripcio {
  font-weight: lighter;
}
.updateCard {
  background-color: aqua;
  width: 300px;
  height: 200px;
  display: flex;
  border-radius: 8px;
}
.updateInfo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
