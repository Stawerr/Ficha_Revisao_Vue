import { v4 as uuidv4 } from 'uuid';
import { defineStore } from 'pinia';

export const userStore = defineStore('userStore', {
    state: () => {
        return {
            users: [],
        }
    },
    getters: {
        getUsers: (state) => state.users,
    },
    actions: {
        add(user) {
            try {
                user.id = uuidv4();
                this.users.push(user);
                
            } catch (error) {
                throw error
            }
        },
        update(user) {
            try {
                this.users[this.users.findIndex(userFind => userFind.id == user.id)] = user
                this.userEdit=user;
            } catch (error) {
                throw error
            }
        },
    },
})