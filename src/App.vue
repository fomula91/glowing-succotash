<!-- Data Read, Update, Delete -->
<template>
  <div class="main">
    <Header />
    <div class="todolist">
      <InputComponent @push-content="pushTodo" />
      <List
        :todo-list="todoList"
        @delete-todo="delTodo"
        @update-todo="updateTodo"
      />
    </div>
  </div>
</template>

<script>
import Header from "/src/components/Header.vue";
import InputComponent from "/src/components/TodoInput.vue";
import List from "/src/components/TodoList.vue";

export default {
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
    setStorage: () => {
      localStorage.setItem("mytodos", JSON.stringify(this.todoList));
    },
    updateTodo(value) {
      const [index, content] = value;
      this.todoList.splice(index, 1, content);
      this.setStorage();
    },
    pushTodo(value) {
      this.todoList.push(value);
      this.setStorage();
    },
    delTodo(index) {
      this.todoList.splice(index, 1);
      this.setStorage();
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
