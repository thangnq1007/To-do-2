import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import todosService from "../services/todosService";


const Homepage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const response = await todosService.getListTodos();
      const data = response?.data || [];
      setTodos(data);
      setLoading(false);
    };

    fetch();
  }, []);

  if (loading) {
    return "Loading...";
  }

  return (
    <div>
      <h1>Homepage</h1>
      {todos.map((todo) => (
        <div className="each-item">
          <span className="each-item__id">{todo.id}.</span>
          <span className="each-item__title">
            <Link to={`/dashboard/${todo.id}`}> {todo.title}</Link>
          </span>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Homepage;
