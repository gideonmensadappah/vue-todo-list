<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TododItem
        v-bind:todo="todo"
        @handle-checkbox="handleCheckbox"
        @delete-todo="handleDeleteTodo"
      />
    </div>
  </div>
</template>

<script>
import TododItem from "./TododItem.vue";

export default {
  name: "TodoList",
  components: {
    TododItem
  },
  props: ["todos"],
  methods: {
    handleDeleteTodo(todoId) {
      this.$emit("deleteTodo", todoId);
    },
    handleCheckbox(todo) {
      this.$emit("handle-todo-completed", todo);
    }
  }
};
</script>

