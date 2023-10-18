import { Outlet } from "react-router-dom";
import GlobalErrorBoundary from "./components/GlobalErrorBoundary";

function App() {
  return (
    <GlobalErrorBoundary>
      <Outlet />
    </GlobalErrorBoundary>
  );
}

export default App;
