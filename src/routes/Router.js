import { Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import CreateTripPage from "../pages/CreateTripPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import TripDetails from "../pages/TripDetails";

function Router() {
  return (
    // <BrowserRouter>

    <Routes>
      <Route index element={<HomePage />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/create"} element={<CreateTripPage />} />
      <Route path={"*"} element={<ErrorPage />} />
      <Route path={"/admin/:id"} element={<AdminPage />} />
      <Route path={"/details"} element={<TripDetails />} />
    </Routes>
    // </BrowserRouter>
  );
}

export default Router;
