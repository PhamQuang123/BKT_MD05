import { useEffect, useState } from "react";
import Search from "../Search/Search";
import axios from "axios";
import { NavLink } from "react-router-dom";
function Home() {
  const [orders, setOrders] = useState([]);
  const loadData = async () => {
    const result = await axios.get(
      `http://localhost:8000/orders?_embed=product`
    );
    const data = result.data.sort((a, b) => a.product.price - b.product.price);
    setOrders(data);
    console.log(orders);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <Search />
      <NavLink to={"/add-order"}>
        <button className="btn btn-outline-info mb-2">Add New Order</button>
      </NavLink>
      <table className="table  table-bordered" style={{ textAlign: "center" }}>
        <thead className="table-dark">
          <tr>
            <th>STT</th>
            <th>Mã dơn hàng</th>
            <th>Tên sản phẩm</th>
            <th>Giá(USD)</th>
            <th>Loại sẩn phẩm</th>
            <th>Ngày mua</th>
            <th>Số luọng</th>
            <th>Tổng tiền(USD)</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody className="table-striped">
          {orders.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.id}</td>
              <td>{e.product.productName}</td>
              <td>{e.product.price}</td>
              <td>{e.product.productType}</td>
              <td>{e.purchaseDate}</td>
              <td>{e.quantity}</td>
              <td>{e.quantity * e.product.price}</td>
              <td>Sửa</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Home;
