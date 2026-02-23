import { Outlet } from "react-router"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
