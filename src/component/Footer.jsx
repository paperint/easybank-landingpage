import React from "react";
import footerLogo from "../images/footerlogo.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

function Footer() {
  return (
    <footer className=" bg-Primary-DarkBlue">
      <div className="flex flex-col items-center justify-center w-full gap-6 p-12 mx-auto lg:justify-between lg:flex-row max-w-7xl">
        <div className="flex flex-col items-center justify-center w-full lg:flex-row gap-7 lg:gap-20">
          <div className="flex flex-col justify-between gap-6 lg:gap-12">
            <div>
              <img src={footerLogo} alt="logo" className="fill-Neutral-White" />
            </div>
            <div className="flex justify-between w-40">
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#">
                <img src={pinterest} alt="pinterest" />
              </a>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>

          <div className="w-full text-center">
            <ul className="flex flex-col text-center lg:gap-20 lg:flex-row text-Neutral-VeryLightGray">
              <div>
                <li className="mb-5 hover:text-Primary-LimeGreen">
                  <a href="#">About Us</a>
                </li>
                <li className="mb-5 hover:text-Primary-LimeGreen">
                  <a href="#">Contact</a>
                </li>
                <li className="max-lg:mb-5 hover:text-Primary-LimeGreen">
                  <a href="#">Blog</a>
                </li>
              </div>
              <div>
                <li className="mb-5 hover:text-Primary-LimeGreen">
                  <a href="#">Careers</a>
                </li>
                <li className="mb-5 hover:text-Primary-LimeGreen">
                  <a href="#">Support</a>
                </li>
                <li className="hover:text-Primary-LimeGreen">
                  <a href="#">Privacy</a>
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full max-w-xs gap-4 text-center">
          <button className="py-3 font-bold rounded-full px-7 bg-gradient-to-r from-Primary-LimeGreen to-Primary-BrightCyan hover:opacity-50 text-Neutral-White">
            Request invite
          </button>
          <p className="text-sm text-Neutral-GrayishBlue">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
