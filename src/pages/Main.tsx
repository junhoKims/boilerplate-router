import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <main>
      <button onClick={() => navigate("/item")}>Item</button>
      <button onClick={() => navigate("/settings")}>Settings</button>
    </main>
  );
};

export default Main;
