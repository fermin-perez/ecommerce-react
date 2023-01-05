import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/firebase/firestore";
import { ItemList } from "../ItemList/ItemList";
import { SpinnerLoader } from "../SpinnerLoader/SpinnerLoader";
import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";

export const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts(id)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <section className="item-list-container">
      {loading ? (
        <SpinnerLoader />
      ) : products.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <h1 className="item-list-container__title">
            {id ? id.charAt(0).toUpperCase() + id.slice(1) : greeting}
          </h1>
          <ItemList products={products} />
        </>
      )}
    </section>
  );
};
