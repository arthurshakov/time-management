import { Route, Routes } from "react-router";
import { Homepage } from "./pages";
import { Header } from "./components";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<div>Ошибка 404</div>} />
      </Routes>
    </div>
  );
}
