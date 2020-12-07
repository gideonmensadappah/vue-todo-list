<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <router-link to="/todo">Todo</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
  height: 10vh;
  margin-bottom: 20px;
  background-color: black;
  color: white;
}
</style>