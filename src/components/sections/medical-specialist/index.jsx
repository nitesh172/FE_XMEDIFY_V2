import Indicator from "../../indicator"
import { doctors } from "./data"

const MedicalSpecialistSection = () => {
  return (
    <div className="py-14 gap-y-16 flex flex-col">
      <div className="font-semibold text-5xl text-center text-primary">
        Our Medical Specialist
      </div>
      <div className="flex flex-row gap-x-8 overflow-hidden justify-center">
        {doctors.map((item, index) => (
          <SpecialistCard
            key={`specialist-card-${item.id}`}
            index={index}
            {...item}
          />
        ))}
      </div>
      <div className="flex flex-row gap-x self-center">
        {[...Array(3).keys()].map((item, index) => (
          <Indicator key={item.id} selectedIndex={1} index={index} />
        ))}
      </div>
    </div>
  )
}

const SpecialistCard = ({ image, name, specialist }) => {
  return (
    <div className="flex flex-col items-center gap-y-3.5 min-w-[22%] aspect-square">
      <div className=" bg-white rounded-t-[250px] rounded-b-lg shadow-doctor-card-shadow w-full h-full p-2">
        <div className="bg-doctor-bg rounded-t-[250px] rounded-b-lg w-full h-full items-center flex flex-col justify-end">
          <img
            src={image}
            alt={`image-doctor-${name}`}
            className="w-[80%] h-[90%]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-1 items-center">
        <div className="font-normal text-2xl text-primary">{name}</div>
        <div className="font-medium text-base text-primary-main">
          {specialist}
        </div>
      </div>
    </div>
  )
}

export default MedicalSpecialistSection
