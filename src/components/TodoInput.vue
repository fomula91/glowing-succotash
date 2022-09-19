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
      if (this.content.trim("") == "") {
        alert("값을 넣어주세요");
      } else {
        const time = new Date().toString().slice(0, 24);
        const getTime = new Date().getTime();
        const value = {
          time: time,
          content: this.content,
          index: getTime,
        };
        console.log(value);
        this.$emit("pushContent", value);
        this.content = "";
      }
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
  min-width: 20rem;
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
