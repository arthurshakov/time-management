import { Route, Routes } from "react-router";
import { HomePage, ProjectsPage, ProjectPage, LoginPage } from "./pages";
import { Header, ProtectedRoute } from "./components";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login/" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/" element={
          // <ProtectedRoute>
            <ProjectsPage />
          // </ProtectedRoute>
        } />
        <Route path="/project/" element={
          // <ProtectedRoute>
            <ProjectPage />
          // </ProtectedRoute>
        } />
        <Route path="*" element={<div>Ошибка 404</div>} />
      </Routes>
    </>
  );
}
