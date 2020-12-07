<template>
  <div>
    <div class="container">
      <h1>Todo App</h1>
      <SearchTodo @search-todo="searchTodo" />
      <TodoList
        @handle-todo-completed="handletTodoIsCompleted"
        v-bind:todos="todos"
        @deleteTodo="deleteTodo"
      />
      <AddTodo @add-todo="addTodo" />
    </div>
  </div>
</template>

<script>
import SearchTodo from "../components/SearchTodo";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

export default {
  name: "Todo",
  data() {
    return {
      todos: []
    };
  },
  components: {
    SearchTodo,
    TodoList,
    AddTodo
  },
  methods: {
    deleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    },
    searchTodo(value) {
      this.todos = this.todos.filter(todo => todo.title == value);
    },

    // if todo is true then set to false else if todo is false then set to true
    handletTodoIsCompleted(todo) {
      const isCompleted = !todo.isCompleted;
      this.todos = this.todos.map(todoItem => {
        if (todoItem.id == todo.id) todoItem.isCompleted = isCompleted;
        return todoItem;
      });
    }
  }
};
</script>


<style lang="css" scoped>
.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  color: black;
}
</style>