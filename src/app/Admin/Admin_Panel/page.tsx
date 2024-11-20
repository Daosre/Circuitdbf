/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Footer from "@/Components/H.F/Footer";
import Header from "@/Components/H.F/Header";
import Admin_Modal from "@/Components/Modal/Admin_Modal";
import Modal from "@/Components/Modal/Modal";
import User_Modal from "@/Components/Modal/User_Modal";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../../style.css";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [roleLS, setRoleLS] = useState("");

  useEffect(() => {
    const Role = window.localStorage.getItem("Role");
    if (Role) {
      setRoleLS(Role);
    }
  }, []);
  return (
    <div className="bg-[#FEF4F4] flex flex-col items-center font_family">
      <Header />
      <div
        className="w-full flex flex-row-reverse gap-2 mt-2 mr-2 font-bold cursor-pointer text-[#212121]"
        onClick={() => setShowModal(true)}
      >
        <RxHamburgerMenu className="text-2xl" />
        <p className="font_family">Menu</p>
      </div>
      <h1 className="font-bold text-[#212121] text-sm underline m-4">
        Bonjour Directeur/Directrice
      </h1>
      <section className="w-[270px] h-[380px] bg-[#FCBFBF] flex flex-col items-center justify-center rounded-[10px] drop-shadow-[0_2px_3px_#212121] md:w-[480px] lg:w-[600px]">
        <ul className="text-[#212121] font-bold flex flex-col text-center gap-10 text-sm">
          <Link href={"/User"}>Utilisateurs</Link>
          <Link href={"/Admin/Car"}>Voitures</Link>
          <Link href={"/Reservation"}>R&eacute;servations</Link>
        </ul>
      </section>
      <Footer />
      {roleLS === "93a121fb-c77f-4352-93bc-90b0e3bd80b5" ? (
        <Admin_Modal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      ) : roleLS === "7c6862a7-82f9-4254-adab-9c4dd826c2b2" ? (
        <User_Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      ) : (
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Page;
