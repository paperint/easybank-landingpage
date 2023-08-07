import React from "react";
import "../App.css";
import phone from "../images/image-mockups.png";
import desktopimage from "../images/bg-intro-desktop.svg";
import mobileimage from "../images/bg-intro-mobile.svg";

function Section1st() {
  return (
    <section>
      <div className="bg-Neutral-VeryLightGray">
        <div className="grid w-full grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-lg px-4 text-center sm:py-0 lg:text-left">
              <h1 className="max-w-md text-4xl tracking-wide lg:text-5xl text-Primary-DarkBlue">
                Next generation digital banking
              </h1>
              <p className="mt-10 font-light text-Neutral-GrayishBlue">
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
              <button className="px-8 py-3 mt-10 font-bold rounded-full bg-gradient-to-r from-Primary-LimeGreen to-Primary-BrightCyan hover:opacity-50 text-Neutral-White">
                Request invite
              </button>
            </div>
          </div>
          <div className="relative max-lg:row-start-1 lg:col-start-2 h-fit">
            <picture className="w-full">
              <source media="(min-width:640px)" srcSet={desktopimage} />
              <img src={mobileimage} alt="cover" className="w-full" />
            </picture>
            <div className="absolute -top-24 sm:-top-48 lg:-top-32">
              <img src={phone} alt="mockup" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1st;
