import { useNavigate } from "react-router"
import logo from "../../assets/logo.png"

const Logo = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate("/")

  return (
    <img
      onClick={handleClick}
      src={logo}
      alt="logo"
      className="cursor-pointer"
      width={92}
      height={27}
    />
  )
}

export default Logo
