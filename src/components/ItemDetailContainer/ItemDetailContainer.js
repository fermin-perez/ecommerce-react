import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductById } from "../../services/firebase/firestore";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { SpinnerLoader } from "../SpinnerLoader/SpinnerLoader";
import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((response) => {
        const product = { id: response.id, ...response.data() };
        setProduct(product);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <section className="item-detail-container">
      {loading ? (
        <SpinnerLoader />
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <NotFound />
      )}
    </section>
  );
};
