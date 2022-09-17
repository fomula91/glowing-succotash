<!-- data Read -->
<template>
  <div class="todoContainer" v-for="(data, index) in todoList" :key="index">
    <textarea
      type="text"
      v-if="this.isView(this.currentItem, index)"
      :value="data"
      @input="inputdata($event)"
    />
    <p v-if="!this.isView(this.currentItem, index)" class="list">
      {{ data }}
    </p>

    <button
      v-if="this.isView(this.currentItem, index)"
      @click="submitItem(index)"
    >
      CONFIRM
    </button>
    <button
      v-if="!this.isView(this.currentItem, index)"
      @click="selectItem(index)"
    >
      EDIT
    </button>
    <button @click="deleteItem(index)">DELETE</button>
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
      currentItem: null,
      content: "",
    };
  },
  methods: {
    isView: (curIndex, index) => {
      if (curIndex === index) {
        return true;
      } else return false;
    },
    deleteItem(index) {
      this.$emit("deleteTodo", index);
    },
    selectItem(index) {
      this.currentItem = index;
      this.content = this.todoList[index];
    },
    inputdata(event) {
      this.content = event.target.value;
    },
    submitItem(index) {
      this.$emit("updateTodo", [index, this.content]);
      this.currentItem = null;
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
  min-width: 14rem;

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
