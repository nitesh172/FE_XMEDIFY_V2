const Button = ({ title, onClick, type, icon, className, id }) => {
  return (
    <button
      className={
        "text-white items-center justify-center bg-primary rounded-lg px-4.5 py-3 cursor-pointer w-fit flex flex-row gap-x-1.5 " +
        className
      }
      id={id}
      onClick={onClick}
      type={type}
    >
      {icon}
      {title}
    </button>
  )
}

export default Button
