import { v4 as uuidv4 } from 'uuid';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'
//API
import axios from "axios"

export const todoStore = defineStore('todoStore', {
    state: () => {
        return {
            todos: useStorage('todos', []),
            todoEdit:useStorage('todoEdit', []),
            //API
            pokes: useStorage('poke', []),
        }
    },
    getters: {
        getTodos: (state) => state.todos,
        //API
        getPokes: (state) => state.pokes,
        getCount: (state) => state.todos.length,
        getCompletedTodo: (state) => state.todos.filter(todo => todo.estado == "Concluido"),
        getIncTodo: (state) => state.todos.filter(todo => todo.estado == "Por concluir"),
    },
    actions: {
        //API
        async fetchPokes() {
            try {
                const data = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
                this.pokes = data.data
              }
              catch (error) {
                alert(error)
                console.log(error)
            }
          },
        add(todo) {
            try {
                todo.id = uuidv4();
                this.todos.push(todo);

                
            } catch (error) {
                throw error
            }
        },
        update(todo) {
            try {
                this.todos[this.todos.findIndex(todoFind => todoFind.id == todo.id)] = todo
                this.todoEdit=todo;
            } catch (error) {
                throw error
            }
        },
        delete(id){
            try {
                id = uuidv4();
                this.todos.splice(id,1);

            } catch (error) {
                throw error
            }
        },
        cleanEdit(){
            this.todoEdit=[]
        }
    },
})