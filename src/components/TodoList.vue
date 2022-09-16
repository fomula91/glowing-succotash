<!-- data Read -->
<template>
  <div class="todoContainer" v-for="(data, index) in todoList" :key="index">
    <textarea
      type="text"
      v-if="this.selectTodo === index ? true : false"
      :value="data"
      @input="inputdata($event)"
    />
    <p v-if="this.selectTodo === index ? false : true" class="list">
      {{ data }}
    </p>

    <button
      v-if="this.selectTodo === index ? true : false"
      @click="submitTodo(index)"
    >
      sumit
    </button>
    <button
      v-if="this.selectTodo === index ? false : true"
      @click="updateTodo(index)"
    >
      update
    </button>
    <button @click="deleteTodo(index)">delete</button>
  </div>
</template>

<script>
export default {
  name: "List",

  props: {
    todoList: {
      type: Array,
    },
  },
  data() {
    return {
      selectTodo: null,
      content: "",
    };
  },
  methods: {
    deleteTodo(index) {
      this.$emit("deleteTodo", index);
    },
    updateTodo(index) {
      this.selectTodo = index;
    },
    inputdata(value) {
      this.content = value.target.value;
    },
    submitTodo(index) {
      this.$emit("updateTodo", [index, this.content]);
      this.selectTodo = null;
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
</style>
