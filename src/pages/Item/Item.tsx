import { Link, Outlet, useParams } from "react-router-dom";

const Item = () => {
  const { itemId } = useParams();

  return (
    <main>
      <h1>Item</h1>
      <nav>
        <Link to={`/item/${itemId}`}>Info</Link>
        <Link to={`/item/${itemId}/review`}>Review</Link>
        <Link to={`/item/${itemId}/inquire`}>Inquire</Link>
      </nav>
      <Outlet />
    </main>
  );
};

export default Item;
