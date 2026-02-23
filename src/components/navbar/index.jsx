import React from "react"
import Logo from "../logo"
import NavLinks from "../nav-links"
import Button from "../button"
import { useNavigate, useLocation } from "react-router"

const index = () => {
  const navigate = useNavigate()
  const navigateToMyBookings = () => navigate("/my-booking")
  const location = useLocation()
  const currentPathname = location.pathname

  return (
    <div
      className={`flex flex-col ${currentPathname === "/" ? "absolute left-0 right-0 top-0" : "relative"}`}
    >
      <div className="py-2.5  flex flex-row items-center justify-center text-center font-normal text-white bg-primary">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <nav className="py-6 px-32 flex flex-row items-center justify-between">
        <Logo />
        <div className="flex flex-row gap-x-10 items-center">
          <NavLinks title="Find Doctors" href="/" />
          <NavLinks title="Hospitals" href="/" />
          <NavLinks title="Medicines" href="/" />
          <NavLinks title="Surgeries" href="/" />
          <NavLinks title="Software for Provider" href="/" />
          <NavLinks title="Facilities" href="/" />
          <Button
            title="My Bookings"
            type="button"
            onClick={navigateToMyBookings}
          />
        </div>
      </nav>
    </div>
  )
}

export default index
