import React from "react"
import { NavLink } from "react-router"

const NavLinks = ({ title, href }) => {
  return (
    <NavLink className="text-primary font-normal text-sm" to={href}>
      {title}
    </NavLink>
  )
}

export default NavLinks
