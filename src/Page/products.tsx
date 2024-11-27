import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import api from "../service/api";
import withAuth from "../helper/whithAuth";

interface IData {
  id: number;
  title: string;
  body: string;
  userId: number;
}
const Products = () => {
  const { id } = useParams<"id">();
  const [posts, setPosts] = useState<IData[]>([]);
  useEffect(() => {
    api.get("posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((item, index) => {
        return (
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
            <span>{item.body}</span>
          </div>
        );
      })}
    </div>
  );
};
export default withAuth(Products);
