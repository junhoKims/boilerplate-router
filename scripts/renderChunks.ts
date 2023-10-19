import { dependencies } from "../package.json";

export const FIXED_MODULES = ["react", "react-router-dom", "react-dom"];

const renderChunks = () => {
  const chunks = {} as Record<string, string[]>;

  Object.keys(dependencies).forEach((key) => {
    if (FIXED_MODULES.includes(key)) return;
    chunks[key] = [key];
  });

  return chunks;
};

export default renderChunks;
