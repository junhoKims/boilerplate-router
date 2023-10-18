import { Link, Outlet } from "react-router-dom";

const Item = () => {
  return (
    <main>
      <h1>Item</h1>
      <nav>
        <Link to="/item">Info</Link>
        <Link to="/item/review">Review</Link>
        <Link to="/item/inquire">Inquire</Link>
      </nav>
      <Outlet />
    </main>
  );
};

export default Item;
