<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <input type="text" v-model="content" />
    <button type="submit" @click="addTodo">add todolist</button>
  </div>

  <div id="todolist">
    <div id="container" v-for="data in todos" :key="data.id">
      <li id="text">{{ data }}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      todos: [],
      content: "",
    };
  },
  methods: {
    addTodo() {
      if (this.content == "") {
        alert("값을 입력하세요");
      } else {
        this.todos.push(this.content);
        this.content = "";
      }
    },
  },
};
</script>

<style></style>
