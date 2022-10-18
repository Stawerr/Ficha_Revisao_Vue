import { v4 as uuidv4 } from 'uuid';
import { defineStore } from 'pinia';

export const todoStore = defineStore('todoStore', {
    state: () => {
        return {
            todos: [],
        }
    },
    getters: {
        gettodos: (state) => state.todos,
    },
    actions: {
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
    },
})