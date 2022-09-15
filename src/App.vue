<template>
  <div class="main">
    <img class="img" src="./assets/logo.png" alt="todo" />
    <p>My Todo App</p>
    <div class="todolist">
      <form class="textBox">
        <textarea
          class="text"
          type="text"
          placeholder="입력해주세요"
          v-model="content"
        />

        <button type="submit" @click.prevent="addTodo">add todolist</button>
      </form>

      <div class="todoContainer" v-for="data in todos" :key="data.id">
        <li class="list">{{ data }}</li>
      </div>
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

<style>
.main {
  background: skyblue;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img {
  width: 15rem;
  height: 10rem;
}

.textBox {
  display: flex;
  box-sizing: border-box;

  background: white;
  border-radius: 1rem;
  box-shadow: 2px 4px 3px 0px;

  width: 100%;
  height: 5rem;
  padding: 1rem;
}
.text {
  width: 100%;
  resize: none;
  border: none;
  outline: none;
}

.todolist {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 0 10rem;
  background: greenyellow;
  align-items: center;
}

.todoContainer {
  box-sizing: border-box;
  background: white;
  text-align: center;
  padding: 1rem;
  margin: 0.5rem 0;
  width: 100%;
  border-radius: 1rem;
  box-shadow: 2px 4px 3px 0px;
}

.list {
}
body {
  margin: 0px;
}
</style>
