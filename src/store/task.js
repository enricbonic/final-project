import { defineStore } from 'pinia'
import { updateTask, supabase } from '../api'


export const useTaskStore = defineStore('task', {
    // arrow function recommended for full type inference
    state: () => ({
        
            // all these properties will have their type inferred automatically
            // Guardaremos los task que nos de supabase
            task: undefined,
    
    }),
    actions: {

        async setTask() {
            const {data: task, error} = await supabase
            .from('task')
            .select('*')
            .order('id', { ascending: false });
            this.task = task
            return this.task
            //TODO guardar en el stado las task que nos de supabase
        },

        
        async deleteTask(id) {
            const response = await supabase
            .from('task')
            .delete()
            .eq('id', id)
            // TODO modificar el estado borrando esa task
            // Encontramos el indice de ese id y eliminamos ese indice de la array
        },
        
        async addTask(title, description, user_id) {
            const response = await supabase
            .from('task')
            .insert([{title: title, description: description, user_id: user_id},])
            console.log(response)
            //     // TODO modificar el estado de task haciendo un push de la task
            //     // Comprobar que tenemos el id al insertar el registro, en caso de no tenerlo tendriamos que hacer el getTask
        },
        async updateTask(title, description, id) {
            const response = await supabase
            .from('task')
            .update({ title: title, description: description})
            .eq('id', id)
            // TODO modificar el estado de la task
            // Encontrar el indice de la task con ese id y cambiar su contenido con task
        },
        async doneTask (id, isCreated) {
            console.log('id', id)
            const response = await supabase
            .from('task')
            .update({isCreated: isCreated})
            .eq('id', id)
            console.log(response)
            console.log(isCreated)
        }



    },
    persist: {
        enabled: true,
    },
})