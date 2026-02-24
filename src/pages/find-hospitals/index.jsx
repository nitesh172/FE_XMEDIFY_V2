import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { api_url } from "../../config/server"
import TopBar from "../../components/top-bar"
import SearchSection from "../../components/sections/search-section"
import { LuBadgeCheck } from "react-icons/lu"
import ads from "../../assets/ads.png"
import hospitalimg from "../../assets/hospital3.svg"
import Accordian from "../../components/accordian"
import { RiThumbUpFill } from "react-icons/ri"
import Button from "../../components/button"
import bandge from "../../assets/bandge.svg"
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md"

const FindHospitals = () => {
  const { state } = useLocation()
  const { state: selectedState, city: selectedCity } = state || {}

  const [hospitals, setHospitals] = useState([])

  const fetchHospitals = async () => {
    try {
      let response = await fetch(
        api_url + `data?state=${selectedState}&city=${selectedCity}`,
      )

      let data = await response.json()

      setHospitals(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (selectedState && selectedCity) fetchHospitals()
  }, [selectedState, selectedCity])

  return (
    <>
      <TopBar>
        <div className="bg-white z-10 rounded-2xl px-9 py-7 shadow-box-shadow w-full">
          <SearchSection />
        </div>
      </TopBar>
      <div className="bg-secondary p-32">
        <h1 className="text-primary text-2xl font-medium mb-2">
          {hospitals.length} medical centers available in{" "}
          {selectedCity.toLowerCase()}
        </h1>
        <div className="flex flex-row gap-x-2 items-center mb-6">
          <LuBadgeCheck size={24} color="#2D2D32" />
          <div className="text-base font-normal text-[#787887]">
            Book appointments with minimum wait-time & verified doctor details
          </div>
        </div>
        <div className="flex flex-row gap-x-5.5 w-full">
          <div className="flex flex-col gap-y-6 flex-1">
            {hospitals.map((hospital, index) => (
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
  const [date, setDate] = useState(new Date())

  return (
    <div className="bg-white p-6 rounded-2xl">
      <Accordian
        parent={(onToggle) => {
          return (
            <div className="flex flex-row justify-between flex-1">
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
                    <div className="text-[#14BEF0] text-[20px] font-semibold">
                      {hospital["Hospital Name"]}
                    </div>
                    <div>
                      <div className="font-bold text-[#414146] text-sm">
                        {hospital["City"]}, {hospital["State"]}
                      </div>
                      <div className="font-normal text-[#414146] text-sm">
                        {hospital["Hospital Type"]}
                      </div>
                      <div className="font-normal text-[#414146] text-sm">
                        more
                      </div>
                    </div>
                    <div className="flex flex-row gap-x-2">
                      <div className="text-sm text-[#02A401] font-bold">
                        Free
                      </div>
                      <div className="text-sm text-[#787887] font-normal line-through">
                        ₹500
                      </div>
                      <div className="text-sm text-[#414146] font-normal">
                        Consultation fee at clinic
                      </div>
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
              <div className="self-end flex flex-col gap-y-3 items-center">
                <div className="text-sm text-[#01A400] font-medium">
                  Available Today
                </div>
                <Button
                  title="Book FREE Center Visit"
                  className="w-full"
                  onClick={onToggle}
                />
              </div>
            </div>
          )
        }}
        child={(isOpen, onToggle) => {
          const handleSubmit = (time) => {
            let bookings = JSON.parse(localStorage.getItem("bookings")) || []

            bookings.push({
              ...hospital,
              bookingDate: date,
              bookingTime: time,
            })

            localStorage.setItem("bookings", JSON.stringify(bookings) || [])
            setDate(new Date())
            onToggle()
          }
          return (
            isOpen && (
              <div className="flex flex-col gap-y-4 border-t border-[#F0F0F5] pt-4 mt-6">
                <DateSelector onChange={(date) => setDate(date)} />
                <div className="py-5 px-11 flex flex-row gap-x-12 items-center">
                  <p className="text-sm text-primary">Morning</p>
                  <div className="flex flex-row gap-x-8">
                    <TimeCard
                      onClick={() => handleSubmit("10:00 AM")}
                      time="10:00 AM"
                    />
                  </div>
                </div>
                <div className="py-5 px-11 flex flex-row gap-x-8 items-center border-y border-[#F0F0F5]">
                  <p className="text-sm text-primary">Afternoon</p>
                  <div className="flex flex-row gap-x-8">
                    {[
                      "12:00 PM",
                      "12:30 PM",
                      "01:30 PM",
                      "02:00 PM",
                      "02:30 PM",
                    ].map((time) => (
                      <TimeCard
                        onClick={() => handleSubmit(time)}
                        key={time}
                        time={time}
                      />
                    ))}
                  </div>
                </div>
                <div className="py-5 px-11 flex flex-row gap-x-12 items-center">
                  <p className="text-sm text-primary">Evening</p>
                  <div className="flex flex-row gap-x-8">
                    {["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"].map(
                      (time) => (
                        <TimeCard
                          onClick={() => handleSubmit(time)}
                          key={time}
                          time={time}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            )
          )
        }}
      />
    </div>
  )
}

const DateSelector = ({ onChange }) => {
  const [startIndex, setStartIndex] = useState(0)
  const [selectedDate, setSelectedDate] = useState(0)

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i)
    return date
  })

  const handleNext = () => {
    if (startIndex + 3 < dates.length) setStartIndex(startIndex + 1)
  }

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1)
  }

  return (
    <div className="flex flex-row gap-x-2.5">
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="border border-[#E0E0E4] w-12 h-12 flex flex-row items-center justify-center rounded-full disabled:opacity-30"
      >
        <MdOutlineKeyboardArrowLeft size={20} color="#2AA7FF" />
      </button>
      <div className="flex flex-row flex-1">
        {dates.slice(startIndex, startIndex + 3).map((date, idx) => (
          <DateCard
            key={idx}
            date={date}
            selected={selectedDate === startIndex + idx}
            onClick={() => {
              onChange(date)
              setSelectedDate(startIndex + idx)
            }}
          />
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={startIndex + 3 >= dates.length}
        className="border border-[#E0E0E4] w-12 h-12 flex flex-row items-center justify-center rounded-full disabled:opacity-30"
      >
        <MdOutlineKeyboardArrowRight size={20} color="#2AA7FF" />
      </button>
    </div>
  )
}

const DateCard = ({ date, selected, onClick }) => {
  const isToday = new Date().toDateString() === date.toDateString()
  const isTomorrow =
    new Date(new Date().setDate(new Date().getDate() + 1)).toDateString() ===
    date.toDateString()

  const label = isToday
    ? "Today"
    : isTomorrow
      ? "Tomorrow"
      : date.toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
        })

  return (
    <div
      onClick={onClick}
      className={`flex flex-col gap-y-1 items-center border-b-4 cursor-pointer pb-1.5 flex-1 transition-all ${selected ? "border-primary" : "border-[#F0F0F5]"}`}
    >
      <p
        className={`text-base text-primary ${selected ? "font-bold" : "font-normal"}`}
      >
        {label}
      </p>
      <div className="text-xs font-normal text-[#01A400]">
        11 slots available
      </div>
    </div>
  )
}

const TimeCard = ({ time, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="text-primary-main cursor-pointer border border-primary px-3 py-2 rounded-xs"
    >
      {time}
    </div>
  )
}

export default FindHospitals
