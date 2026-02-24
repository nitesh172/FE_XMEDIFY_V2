import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Dropdown from "../../dropdown"
import { GrLocation } from "react-icons/gr"
import Button from "../../button"
import { IoMdSearch } from "react-icons/io"
import { api_url } from "../../../config/server"

const SearchSection = () => {
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [selectedState, setSelectedState] = useState("")
  const [selectedCity, setSelectedCity] = useState("")

  const fetchStates = async () => {
    try {
      let response = await fetch(api_url + "states")

      let data = await response.json()

      setStates(data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchCities = async () => {
    try {
      let response = await fetch(api_url + `cities/${selectedState}`)

      let data = await response.json()

      setCities(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchStates()
  }, [])

  useEffect(() => {
    selectedState && fetchCities()
  }, [selectedState])

  const navigate = useNavigate()

  const handleSearch = () => {
    navigate("/find-hospitals", {
      state: {
        state: selectedState,
        city: selectedCity,
      },
    })
  }

  return (
    <div className="flex flex-row items-center w-full gap-x-5">
      <Dropdown
        icon={<GrLocation size={24} color="#9CA3AF" />}
        placeholder="State"
        options={states}
        className="w-1/3"
        onChange={(e) => setSelectedState(e.target.value)}
        value={selectedState}
        id="state"
      />
      <Dropdown
        icon={<GrLocation size={24} color="#9CA3AF" />}
        placeholder="City"
        options={cities}
        className="flex-1"
        onChange={(e) => setSelectedCity(e.target.value)}
        value={selectedCity}
        id="city"
      />
      <Button
        icon={<IoMdSearch size={24} color="#FFFFFF" />}
        title="Search"
        className="px-16"
        onClick={handleSearch}
        id="searchBtn"
      />
    </div>
  )
}

export default SearchSection
