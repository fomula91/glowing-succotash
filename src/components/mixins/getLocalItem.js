const getLocalList = {
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    if (localStorage.getItem("mytodos") != null) {
      console.log("mounted");
      const storage = localStorage.getItem("mytodos");
      this.todos = JSON.parse(storage);
    }
  },
};

export default getLocalList;
