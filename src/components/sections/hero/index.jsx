import heroSection from "../../../assets/hero-image.png"
import { IoMdSearch } from "react-icons/io"
import { GrLocation } from "react-icons/gr"
import { services } from "./data"
import Button from "../../button"
import Dropdown from "../../dropdown"
import { useEffect, useState } from "react"
import { api_url } from "../../../config/server"
import { useNavigate } from "react-router"

const HeroSection = () => {
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [selectedState, setSelectedState] = useState("")
  const [selectedCity, setSelectedCity] = useState("")

  const fetchStates = async () => {
    try {
      let response = await fetch(api_url + "states")

      let data = await response.json()

      console.log(data)

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
    <div className="bg-main-grad h-screen pt-72 px-32 flex flex-col">
      <div className="flex flex-col gap-y-3.5 mb-8">
        <div className="font-medium text-[32px] ">
          Skip the travel! Find Online
          <div className="font-bold text-[56px]">
            Medical <span className="text-primary-main">Centers</span>
          </div>
        </div>
        <div className="text-[#5C6169] font-normal text-xl">
          Connect instantly with a 24x7 specialist or choose to <br /> video
          visit a particular doctor.
        </div>
      </div>
      <Button title="Find Centers" />
      <div className="bg-white w-full z-10 rounded-2xl px-9 py-14 mt-16 shadow-box-shadow">
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
        <div className="text-xl font-medium text-center mt-16 mb-6">
          You may be looking for
        </div>
        <div className="flex flex-row gap-x-5">
          {services.map((item) => (
            <ServiceCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <img
        src={heroSection}
        alt="heroSection"
        className="absolute top-44 right-30 z-0"
        width={600}
      />
    </div>
  )
}

const ServiceCard = ({ icon, title, selected }) => {
  return (
    <div
      className={`${selected ? "bg-[#2AA7FF]/8 border-primary" : "bg-[#FAFBFE] border-[#FAFBFE]"} cursor-pointer border rounded-lg flex flex-col py-7 flex-1 items-center gap-y-4`}
    >
      <img src={icon} alt={"service-image-" + title} width={60} height={60} />
      <div className="font-normal text-[#ABB6C7] text-[18px]">{title}</div>
    </div>
  )
}

export default HeroSection
