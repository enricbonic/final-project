<template>
  <section class="mainTask">
    <div class="tasksGrid" v-if="editing">
      <div class="updateCard">
        <div class="updateInfo">
          <label for="titol">Títol de la tasca</label>
          <textarea
            v-model="props.task.title"
            name="titol"
            id="titol"
            cols="30"
            rows="10"
            >{{ props.task.title }}</textarea
          >
          <label for="descripcio">Descripció</label>
          <textarea
            v-model="props.task.description"
            name="descripcio"
            id="descripcio"
            cols="30"
            rows="10"
            >{{ props.task.description }}</textarea
          >
          <div class="botons">
            <button @click="saveTask">Guarda els canvis</button>
            <button @click="edit">Cancel·la</button>
          </div>
        </div>
      </div>
    </div>
    <div class="tasksGrid" v-else>
      <div :class="[props.task.isCreated ? 'cardDone':'card']">
        <div class="cardInfo">
          <div>
            <div class="topCard">
              <div class="titol">{{ props.task.title }}</div>
              <select class="categoria" name="categoria" id="categoria">
                    <option value="categoria" disabled selected></option>
                    <option value="aniversaris">Aniversaris</option>
                    <option value="laboral">Laboral</option>
                    <option value="oci">Oci</option>
                    <option value="personal">Personal</option>
                    <option value="salut">Salut</option>
                    <option value="altres">Altres</option>
                </select>
            </div>
          <div class="descripcio">{{ props.task.description }}</div>
        </div>
          <div class="botons">
            <button @click="edit">Editar</button>
            <button v-if="doing" @click="doneTask()">Tasca feta</button>
            <button v-else @click="doneTask()">Tasca pendent</button>
            <button @click="deleteTask()">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <router-view></router-view> -->
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

const saveTask = async () => {
  await taskStore.updateTask(
    props.task.title,
    props.task.description,
    props.task.id
  );
  editing.value = !editing.value;
  taskStore.setTask();
};

const doneTask = async () => {
  await taskStore.doneTask(props.task.id, !props.task.isCreated);
  console.log(props.task.id);
  doing.value = !doing.value;
  taskStore.setTask();
};
const deleteTask = async () => {
  await taskStore.deleteTask(props.task.id);
  taskStore.setTask();
};
</script>

<style>
.categoria{
  position: absolute;
  top: 5px;
  right: 5px;
  border-style: none;
  background: none;
}
.categoria:hover{
  font-size: 20px;
}
option{
  text-align: right;
}
.mainTask{
  margin: 0;
}
.cardDone{
  background: linear-gradient(rgb(128, 1, 1), rgb(255, 136, 0));
  height: 200px;
  width: 300px;
  display: flex;
  border-radius: 8px;
}
.cardDone>div>div>div>.titol{
  text-decoration: line-through;
  text-decoration-color: red
}
.cardDone>div>div>.descripcio{
  text-decoration: line-through;
  text-decoration-color: red
}
.cardDone>div>div>div>.titol:hover{
  text-decoration: underline;
  text-decoration-color: red
}
.cardDone>div>div>.descripcio:hover{
  text-decoration: underline;
  text-decoration-color: red
}
.card {
  background: linear-gradient(rgb(255, 255, 0), rgb(172, 172, 12));
  height: 200px;
  width: 300px;
  display: flex;
  border-radius: 8px;

}
.updateCard {
  background: linear-gradient(rgb(255, 255, 0), rgb(255, 136, 0));
  height: 200px;
  width: 300px;
  display: flex;
  border-radius: 8px;
}
.cardInfo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
.titol {
  font-size: 20px;
  font-weight: bold;
}
.descripcio {
  font-weight: lighter;
}
.updateInfo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
.updateInfo>textarea{
  background: none;
}
.botons{
  display: flex;
  justify-content: space-around;
  width: 100%;
}
button{
  background: none;
  border: 0;
  color: blue;
}
button:hover{
  text-decoration: underline;
}

</style>
