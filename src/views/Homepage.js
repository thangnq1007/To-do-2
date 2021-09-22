import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import todosService from "../services/todosService";

const Homepage = () => {
  const id = 5;
  const history = useHistory();
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

  console.log({ todos });

  const onClickBtnToDashboard = () => {
    history.push(`/dashboard/${id}`);
  };

  if (loading) {
    return "Loading...";
  }

  return (
    <div>
      Homepage
      {todos.map((todo) => (
        <div className="each-item">
          <div className="each-item__id">{todo.id}</div>
          <div className="each-item__title">
            <Link to={`/dashboard/${todo.id}`}> {todo.title}</Link>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Homepage;
