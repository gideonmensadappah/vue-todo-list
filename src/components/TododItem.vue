<template>
  <div class="todo-item" v-bind:class="{ 'is-completed': todo.isCompleted }">
    <p>
      <input type="checkbox" v-on:change="handleCheckBox" />
      {{ todo.title }}
    </p>
    <button @click="$emit('delete-todo', todo.id)">&times;</button>
  </div>
</template>

<script>
export default {
  name: "TododItem",
  props: ["todo"],
  methods: {
    handleCheckBox() {
      this.$emit("handle-checkbox", this.todo);
    }
  }
};
</script>

<style scoped>
.is-completed {
  text-decoration: line-through;
}
.todo-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
</style>