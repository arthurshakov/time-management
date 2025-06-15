import { Route, Routes } from "react-router";
import { HomePage, ProjectsPage, ProjectPage } from "./pages";
import { Header } from "./components";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/" element={<ProjectsPage />} />
        <Route path="/project/" element={<ProjectPage />} />
        <Route path="*" element={<div>Ошибка 404</div>} />
      </Routes>
    </>
  );
}
