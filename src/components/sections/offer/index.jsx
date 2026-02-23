import Indicator from "../../indicator"
import { offers } from "./data"

const OfferSection = () => {
  return (
    <div className="pt-[10%] pb-7 gap-y-16 px-32 flex flex-col">
      <div className="font-semibold text-5xl text-center">
        Find by specialisation
      </div>
      <div className="flex flex-row gap-x-8 w-full justify-center">
        {offers.map((item, index) => (
          <OfferCard key={item.id} index={index} {...item} />
        ))}
      </div>
      <div className="flex flex-row gap-x self-center">
        {[...Array(3).keys()].map((item, index) => (
          <Indicator key={item} selectedIndex={1} index={index} />
        ))}
      </div>
    </div>
  )
}

const OfferCard = ({ image, index }) => {
  return (
    <img
      src={image}
      alt={"offer-image-" + index}
      className="w-1/3 aspect-video"
    />
  )
}

export default OfferSection
