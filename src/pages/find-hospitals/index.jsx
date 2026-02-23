import { useLocation } from "react-router"

const FindHospitals = () => {
  const { state } = useLocation()
  const { state: selectedState, city: selectedCity } = state || {}

  return (
    <div>
      <h1>2 medical centers available in {selectedState}</h1>
    </div>
  )
}

export default FindHospitals
