import { Route, Routes } from "react-router";
import { HomePage, ProjectsPage } from "./pages";
import { Header } from "./components";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/" element={<ProjectsPage />} />
        <Route path="*" element={<div>Ошибка 404</div>} />
      </Routes>
    </>
  );
}
