import doctors from "../../../assets/Doctor.svg"
import labs from "../../../assets/Drugstore.svg"
import hospitals from "../../../assets/Hospital.svg"
import medicalStore from "../../../assets/Capsule.svg"
import ambulance from "../../../assets/Ambulance.svg"

export const services = [
  { title: "Doctors", id: 0, icon: doctors },
  { title: "Labs", id: 1, icon: labs },
  { title: "Hospitals", id: 2, icon: hospitals, selected: true },
  { title: "Medical Store", id: 3, icon: medicalStore },
  { title: "Ambulance", id: 4, icon: ambulance },
]
