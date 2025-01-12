"use client";

import { hackathonsDummyData } from "@/constants/data";
import { useParams } from "next/navigation";
import { GoShieldCheck } from "react-icons/go";
import { PiSuitcase } from "react-icons/pi";
import { FaRegCalendar } from "react-icons/fa";
import { useState } from "react";
import Modal from "../UI/Modal";
import toast, { Toaster } from 'react-hot-toast';

const HackathonDetails = () => {
  const { hackathonSlug } = useParams();
  const [open, setOpen] = useState(false);

  const getHackathonDetailsData = hackathonsDummyData?.filter(
    (hackathon) => hackathon.slug === hackathonSlug
  )[0];

  console.log("getHackathonDetailsData", getHackathonDetailsData);

  console.log("hackathonSlug", hackathonSlug);

  const handleConfirmRegistration = () => {
    toast.success("Hackathon registered successfully", {
        position: "top-center",
      });
    setOpen(false)

  }

  return (
    <>
      <Modal 
      open={open} onOpenChange={setOpen}
      canClose={true}
      title={getHackathonDetailsData.title}
      >
        <div className="py-5">{getHackathonDetailsData.desp}</div>
        <button className="w-full bg-primary-1 text-white py-2 px-3 rounded-md hover:opacity-90"
        onClick={() => handleConfirmRegistration()}
        >Confirm Registration</button>
      </Modal>
      <Toaster />
      <div className="flex flex-col gap-5">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex-1">
            <div className="w-[140px] h-[140px] border-[10px] border-primary bg-secondary-2 text-white text-center flex items-center justify-center">
              Thumbnail
            </div>
          </div>

          <div className="flex-[2] border-y-0 border-l-0 border-r-[1px] border-secondary-4">
            <div className="flex flex-col items-start gap-3">
              <h2 className="text-3xl font-semibold">
                {getHackathonDetailsData.title}
              </h2>
              <p className="text-secondary-2">
                Hosted by{" "}
                <span className="text-base font-semibold text-black">
                  {" "}
                  {getHackathonDetailsData.company}{" "}
                </span>
              </p>
              <div className="flex items-center justify-center gap-3">
                <p className="flex gap-1 items-center justify-center">
                  <GoShieldCheck />
                  {getHackathonDetailsData.type}
                </p>
                <p className="flex gap-1 items-center justify-center">
                  <PiSuitcase />
                  {getHackathonDetailsData.company}
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center border border-x-0 border-b-0 border-t-1 border-secondary-4 py-3  mt-2">
              <div>
                <p className="text-sm">Opens on</p>
                <p className="text-black font-semibold">
                  {getHackathonDetailsData.date}
                </p>
                <p className="text-black font-semibold">IST (Asia/Calcutta)</p>
              </div>

              <div>
                <p className="text-sm">Duration</p>
                <p className="text-black font-semibold">2 hours 30 minutes</p>
                <p className="text-black font-semibold">IST (Asia/Calcutta)</p>
              </div>

              <div>
                <p className="text-primary font-semibold flex items-center justify-center gap-1">
                  <span>
                    <FaRegCalendar className="text-primary" />
                  </span>
                  <span>Add to Calendar</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <button 
            className="bg-primary text-white font-semibold py-2 px-20 rounded-md hover:opacity-90"
            onClick={() => setOpen(true)}
            >
              Register
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold text-black">
            {getHackathonDetailsData.title}
          </p>
          <p className="text-black">{getHackathonDetailsData.content}</p>
          <p className="text-black">{getHackathonDetailsData.desp}</p>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          corrupti architecto, accusantium hic et velit quas aliquid nemo
          nesciunt necessitatibus nulla in incidunt nisi praesentium possimus
          consequatur doloremque eius maiores veniam harum, modi inventore! Vero
          iure repellat accusantium soluta maiores ullam, quas sunt? Velit, unde
          fugit rem voluptas commodi quam!
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          numquam quo commodi impedit totam rerum molestiae, in tempora quis hic
          eveniet aliquid ut asperiores ducimus similique. Voluptatum, quia
          sapiente id, cupiditate totam a officia dolore corporis hic voluptate
          facere culpa labore assumenda aliquam nostrum incidunt veniam dolor
          sed, architecto voluptatem.
        </p>
      </div>
    </>
  );
};

export default HackathonDetails;
