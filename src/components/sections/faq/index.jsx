import faqImage from "../../../assets/faq.png"
import Accordian from "../../accordian"
import { FaMinus, FaPlus } from "react-icons/fa"
import { questions } from "./data"

const FAQSection = () => {
  return (
    <div className="py-14 px-32 flex flex-col gap-y-9 justify-between items-center">
      <div className="flex flex-col gap-y-2 items-center">
        <div className="font-semibold text-base text-primary-main mb-2">
          Get Your Answer
        </div>
        <div className="font-semibold text-5xl text-center">
          Frequently Asked Questions
        </div>
      </div>
      <div className="flex flex-row gap-x-20 justify-center items-center">
        <img
          src={faqImage}
          alt={`image-faq`}
          className="w-[45%] aspect-square"
        />
        <div className="flex flex-col gap-y-6 w-[50%]">
          {questions.map((item) => (
            <FaqItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

const FaqItem = ({ question, answer }) => {
  return (
    <Accordian
      parent={(onToggle, isOpen) => (
        <div className="px-4 py-5 flex flex-row justify-between items-center gap-x-7">
          <div className="font-semibold text-[18px] text-primary">
            {question}
          </div>
          {isOpen ? (
            <FaMinus
              size={18}
              color="#2AA7FF"
              onClick={onToggle}
              className="cursor-pointer"
            />
          ) : (
            <FaPlus
              size={18}
              color="#2AA7FF"
              onClick={onToggle}
              className="cursor-pointer"
            />
          )}
        </div>
      )}
      child={(isOpen) => {
        return isOpen ? (
          <div className="px-4 flex flex-row justify-between items-center gap-x-7">
            <div className="font-normal text-base text-[#77829D]">{answer}</div>
          </div>
        ) : null
      }}
    />
  )
}

export default FAQSection
