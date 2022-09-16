<!-- Data Read, Update, Delete -->
<template>
  <div class="main">
    <Header />
    <div class="todolist">
      <InputComponent @updateContent="todoUpdate" />
      <List :todoList="todoList" @deleteTodo="delTodo" />
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
  data() {
    return {
      todoList: [],
      visible: false,
    };
  },
  mounted() {
    if (localStorage.getItem != null) {
      const localItem = localStorage.getItem("mytodos");
      this.todoList = [...JSON.parse(localItem)];
    }
  },
  methods: {
    todoUpdate(value) {
      this.todoList.push(value);
      localStorage.setItem("mytodos", JSON.stringify(this.todoList));
    },
    delTodo(index) {
      this.todoList.splice(index, 1);
      localStorage.setItem("mytodos", JSON.stringify(this.todoList));
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap");
* {
  font-family: "Noto Sans KR", sans-serif;
}
.main {
  background: url("./assets/bg.svg");
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todolist {
  display: flex;
  position: relative;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 0 35rem;
  align-items: center;
}

body {
  margin: 0px;
}
</style>
