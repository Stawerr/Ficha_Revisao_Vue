import { v4 as uuidv4 } from 'uuid';
import { defineStore } from 'pinia';

export const todoStore = defineStore('todoStore', {
    state: () => {
        return {
            todos: [],
            todoEdit:[],
            count:0
        }
    },
    getters: {
        getTodos: (state) => state.todos,
        getCount: (state) => state.count,
    },
    actions: {
        add(todo) {
            try {
                todo.id = uuidv4();
                this.todos.push(todo);
                this.count++
                
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
                if(this.count>0){
                    this.count--
                }
            } catch (error) {
                throw error
            }
        },
        cleanEdit(){
            this.todoEdit=[]
        }
    },
})