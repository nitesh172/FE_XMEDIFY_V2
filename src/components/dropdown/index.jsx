import { useState } from "react"

const Dropdown = ({
  options,
  icon,
  placeholder,
  className = "",
  onChange,
  value,
  id,
}) => {
  const [open, setOpen] = useState(false)

  const handleSelect = (option) => {
    onChange &&
      onChange({
        target: { value: option },
      })
    setOpen(false)
  }

  return (
    <div
      id={id}
      className={
        "relative bg-[#FAFBFE] border border-[#F0F0F0] rounded-lg flex items-center gap-x-3 px-4 py-3 " +
        className
      }
    >
      {icon}

      <div
        className="w-full text-sm text-primary cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        {value || placeholder}
      </div>

      {open && (
        <ul className="absolute left-0 top-full mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md z-50 max-h-60 overflow-y-auto">
          {options?.map((option) => (
            <li
              key={option}
              className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
