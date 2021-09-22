import httpMethod from "./httpMethod";

class TodosService {
  getListTodos() {
    return httpMethod.get("https://github.com/Biuni/PokemonGO-Pokedex/blob/master/pokedex.json");
  }

  getDetailTodo(id) {
    return httpMethod.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}

export default new TodosService();
