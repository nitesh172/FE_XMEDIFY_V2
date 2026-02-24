import heroSection from "../../../assets/hero-image.png"
import { services } from "./data"
import Button from "../../button"
import SearchSection from "../search-section"

const HeroSection = () => {
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
        <SearchSection />
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
