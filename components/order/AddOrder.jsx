import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function AddOrder() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({
    id: "",
    purchaseDate: "",
    quantity: "",
    productId: "",
  });
  const { id, purchaseDate, quantity, productId } = order;
  const navigate = useNavigate();
  const loadDataProducts = async () => {
    const result = await axios.get(`http://localhost:8000/products`);
    setProducts(result.data);
  };
  const orders = async () => {
    const result = await axios.get(`http://localhost:8000/orders`);
    let maxId = 0;
    if (result.data.length > 0) {
      for (let index = 0; index < result.data.length; index++) {
        if (result.data.id > maxId) {
          maxId = result.data.id;
        }
      }
      const newId = maxId.toString;
      setOrder({ ...order, id: newId });
    } else {
      maxId = 1;
      const newId = maxId.toString;
      setOrder({ ...order, id: newId });
    }
  };

  const handleOrders = async () => {
    await axios.post(`http://localhost:8000/orders`, order);
    navigate("/");
  };
  const handleInput = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
    console.log(order);
  };
  useEffect(() => {
    loadDataProducts();
    // orders();
  }, []);
  return (
    <div>
      <NavLink to={"/"}>
        <button className="btn btn-outline-info mx-10 my-10">Back</button>
      </NavLink>
      <form className="row g-3">
        <div className="col-12">
          <div className="mx-5 col-4 mb-4">
            <label>Ngày mua:</label>
            <input
              className="form-control"
              type="date"
              name="purchaseDate"
              value={purchaseDate}
              onChange={handleInput}
            />
          </div>
          <div className="mx-5 col-4 mb-4">
            <label>Số lượng:</label>
            <input
              className="form-control"
              type="number"
              name="quantity"
              value={quantity}
              onChange={handleInput}
            />
          </div>
          <div className="mx-5 col-4 mb-4">
            <select name="productId" onChange={handleInput}>
              {products.map((e, i) => (
                <option key={e.id} value={e.id}>
                  {e.productName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
      <button className="btn btn-outline-success mt-10" onClick={handleOrders}>
        Add New Product
      </button>
    </div>
  );
}
export default AddOrder;
