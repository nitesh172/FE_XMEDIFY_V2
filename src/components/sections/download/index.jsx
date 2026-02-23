import image from "../../../assets/appscreen.png"
import appStore from "../../../assets/apple_store.png"
import googlePlay from "../../../assets/google_play.png"
import Button from "../../button"
import InputBox from "../../input"

const DowloadSection = () => {
  return (
    <div className="bg-main-grad pt-14 px-32 flex flex-row gap-x-24 justify-center items-center">
      <img
        src={image}
        alt={`image-caring`}
        className="w-[40%] aspect-square -mb-16"
      />
      <div className="flex flex-col gap-y-14">
        <div className="flex flex-col gap-y-5">
          <div className="font-bold text-[56px] text-primary">
            Download the <br />
            <span className="text-primary-main">Medify</span> App
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="font-bold text-primary text-base">
              Get the link to download the app
            </div>
          </div>
          <div className="flex flex-row gap-x-4 items-center">
            <InputBox placeholder="Enter phone number" className="w-125" />
            <Button title="Send SMS" />
          </div>
        </div>
        <div className="flex flex-row gap-x-6">
          <img
            src={googlePlay}
            alt="googlePlay"
            className="cursor-pointer"
            width={224}
            height={69}
          />
          <img
            src={appStore}
            alt="appstore"
            className="cursor-pointer"
            width={224}
            height={69}
          />
        </div>
      </div>
    </div>
  )
}

export default DowloadSection
