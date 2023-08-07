import React from "react";
import currency from "../images/image-currency.jpg";
import restaurant from "../images/image-restaurant.jpg";
import confetti from "../images/image-confetti.jpg";
import plane from "../images/image-plane.jpg";

function Section3rd() {
  return (
    <section className=" bg-Neutral-VeryLightGray">
      <div className="p-6 py-20 mx-auto max-w-7xl">
        <h1 className="mb-10 text-4xl text-center lg:text-left text-Primary-DarkBlue">
          Latest Articles
        </h1>
        <div className="grid row-auto gap-6 md:grid-cols-4">
          <div className=" rounded-xl bg-Neutral-White hover:shadow-xl">
            <div>
              <img
                src={currency}
                alt="currency"
                className="object-cover w-full rounded-t-lg h-52"
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-Neutral-GrayishBlue">
                By Claire Robinson
              </p>
              <h2 className="mt-4 mb-4 text-lg text-Primary-DarkBlue">
                Receive money in any currency with no fees
              </h2>
              <p className="text-sm text-Neutral-GrayishBlue">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>
          <div className=" rounded-xl bg-Neutral-White hover:shadow-xl">
            <div>
              <img
                src={restaurant}
                alt="restaurant"
                className="object-cover w-full rounded-t-lg h-52 "
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-Neutral-GrayishBlue">
                By Wilson Hutton
              </p>
              <h2 className="mt-4 mb-4 text-lg text-Primary-DarkBlue">
                Treat yourself without worrying about money
              </h2>
              <p className="text-sm text-Neutral-GrayishBlue">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-Neutral-White hover:shadow-xl">
            <div>
              <img
                src={plane}
                alt="plane"
                className="object-cover w-full rounded-t-lg h-52 "
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-Neutral-GrayishBlue">
                By Wilson Hutton
              </p>
              <h2 className="mt-4 mb-4 text-lg text-Primary-DarkBlue">
                Take your Easybank card wherever you go
              </h2>
              <p className="text-sm text-Neutral-GrayishBlue">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
          <div className=" rounded-xl bg-Neutral-White hover:shadow-xl">
            <div>
              <img
                src={confetti}
                alt="confetti"
                className="object-cover w-full rounded-t-lg h-52 "
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-Neutral-GrayishBlue">
                By Claire Robinson
              </p>
              <h2 className="mt-4 mb-4 text-lg text-Primary-DarkBlue">
                Our invite-only Beta accounts are now live!
              </h2>
              <p className="text-sm text-Neutral-GrayishBlue">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3rd;
