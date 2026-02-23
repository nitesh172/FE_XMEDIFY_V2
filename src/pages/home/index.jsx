import {
  HeroSection,
  MedicalSpecialistSection,
  NewsBlogSection,
  OfferSection,
  OurFamilySection,
  PatientCaringSection,
  SpecialisationSection,
} from "../../components/sections"

const index = () => {
  return (
    <div>
      <HeroSection />
      <OfferSection />
      <SpecialisationSection />
      <MedicalSpecialistSection />
      <PatientCaringSection />
      <NewsBlogSection />
      <OurFamilySection />
    </div>
  )
}

export default index
