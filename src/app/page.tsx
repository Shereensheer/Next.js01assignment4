import React from "react";
import CARD from "./card/page";
import Image from "next/image";

function HOME() {
  return (
    <div className="text-2xl font-bold">
      <div className="bg-green-50  justify-between h-full w-3/5 m-auto border-green-500 rounded-lg shadow-lg border-2">
        <h1 className="flex justify-center bg-green-900 text-white ">
          {" "}
          STUDENT ID CARD
        </h1>
        <div className="flex p-16">
          <CARD
            name="Shereen Ahmed"
            age="25years"
            roll={1001}
            class="Monday 2pm to 5pm"
            center="Governor House Karachi"
          />

          <div className="w-1/3 text-center relative z-10">
            <img
              src="/image.png"
              alt={"profile picture"}
              width={150}
              height={150}
              className="rounded-lg mb-6 w-full ml-36"
            />
          </div>
        </div>
        <div>
          <p className="border-t-2 border-t-slate-400 font-bold text-green-500 text-2xl mt-auto flex justify-end mr-7 ml-96">
            Authorized Signature
          </p>
        </div>
        <div>
          <button className=" relative w-96 h-7 p-1 border-2 border-grey-300 bg-green-900 text-slate-200 items-center justify-center flex">
            <span
              className=" absolute inset-0 bg-green-400 "
              style={{ width: "50%" }}
            ></span>
            <span className="z-10">Q2 & WMD</span>
          </button>
        </div>
      </div>{" "}
      <br />
      <div className="text-2xl font-bold">
        <div className="bg-cyan-100 justify-between h-full w-3/5  m-auto  border-cyan-900 rounded-lg shadow-lg border-2">
          <h1 className="flex justify-center bg-cyan-900 text-white">
            STUDENT ID CARD
          </h1>
          <div className="flex p-16">
            <CARD
              name="Abrish Fatima"
              age="20years"
              roll={1002}
              class="Tuesday 9pm to 11pm"
              center="Governor House Karachi"
            />
            <div className="w-1/3 text-center relative z-10">
              <img
                src="/image.png"
                alt={"profile picture"}
                width={150}
                height={150}
                className="rounded-lg mb-6 w-full ml-36"
              />
            </div>
          </div>
          <div>
            <p className="border-t-2 border-t-cyan-400 font-bold text-cyan-500 text-2xl mt-auto flex justify-end mr-7 ml-96">
              Authorized Signature
            </p>
          </div>
          <div>
            <button className=" relative w-96 h-7 p-1 border-2 border-grey-300 bg-cyan-900 text-slate-200 items-center justify-center flex">
              <span
                className=" absolute inset-0 bg-slate-400 "
                style={{ width: "50%" }}
              ></span>
              <span className="z-10">Q2 & WMD</span>
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="text-2xl font-bold">
        <div className="bg-amber-200 justify-between h-full w-3/5 m-auto border-amber-500 rounded-lg shadow-lg border-2">
          <h1 className="flex justify-center bg-amber-800 text-white ">
            {" "}
            STUDENT ID CARD
          </h1>
          <div className="flex p-16">
            <CARD
              name="Sadaf Tamiour"
              age="18years"
              roll={1004}
              class="Sunday 7pm to 10pm"
              center="Governor House Karachi"
            />

            <div className="w-1/3 text-center relative z-10">
              <img
                src="/image.png"
                alt={"profile picture"}
                width={150}
                height={150}
                className="rounded-lg mb-6 w-full ml-36"
              />
            </div>
          </div>
          <div>
            <p className="border-t-2 border-t-amber-400 font-bold text-amber-500 text-2xl mt-auto flex justify-end mr-7 ml-96">
              Authorized Signature
            </p>
          </div>
          <div>
            <button className=" relative w-96 h-7 p-1 border-2 border-amber-300 bg-amber-900 text-amber-200 items-center justify-center flex">
              <span
                className=" absolute inset-0 bg-amber-400 "
                style={{ width: "50%" }}
              ></span>
              <span className="z-10">Q2 & WMD</span>
            </button>
          </div>
        </div>{" "}
        <br />
      </div>
    </div>
  );
}

export default HOME;
