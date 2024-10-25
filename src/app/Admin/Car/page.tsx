/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Footer from "@/Components/H.F/Footer";
import Header from "@/Components/H.F/Header";
import Admin_Modal from "@/Components/Modal/Admin_Modal";
import Modal from "@/Components/Modal/Modal";
import User_Modal from "@/Components/Modal/User_Modal";
import { getAllCar } from "@/Services/car";
import { car_Props } from "@/Utils/car_type";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import "../../style.css";

const page = () => {
  const [showModal, setShowModal] = useState(false);
  const Role = window.localStorage.getItem("Role");
  const [carAll, setCarAll] = useState<car_Props[]>();

  useEffect(() => {
    getAllCar().then((res) => {
      setCarAll(res.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#FEF4F4]">
      <Header />
      <div
        className="w-full flex flex-row-reverse gap-2 mt-2 mr-2 font-bold cursor-pointer text-[#212121]"
        onClick={() => setShowModal(true)}
      >
        <RxHamburgerMenu className="text-2xl" />
        <p className="font_family">Menu</p>
      </div>
      <h1 className="text-[#212121] font-bold text-2xl m-2">Voitures</h1>
      <section className="m-2">
        <button className="w-[200px] bg-[#FD3131] rounded-[10px] drop-shadow-[0_2px_3px_#212121] p-2 font_family">
          Ajouter
        </button>
      </section>
      <section className="bg-[#FCBFBF] w-[360px] p-2 mt-4">
        {carAll &&
          carAll.map((car) => {
            return (
              <div key={car.id} className="flex justify-between">
                {car.name}
                <section className="flex items-center gap-2">
                  <Link href={""}>
                    <FiEdit className="cursor-pointer" />
                  </Link>
                  <Link href={""}>
                    {" "}
                    <RiDeleteBin6Line className="cursor-pointer" />
                  </Link>
                </section>
              </div>
            );
          })}
      </section>
      <Footer />
      {Role === "93a121fb-c77f-4352-93bc-90b0e3bd80b5" ? (
        <Admin_Modal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      ) : Role === "7c6862a7-82f9-4254-adab-9c4dd826c2b2" ? (
        <User_Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      ) : (
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default page;
