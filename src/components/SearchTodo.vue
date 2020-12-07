<template>
  <div>
    <input type="search" v-model="title" placeholder="search..." />
    <input type="submit" value="search" @click="handleChangeText" />
  </div>
</template>

<script>
export default {
  name: "SearchTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    handleChangeText() {
      if (this.title) {
        this.$emit("search-todo", this.title);
      }
    }
  }
};
</script>

<style scoped>
</style>