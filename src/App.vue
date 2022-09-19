<!-- Data Read, Update, Delete -->
<template>
  <div class="main">
    <Header />
    <InputComponent class="inputFleid" @push-content="pushTodo" />
    <div class="todolist">
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
      console.log(JSON.parse(localItem));
      this.todoList = [...JSON.parse(localItem)];
    }
  },
  methods: {
    setStorage() {
      localStorage.setItem("mytodos", JSON.stringify(this.todoList));
    },
    updateTodo(value) {
      const [index, content] = value;
      this.todoList[index].content = content;
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
  background-size: cover;
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
  width: 46rem;
  height: 100vh;
  align-items: center;
  overflow: auto;
}
.inputFleid {
  width: 46rem;
}

body {
  margin: 0px;
}
</style>
