const TopBar = ({ children }) => {
  return (
    <div className="w-full h-25 bg-primary rounded-b-2xl relative px-32">
      <div className="absolute top-6 left-32 right-32">{children}</div>
    </div>
  )
}

export default TopBar
