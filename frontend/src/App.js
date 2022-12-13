import { Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages/Index";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
    </Routes>
  );
}
