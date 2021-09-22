import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import todosService from "../services/todosService";

const Dashboard = () => {
  const params = useParams();
  const id = params?.id || "";
  const [dataDetail, setDataDetail] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const responseDetail = await todosService.getDetailTodo(id);
      setDataDetail(responseDetail?.data || {});
      setLoading(false);
    };

    fetch();
  }, []);

  if (loading) {
    return "Loading detail ...";
  }

  return (
    <div>
      <div>User ID: {dataDetail?.id}</div>
      <div>ID: {dataDetail?.id}</div>
      <div>Title: {dataDetail?.title}</div>
      <div>Completed: {dataDetail?.completed}</div>
    </div>
  );
};

export default Dashboard;
