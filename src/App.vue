<template>
  <div id="App" class="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>













