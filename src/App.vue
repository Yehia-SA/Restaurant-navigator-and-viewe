<template>
  <CategoryType />
  <result-list />
</template>

<script>
import CategoryType from "./components/CategoryType.vue";
import ResultList from "./components/ResultList.vue";

export default {
  name: "App",
  components: {
    CategoryType,
    ResultList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  margin-top: 60px;
}
</style>
