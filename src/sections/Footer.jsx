import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between gap-20 items-start max-lg:flex-col flex-wrap">
        <div className="flex flex-col items-start">
            <a href="/">
              <img src={footerLogo} width={150} height={46} />
            </a>
            <p className="mt-6 text-base font-montserrat max-w-sm text-white-400">Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards</p>
            <div className="flex items-center gap-5 mt-8 ">
                {
                  socialMedia.map((icon)=>(
                    <div key={icon.alt} className="flex justify-center w-12 h-12 items-center bg-white rounded-full">
                      <img src={icon.src} alt={icon.alt} width={24} height={24}/>
                    </div>
                  ))
                }
            </div>
        </div>

        <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap">
              {
                footerLinks.map((section)=>(
                  <div key={section}>
                    <h4 className="text-white font-montserrat text-2xl leading--nomal mb-6 font-medium">
                      {section.title}
                    </h4>
                    <ul>
                      {
                        section.links.map((link)=>(
                          <li key={link.name} className="mt-3 hover:text-slate-gray cursor-pointer font-montserrat text-base leading-normal text-white">
                            <a>{link.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
            <div className="flex flex-1 justify-start items-center font-montserrat cursor-pointer">
                <img src={copyrightSign} alt="copy right sign" width={20} height={20} className="rounded-full m-0"></img>
                <p className="font-montserrat ml-3"> Copyright. All rights reserved.</p>
            </div>
            <p className="cursor-pointer font-montserrat"> Terms & Conditions.</p>

      </div>
    </footer>
  );
}

export default Footer
