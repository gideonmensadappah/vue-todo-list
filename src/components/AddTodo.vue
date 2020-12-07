<template>
  <div>
    <input v-model="title" placeholder="Add todo..." />
    <input type="submit" @click="handleAddTodo" />
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    handleAddTodo(event) {
      event.preventDefault();

      const newTodo = {
        id: uuidv4(),
        title: this.title,
        isCompleted: false
      };

      if (!this.title) {
        alert("You hav to type!");
      } else {
        this.$emit("add-todo", newTodo);
        this.title = null;
      }
    }
  }
};
</script>

<style scoped>
</style>