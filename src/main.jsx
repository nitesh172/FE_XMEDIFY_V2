import "./index.css"
import Home from "./pages/home"
import MyBookings from "./pages/my-bookings"
import MainLayout from "./layouts/main-layouts"
import FindHospitals from "./pages/find-hospitals"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/find-hospitals" element={<FindHospitals />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
