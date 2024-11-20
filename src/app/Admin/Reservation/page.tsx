/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Footer from "@/Components/H.F/Footer";
import Header from "@/Components/H.F/Header";
import Admin_Modal from "@/Components/Modal/Admin_Modal";
import Modal from "@/Components/Modal/Modal";
import User_Modal from "@/Components/Modal/User_Modal";
import { getAllReservation } from "@/Services/reservation";
import { reservation_Props } from "@/Utils/reservation_type";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [roleLS, setRoleLS] = useState("");
  const [allReservation, setAllReservation] = useState<reservation_Props[]>();

  useEffect(() => {
    getAllReservation().then((res) => {
      setAllReservation(res.data);
    });
  }, []);
  useEffect(() => {
    const Role = window.localStorage.getItem("Role");
    if (Role) {
      setRoleLS(Role);
    }
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
      <h1 className="font-bold text-[#212121]">R&eacute;servations</h1>
      <section className="">
        {allReservation &&
          allReservation.map((reservation) => {
            return (
              <div
                key={reservation.id}
                className="flex justify-between w-[320px] text-[#212121] bg-[#FCBFBF] p-2 mt-2 md:w-[480px] md:text-[16px] lg:w-[600px] lg:text-[20px]"
              >
                <p>{reservation.name}</p>
                <p>{reservation.reservationDate}</p>
                <p>{reservation.tours}</p>
              </div>
            );
          })}
      </section>
      <Footer />
      {roleLS === "Admin" ? (
        <Admin_Modal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      ) : roleLS === "User" ? (
        <User_Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      ) : (
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Page;
