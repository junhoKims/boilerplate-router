import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorUI from "@/components/GlobalErrorBoundary/components/ErrorUI";

interface GlobalErrorBoundaryProps extends React.PropsWithChildren {}

const GlobalErrorBoundary = (props: GlobalErrorBoundaryProps) => {
  const [hasError, setHasError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setHasError(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  return (
    <ErrorBoundary
      fallback={<ErrorUI />}
      hasError={hasError}
      setHasError={setHasError}
    >
      {props.children}
    </ErrorBoundary>
  );
};

export default GlobalErrorBoundary;
