<template>
  <form class="textBox">
    <textarea
      class="text"
      type="text"
      placeholder="입력해주세요"
      v-model="content"
    />

    <button type="submit" @click.prevent="addTodo">add todolist</button>
  </form>
</template>

<script>
export default {
  name: "inputComponent",
  props: {
    todoList: {
      type: Array,
    },
  },
  data: function () {
    return {
      content: "",
      todos: [...this.todoList],
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
    addTodo() {
      if (this.content == "") {
        alert("값을 입력하세요");
      } else if (localStorage.getItem("mytodos") == null) {
        this.todos.push(this.content);
        const firstContent = [this.content];
        localStorage.setItem("mytodos", JSON.stringify(firstContent));
        this.content = "";
      } else {
        this.todos.push(this.content);
        const getItem = localStorage.getItem("mytodos");
        const contentArr = [...JSON.parse(getItem), this.content];
        localStorage.setItem("mytodos", JSON.stringify(contentArr));
        this.content = "";
      }
      this.$emit("updateTodo", this.todos);
    },
  },
};
</script>

<style>
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
</style>
