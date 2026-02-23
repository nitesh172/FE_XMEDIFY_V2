const Indicator = ({ selectedIndex, index }) => {
  return (
    <div
      className={`w-6 h-6 flex flex-row items-center justify-center rounded-full border ${selectedIndex === index ? "border-primary" : "border-transparent"}`}
    >
      <div
        className={`w-2.5 h-2.5 rounded-full ${selectedIndex === index ? "bg-primary" : "bg-[#BCD8E9]"}`}
      ></div>
    </div>
  )
}

export default Indicator
