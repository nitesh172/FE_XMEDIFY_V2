import { HiMiniCheckBadge } from "react-icons/hi2"
import image from "../../../assets/caring.png"

const PatientCaringSection = () => {
  return (
    <div className="bg-main-grad py-14 px-32 flex flex-row gap-x-16 justify-between items-center">
      <img src={image} alt={`image-caring`} className="w-[40%] aspect-square" />
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-3.5 mb-8">
          <div className="font-semibold text-base text-primary-main">
            HELPING PATIENTS FROM AROUND THE GLOBE!!
            <div className="font-bold text-[56px] text-primary">
              Patient <span className="text-primary-main">Centers</span>
            </div>
          </div>
          <div className="text-[#5C6169] font-normal text-base">
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </div>
        </div>
        <div className="flex flex-col gap-y-7">
          {[
            "Stay Updated About Your Health",
            "Check Your Results Online",
            "Manage Your Appointments",
          ].map((item) => (
            <div className="flex flex-row gap-x-2.5 items-center">
              <HiMiniCheckBadge color="#2AA7FF" size={20} />
              <div className="text-[18px] font-medium text-primary">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PatientCaringSection
