<template>
  <div class="todoContainer" v-for="data in todos" :key="data">
    <textarea
      type="text"
      v-if="visible"
      :value="data"
      @input="inputdata($event)"
    />
    <li v-if="!visible" class="list">{{ data }}</li>
    <button v-if="visible" @click="submitTodo(data)">sumit</button>
    <button v-if="!visible" @click="updateTodo(data)">update</button>
    <button class="listBtn" @click="deleteTodo(data)">delete</button>
  </div>
</template>
<script>
export default {
  name: "List",
  data() {
    return {
      todos: [],
      visible: false,
    };
  },
  mounted() {
    if (localStorage.getItem("mytodos") != null) {
      const locasSTG = localStorage.getItem("mytodos");
      const parserList = JSON.parse(locasSTG);
      this.todos = parserList;
    }
  },
  methods: {
    deleteTodo(value) {
      const storage = localStorage.getItem("mytodos");
      const list = JSON.parse(storage);

      for (let i = 0; i < list.length; i++) {
        if (list[i] == value) {
          list.splice(i, 1);
          this.todos.splice(i, 1);
          console.log(list);
          console.log(this.todos);
          localStorage.setItem("mytodos", JSON.stringify(list));

          break;
        }
      }
    },
    updateTodo(value) {
      console.log("check update todo", value);
      this.visible = !this.visible;
    },
    inputdata(value) {
      this.updateContent = value.target.value;
    },
    submitTodo(value) {
      console.log(value);
      for (let i = 0; this.todos.length; i++) {
        if (this.todos[i] == value) {
          localStorage.clear();
          console.log("current");
          this.todos[i] = this.updateContent;
          localStorage.setItem("mytodos", JSON.stringify(this.todos));
          break;
        }
      }
      this.visible = !this.visible;
    },
  },
};
</script>

<style>
.todoContainer {
  display: flex;

  box-sizing: border-box;

  background: white;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  margin: 0.5rem 0;
  width: 100%;
  min-width: 12rem;

  border-radius: 1rem;
  box-shadow: 2px 4px 3px 0px;
}

.list {
  width: 100%;
}

li {
  list-style: none;
}

.listBtn:hover {
  background: red;
}
</style>
