import { useState } from "react"

const Accordian = ({ parent, child }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onToggle = () => setIsOpen(!isOpen)

  return (
    <div className="flex flex-col w-full">
      {parent(onToggle, isOpen)}
      {child(isOpen, onToggle)}
    </div>
  )
}

export default Accordian
