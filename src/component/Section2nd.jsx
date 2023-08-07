import React from "react";
import online from "../images/icon-online.svg";
import budgeting from "../images/icon-budgeting.svg";
import onboarding from "../images/icon-onboarding.svg";
import openApi from "../images/icon-api.svg";

function Section2nd() {
  return (
    <section className=" bg-Neutral-LightGrayishBlue">
      <div className="grid items-center grid-rows-5 px-6 py-12 mx-auto text-center gap-x-5 max-w-7xl lg:text-left max-lg:place-items-center lg:grid-rows-2 lg:grid-cols-4">
        <div className="p-6 lg:col-span-4">
          <h1 className="text-4xl text-Primary-DarkBlue">
            Why choose Easybank?
          </h1>
          <p className="mt-6 text-Neutral-GrayishBlue">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="p-6">
          <div className="flex justify-center lg:justify-start">
            <img src={online} alt="online banking" className="w-20 h-20" />
          </div>
          <h2 className="mt-6 text-xl text-Primary-DarkBlue">Online Banking</h2>
          <p className="mt-6 text-Neutral-GrayishBlue">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="p-6">
          <div className="flex justify-center lg:justify-start">
            <img src={budgeting} alt="online banking" className="w-20 h-20" />
          </div>
          <h2 className="mt-6 text-xl text-Primary-DarkBlue">
            Simple Budgeting
          </h2>
          <p className="mt-6 text-Neutral-GrayishBlue">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="p-6">
          <div className="flex justify-center lg:justify-start">
            <img src={onboarding} alt="online banking" className="w-20 h-20" />
          </div>
          <h2 className="mt-6 text-xl text-Primary-DarkBlue">
            Fast Onboarding
          </h2>
          <p className="mt-6 text-Neutral-GrayishBlue">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="p-6">
          <div className="flex justify-center lg:justify-start">
            <img src={openApi} alt="online banking" className="w-20 h-20" />
          </div>
          <h2 className="mt-6 text-xl text-Primary-DarkBlue">Open API</h2>
          <p className="mt-6 text-Neutral-GrayishBlue">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section2nd;
