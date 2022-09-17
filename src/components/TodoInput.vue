<!-- Data Create -->
<template>
  <form class="textBox">
    <textarea
      class="text"
      type="text"
      placeholder="Input your Todo Something"
      v-model="content"
    />

    <button type="submit" @click.prevent="todoUpload">add todolist</button>
  </form>
</template>

<script>
export default {
  name: "inputComponent",
  data: function () {
    return {
      content: "",
    };
  },
  methods: {
    todoUpload() {
      this.$emit("pushContent", this.content);
      this.content = "";
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
  min-width: 14rem;
  height: 5rem;
  padding: 1rem;
  margin: 0 0 1rem 0;
}

.text {
  width: 100%;
  resize: none;
  border: none;
  outline: none;
}
</style>
