<template>
  <div class="main">
    <Header />
    <div class="todolist">
      <InputComponent :todo-list="todoList" @updateTodo="todoUpdate" />
      <List />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import InputComponent from "./components/TodoInput.vue";
import List from "./components/TodoList.vue";
export default {
  name: "App",
  components: {
    Header,
    InputComponent,
    List,
  },
  mounted() {
    if (localStorage.getItem("mytodos") != null) {
      const locasSTG = localStorage.getItem("mytodos");
      const parserList = JSON.parse(locasSTG);
      this.todoList = parserList;
    }
  },
  data() {
    return {
      todoList: [],
      updateContent: "",
      visible: false,
    };
  },
  methods: {
    todoUpdate(values) {
      console.log(values);
      this.todoList = values;
    },
  },
};
</script>

<style>
.main {
  background: url("./assets/bg.svg");
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
  margin: 0px;
}
</style>
