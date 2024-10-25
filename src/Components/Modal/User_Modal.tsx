/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import "../../app/style.css";

const User_Modal = ({
  isVisible,
  onClose,
}: {
  isVisible: any;
  onClose: any;
}) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-end items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="bg-[#FCBFBF] w-48 h-full flex flex-col text-center justify-center items-center md:w-64 lg:w-80">
        <IoClose
          className="text-3xl text-black fixed right-4 top-4"
          onClick={() => onClose()}
        />
        <ul className=" flex flex-col text-center gap-5 text-[#212121] font-bold text-[16px] font_family md:gap-7 lg:gap-10">
          <Link href={"/Accueil"}>Accueil</Link>
          <Link href={"#"}>Mon compte</Link>
          <Link href={"#"}>Nos Voitures</Link>
          <Link href={"#"}>Contactez-Nous</Link>
          <Link href={"/Selection"}>Deconnexion</Link>
        </ul>
      </div>
    </div>
  );
};

export default User_Modal;
