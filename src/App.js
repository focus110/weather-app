import "./App.css";
import Main from "./page/Main";
import Page404 from "./page/Page404";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./component/Search";
import Register from "./page/Register";
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
import setAuthToken from "./utils/setAuthToken";
import Settings from "./page/Settings";
import ProtectedRoute from "./component/routing/ProtectedRoute";
import AuthContext from "./context/auth/authContext";
import { useContext, useEffect } from "react";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.token) {
      authContext.loadUser();
    }
  }, []);

  return (
    <Router>
      <Search />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="my-list" element={<div>Favourite</div>} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
