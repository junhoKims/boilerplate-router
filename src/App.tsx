import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import GlobalErrorBoundary from "@/components/GlobalErrorBoundary";
import PageLoading from "@/components/PageLoading";

function App() {
  return (
    <GlobalErrorBoundary>
      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
    </GlobalErrorBoundary>
  );
}

export default App;
