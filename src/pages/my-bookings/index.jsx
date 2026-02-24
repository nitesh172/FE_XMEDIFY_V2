import { IoMdSearch } from "react-icons/io"
import TopBar from "../../components/top-bar"
import Button from "../../components/button"
import InputBox from "../../components/input"
import bandge from "../../assets/bandge.svg"
import hospitalimg from "../../assets/hospital3.svg"
import { RiThumbUpFill } from "react-icons/ri"
import { useEffect, useState } from "react"
import ads from "../../assets/ads.png"

const index = () => {
  const [hospitals, setHospitals] = useState([])

  const [filterHospital, setFilterHospital] = useState([])

  const [searchText, setSearchText] = useState("")

  const fetchHospitals = async () => {
    try {
      let data = JSON.parse(localStorage.getItem("bookings")) || []
      setHospitals(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchHospitals()
  }, [])

  const searchHospitals = () => {
    let data = searchText
      ? hospitals.filter((hospital) =>
          hospital["Hospital Name"].include(searchText),
        )
      : hospitals

    setFilterHospital(data)
  }

  useEffect(() => {
    searchHospitals()
  }, [searchText, hospitals])

  return (
    <>
      <TopBar>
        <div className="flex flex-row">
          <h1 className="text-white text-[40px] font-ubuntu font-bold text-center w-[30%]">
            My Bookings
          </h1>
          <div className="bg-white z-10 rounded-2xl px-9 py-7 shadow-box-shadow flex-1">
            <div className="flex flex-row items-center w-full gap-x-5">
              <InputBox
                placeholder="Search By Hospital"
                className="flex-1"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button
                icon={<IoMdSearch size={24} color="#FFFFFF" />}
                title="Search"
                className="px-16"
                id="searchBtn"
              />
            </div>
          </div>
        </div>
      </TopBar>
      <div className="bg-secondary p-32">
        <div className="flex flex-row gap-x-5.5 w-full">
          <div className="flex flex-col gap-y-6 flex-1">
            {filterHospital.map((hospital, index) => (
              <HospitalCard key={`hospital-${index}`} hospital={hospital} />
            ))}
          </div>
          <div className="w-[35%]">
            <img src={ads} alt="ads" className="w-full" height={268} />
          </div>
        </div>
      </div>
    </>
  )
}

const HospitalCard = ({ hospital }) => {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="flex flex-row justify-between items-start flex-1">
        <div className="flex flex-row gap-x-4">
          <div className="flex flex-row items-center justify-center w-32 h-32 rounded-full bg-[#8CCFFF] relative">
            <img src={hospitalimg} width={80} height={80} />
            <img
              src={bandge}
              width={20}
              height={20}
              alt="bandge"
              className="absolute bottom-5 right-0"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-3 border-b border-dashed pb-4 border-[#E8E8F0]">
              <h3 className="text-[#14BEF0] text-[20px] font-semibold">
                {hospital["Hospital Name"]}
              </h3>
              <div>
                <div className="font-bold text-[#414146] text-sm">
                  {hospital["City"]}, {hospital["State"]}
                </div>
                <div className="font-normal text-[#414146] text-sm">
                  {hospital["Hospital Type"]}
                </div>
                <div className="font-normal text-[#414146] text-sm">more</div>
              </div>
            </div>
            <div className="px-2.5 py-1 w-fit items-center bg-[#00A500] rounded-[3.5px] flex flex-row gap-x-1">
              <RiThumbUpFill size={16} color="#FFFFFF" />
              <div className="text-[#FFFFFF]/50 text-sm font-normal">
                {hospital["Hospital overall rating"]}
              </div>
            </div>
          </div>
        </div>
        <div className="self-start flex flex-row gap-x-3">
          <TimeCard time={hospital.bookingTime} />
          <DateCard date={hospital.bookingDate} />
        </div>
      </div>
    </div>
  )
}

const TimeCard = ({ time }) => {
  return (
    <div className="text-primary-main border border-primary px-3 py-2 rounded-xs">
      {time}
    </div>
  )
}

const DateCard = ({ date }) => {
  return (
    <div className="text-[#007100] font-bold border border-[#007100] px-3 py-2 rounded-xs">
      {new Date(date)?.toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
      }) || ""}
    </div>
  )
}

export default index
