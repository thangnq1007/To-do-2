import httpMethod from "./httpMethod";

class TodosService {
  getListTodos() {
    return httpMethod.get("https://jsonplaceholder.typicode.com/todos");
  }

  getDetailTodo(id) {
    return httpMethod.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}

export default new TodosService();
