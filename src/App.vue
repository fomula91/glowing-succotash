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
        <textarea v-if="visible" class="editarea" :value="data" />
        <li v-if="!visible" class="list">{{ data }}</li>
        <button @click="updateTodo(data)">update</button>
        <button class="listBtn" @click="deleteTodo(data)">delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    if (localStorage.getItem("mytodos") != null) {
      const locasSTG = localStorage.getItem("mytodos");
      const parserList = JSON.parse(locasSTG);
      this.todos = parserList;
    }
  },
  data() {
    return {
      todos: [],
      content: "",
      visible: false,
    };
  },
  methods: {
    addTodo() {
      if (this.content == "") {
        alert("값을 입력하세요");
      } else if (localStorage.getItem("mytodos") == null) {
        console.log("비었음");
        this.todos.push(this.content);
        const a = [this.content];
        localStorage.setItem("mytodos", JSON.stringify(a));
        this.content = "";
      } else {
        this.todos.push(this.content);
        const b = localStorage.getItem("mytodos");
        const c = JSON.parse(b);
        const a = [...c, this.content];
        console.log(a);
        localStorage.setItem("mytodos", JSON.stringify(a));
        this.content = "";
      }
    },
    deleteTodo(value) {
      const storage = localStorage.getItem("mytodos");
      const list = JSON.parse(storage);

      for (let i = 0; i < list.length; i++) {
        if (list[i] == value) {
          list.splice(i, 1);
          this.todos.splice(i, 1);
          localStorage.setItem("mytodos", JSON.stringify(list));

          break;
        }
      }
    },
    updateTodo(value) {
      console.log("check update todo", value);
      this.visible = !this.visible;
      for (let i = 0; this.todos.length; i++) {
        if (this.todos[i] == value) {
          console.log("current");
          break;
        }
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
  position: relative;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 0 10rem;
  background: greenyellow;
  align-items: center;
}

.todoContainer {
  display: flex;

  box-sizing: border-box;

  background: white;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  margin: 0.5rem 0;
  width: 100%;
  border-radius: 1rem;
  box-shadow: 2px 4px 3px 0px;
}

.list {
  width: 100%;
}

.listBtn {
}

body {
  margin: 0px;
}
</style>
