import happyPatient from "../../../assets/happy-patient.svg"
import hospital from "../../../assets/Hospital2.svg"
import doctor from "../../../assets/doctors.svg"
import drugStore from "../../../assets/Drugstore2.svg"

const OurFamilySection = () => {
  return (
    <div className="bg-main-grad py-14 px-32 flex flex-row gap-x-24 justify-between items-center">
      <div className="flex flex-col gap-y-3.5 mb-8">
        <div className="font-semibold text-base text-primary-main">
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          <div className="font-bold text-[56px] text-primary">Our Families</div>
        </div>
        <div className="text-[#5C6169] font-normal text-base leading-[240%]">
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </div>
      </div>
      <div className="flex flex-row gap-x-9">
        <div className="flex flex-col gap-y-6">
          <WidgetCard
            icon={happyPatient}
            color="bg-[#EBF7FF]"
            value={5000}
            title="Happy Patients"
          />
          <WidgetCard
            icon={drugStore}
            color="bg-[#FFF7E6]"
            value={1000}
            title="Laboratories"
          />
        </div>
        <div className="flex flex-col gap-y-6 mt-12">
          <WidgetCard
            icon={hospital}
            color="bg-[#FFF2F0]"
            value={200}
            title="Hospitals"
          />
          <WidgetCard
            icon={doctor}
            color="bg-[#EBFAF1]"
            value={700}
            title="Expert Doctors"
          />
        </div>
      </div>
    </div>
  )
}

const WidgetCard = ({ color, title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg py-10 flex flex-col items-center w-63 gap-y-6">
      <div
        className={`w-25 h-25 rounded-full ${color} flex flex-row justify-center items-center`}
      >
        <img src={icon} alt={`image-widget-${title}`} width={50} height={50} />
      </div>
      <div className="text-5xl text-primary font-semibold">{value}+</div>
      <div className="text-[18px] text-center text-[#77829D] font-medium">
        {title}
      </div>
    </div>
  )
}

export default OurFamilySection
