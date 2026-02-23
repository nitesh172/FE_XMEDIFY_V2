import React from "react"
import { specialities } from "./data"
import Button from "../../button"

const SpecialisationSection = () => {
  return (
    <div className="bg-main-grad py-14 px-32 flex flex-col gap-y-16">
      <div className="flex flex-row flex-wrap gap-6 justify-center">
        {specialities.map((item) => (
          <SpecialityCard key={`special-${item.id}`} {...item} />
        ))}
      </div>
      <Button title="View All" className="self-center px-10" />
    </div>
  )
}

const SpecialityCard = ({ icon, title }) => {
  return (
    <div className="cursor-pointer bg-white w-[calc(25%-20px)] rounded-xl flex flex-col py-7 items-center gap-y-4">
      <img src={icon} alt={"service-image-" + title} width={60} height={60} />
      <div className="font-normal text-[#ABB6C7] text-[18px]">{title}</div>
    </div>
  )
}

export default SpecialisationSection
