<template>
  
  <div class="card">
      <div class="cardInfo">
      <div>{{props.task.title}}</div>
      <div>{{props.task.description}}</div>
      <!-- <button @click="updateTask()">Editar</button> -->
      <button @click="doneTask()">Feta</button>
      <button @click="deleteTask()">Eliminar</button>
    </div>
  </div>
  <br>
</template>

<script setup>
import { useAuthStore } from '../store/auth';
import { useTaskStore } from '../store/task';
import { defineProps } from 'vue';
import { createClient } from '@supabase/supabase-js';
import { ref } from 'vue';

const props = defineProps(['task']);
const taskStore = useTaskStore();
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

// const updateTask = (async () => {
//   await taskStore.updateTask(props.task.id)
//   props.task.title = title.ref('')
//   props.task.description = description.ref('')
//   taskStore.setTask()
// })
const doneTask = (async () => {
  await taskStore.doneTask(props.task.id, props.task.isCreated)
  taskStore.setTask()
})
const deleteTask = (async () => {
  await taskStore.deleteTask(props.task.id);
  taskStore.setTask()
});
</script>

<style>
.card{
  background-color: aqua;
}
.cardInfo{
  padding: 20px;
}
</style>