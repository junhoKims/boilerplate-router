import { Component } from "react";

interface Props {
  children?: React.ReactNode;
  hasError?: boolean;
  fallback?: React.ReactNode;
  setHasError?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error("Uncaught error:", error, errorInfo);
    }
  }

  public render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      return fallback || null;
    }

    return children;
  }
}

export default ErrorBoundary;
