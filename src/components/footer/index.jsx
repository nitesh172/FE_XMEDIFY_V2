import Logo from "../logo"
import { MdKeyboardArrowRight } from "react-icons/md"
import { links1, links2 } from "./ui-config"
import { Link } from "react-router"
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa"
import { FAQSection, DowloadSection } from "../sections"

const Footer = () => {
  return (
    <div>
      <FAQSection />
      <DowloadSection />
      <footer className="bg-[#1B3C74] py-10 px-32 flex flex-col">
        <div className="flex flex-row justify-between py-6 mb-8">
          <div className="flex flex-col  justify-between">
            <Logo />
            <div className="flex flex-row gap-x-4">
              <SocialLink>
                <FaFacebookF size={24} color="#2AA7FF" />
              </SocialLink>
              <SocialLink>
                <FaTwitter size={24} color="#2AA7FF" />
              </SocialLink>
              <SocialLink>
                <FaYoutube size={24} color="#2AA7FF" />
              </SocialLink>
              <SocialLink>
                <FaPinterest size={24} color="#2AA7FF" />
              </SocialLink>
            </div>
          </div>
          <div className="flex flex-row gap-x-24">
            <div className="flex flex-col gap-y-3">
              {links1.map((item) => (
                <FooterLink key={item.id} {...item} />
              ))}
            </div>
            <div className="flex flex-col gap-y-3">
              {links2.map((item) => (
                <FooterLink key={item.id} {...item} />
              ))}
            </div>
            <div className="flex flex-col gap-y-3">
              {links1.map((item) => (
                <FooterLink key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t pt-8 border-[#FFFFFF1A] text-white">
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </div>
      </footer>
    </div>
  )
}

const FooterLink = ({ title }) => {
  return (
    <Link className="flex flex-row gap-x-3 items-center">
      <MdKeyboardArrowRight size={24} color="#FFFFFF" />
      <div className="text-base font-normal text-white">{title}</div>
    </Link>
  )
}

const SocialLink = ({ children }) => {
  return (
    <Link className="bg-white items-center justify-center flex flex-row rounded-full p-2">
      {children}
    </Link>
  )
}

export default Footer
