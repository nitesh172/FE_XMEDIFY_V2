const InputBox = ({
  onChange,
  name,
  type,
  placeholder,
  className,
  icon,
  id,
}) => {
  return (
    <div
      id={id}
      className={
        "bg-[#FAFBFE] border border-[#F0F0F0] rounded-lg flex flex-row items-center gap-x-3 px-4 py-3 " +
        className
      }
    >
      {icon}
      <input
        type={type}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="h-full w-full appearance-none outline-none text-sm"
      />
    </div>
  )
}

export default InputBox
