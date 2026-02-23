import news from "../../../assets/news.png"
import doctorProfile from "../../../assets/doctor-profile.png"

const NewsBlogSection = () => {
  return (
    <div className="py-14 px-32 flex flex-col gap-y-9 justify-between items-center">
      <div className="flex flex-col gap-y-2 items-center">
        <div className="font-semibold text-base text-primary-main mb-2">
          Blog & News
        </div>
        <div className="font-semibold text-5xl text-center">
          Read Our Latest News
        </div>
      </div>
      <div className="flex flex-row gap-x-6">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  )
}

const NewsCard = () => {
  return (
    <div className="rounded-xl flex flex-col gap-y-3 flex-1 border border-[#00000012]">
      <img
        src={news}
        alt="news-image"
        className="w-full aspect-square rounded-lg"
      />
      <div className="p-3.5 flex flex-col gap-y-2">
        <div className="flex flex-row gap-x-2">
          <div className="border-r border-[#DDDDDD] pr-2 text-[#77829D] font-semibold">
            Medical
          </div>
          <div className="pl-2 text-[#77829D] font-semibold">
            March 31, 2022
          </div>
        </div>
        <div className="text-[18px] font-semibold text-primary">
          6 Tips To Protect Your Mental Health When You’re Sick
        </div>
        <div className="flex flex-row gap-x-3 items-center">
          <img
            src={doctorProfile}
            alt="dcotor-profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="font-semibold text-[#1B3C74]">Rebecca Lee</div>
        </div>
      </div>
    </div>
  )
}

export default NewsBlogSection
