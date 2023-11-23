import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import ProtectedRoute from "./layout/ProtectedRoute";
import Login from "./pages/Login";
import { routerList } from "./utils";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            {routerList.map((r, index) => {
              return (
                <Route
                  path={r.path}
                  element={r.component}
                  key={`router-${index}`}
                />
              );
            })}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
