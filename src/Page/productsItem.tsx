import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import api from "../service/api";

interface IData {
  id: number;
  title: string;
  body: string;
  userId: number;
}
const ProductsItem = () => {
  const { id } = useParams<"id">();
  const [post, setPost] = useState<IData>();
  useEffect(() => {
    api.get(``).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Posts id is{id}</h2>
    </div>
  );
};
export default ProductsItem;
