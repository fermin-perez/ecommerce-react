import "./Checkout.css";
import { useContext, useState } from "react";
import { MessageCard } from "../MessageCard/MessageCard";
import { SpinnerLoader } from "../SpinnerLoader/SpinnerLoader";
import { CartContext } from "../../context/CartContext";
import happyFace from "../../assets/img/happy-face.png";
import sadFace from "../../assets/img/sad-face.png";
import {
  createOrder,
  getProductById,
  updateProduct,
} from "../../services/firebase/firestore";

export const Checkout = () => {
  const cartContext = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  const saveOrder = async (order) => {
    setLoading(true);
    const { id } = await createOrder(order);
    setOrderId(id);
    setLoading(false);
  };

  const updateProductsStock = async (products) => {
    for (const product of products) {
      const item = await getProductById(product.id);
      await updateProduct(item.id, {
        stock: item.data().stock - product.quantity,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      buyer: { name: data.name, phone: data.phone, email: data.email },
      items: cartContext.cart.map((product) => ({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        quantity: product.quantity,
        subtotal: product.price * product.quantity,
      })),
      date: new Date(),
      total: cartContext.getTotalPrice(),
    };
    //Guardar Orden
    saveOrder(order);
    //Actualizar Stock
    updateProductsStock(cartContext.cart);
    //Limpiar Carrito
    cartContext.clear();
  };

  const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return loading ? (
    <SpinnerLoader />
  ) : (
    <section className="checkout">
      <h1 className="checkout__title">Checkout</h1>
      {orderId ? (
        <MessageCard
          icon={happyFace}
          title="Compra realizada con éxito"
          message={`Tu código de compra es: ${orderId}.\n\nRecibirás tu pedido en la dirección indicada en las próximas 48 horas hábiles.\n¿Querés hacer otra compra?`}
          showHomeButton={true}
        />
      ) : cartContext.getCartQuantity() === 0 ? (
        <MessageCard
          icon={sadFace}
          title="Tu carrito está vacío"
          message="Te invitamos a que conozcas nuestros productos."
          showHomeButton={true}
        />
      ) : (
        <form className="checkout__form" onSubmit={handleSubmit}>
          <div className="checkout__form-group">
            <h3 className="checkout__form-group-title">Datos del Comprador</h3>
            <div className="checkout__input-group">
              <label htmlFor="name">Nombre: *</label>
              <input
                type="text"
                id="name"
                required={true}
                maxLength={50}
                value={data.name}
                onChange={handleChange}
                placeholder="Fermin Pérez"
              />
            </div>
            <div className="checkout__input-group">
              <label htmlFor="phone">Teléfono: *</label>
              <input
                type="text"
                id="phone"
                required={true}
                maxLength={25}
                value={data.phone}
                onChange={handleChange}
                placeholder="2342-405816"
              />
            </div>
            <div className="checkout__input-group">
              <label htmlFor="email">Correo Electrónico: *</label>
              <input
                type="email"
                id="email"
                required={true}
                maxLength={50}
                value={data.email}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
              />
            </div>
          </div>
          <div className="checkout__form-group">
            <h3 className="checkout__form-group-title">Datos de la Entrega</h3>
            <div className="checkout__input-group">
              <label htmlFor="streetName">Calle: *</label>
              <input
                type="text"
                id="streetName"
                required={true}
                maxLength={30}
                placeholder="Urquiza"
              />
            </div>
            <div className="checkout__input-group">
              <label htmlFor="streetNumber">Número: *</label>
              <input
                type="text"
                id="streetNumber"
                required={true}
                maxLength={6}
                placeholder="1223"
              />
            </div>
            <div className="checkout__input-group">
              <label htmlFor="floor">Piso / Departamento: </label>
              <input type="text" id="floor" maxLength={4} placeholder="7A" />
            </div>
            <div className="checkout__input-group">
              <label htmlFor="city">Localidad: *</label>
              <input
                type="text"
                id="city"
                required={true}
                maxLength={50}
                placeholder="Bragado"
              />
            </div>
            <div className="checkout__input-group">
              <label htmlFor="zipCode">Código Postal: *</label>
              <input
                type="text"
                id="zipCode"
                required={true}
                maxLength={6}
                placeholder="6640"
              />
            </div>
            <div className="checkout__input-group">
              <label htmlFor="state">Provincia: *</label>
              <input
                type="text"
                id="state"
                required={true}
                maxLength={40}
                placeholder="Buenos Aires"
              />
            </div>
          </div>
          <div className="checkout__form-group">
            <h3 className="checkout__form-group-title">Datos del Pago</h3>
            <div className="checkout__input-group">
              <label htmlFor="cardNumber">Número de tarjeta: *</label>
              <input
                type="text"
                id="cardNumber"
                required={true}
                maxLength={16}
                placeholder="1111 2222 3333 4444"
              />
            </div>
            <div className="checkout__input-group">
              <label htmlFor="cardName">
                Nombre que figura en la tarjeta: *
              </label>
              <input
                type="text"
                id="cardName"
                required={true}
                maxLength={30}
                placeholder="FERMIN G PEREZ"
              />
            </div>
            <div className="checkout__input-group">
              <label htmlFor="expireDate">Fecha de expiración: *</label>
              <input
                type="text"
                id="expireDate"
                required={true}
                maxLength={5}
                placeholder="02/22"
              />
            </div>
            <div className="checkout__input-group">
              <label htmlFor="cvv">Código de seguridad: *</label>
              <input
                type="text"
                id="cvv"
                required={true}
                maxLength={3}
                placeholder="123"
              />
            </div>
          </div>
          <span>* Campos obligatorios</span>
          <div className="checkout__form-footer">
            <span>
              Total a Pagar: {dollarUS.format(cartContext.getTotalPrice())}
            </span>
            <input
              className="checkout__submit-button"
              type="submit"
              value="Finalizar compra"
            />
          </div>
        </form>
      )}
    </section>
  );
};
