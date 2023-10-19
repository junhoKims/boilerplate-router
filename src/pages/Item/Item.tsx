import { isEmpty } from "lodash-es";
import { Suspense } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import PageLoading from "@/components/PageLoading";

const Item = () => {
  const { itemId } = useParams();

  return (
    <main>
      <h1>Item</h1>
      <span>{isEmpty(itemId) ? "Empty Menu" : "Full Menu"}</span>
      <nav>
        <Link to={`/item/${itemId}`}>Info</Link>
        <Link to={`/item/${itemId}/review`}>Review</Link>
        <Link to={`/item/${itemId}/inquire`}>Inquire</Link>
      </nav>
      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Item;
