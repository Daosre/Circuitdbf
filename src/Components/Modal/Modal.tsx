"use client";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import "../../app/style.css";

const Modal = ({ isVisible, onClose }: { isVisible: any; onClose: any }) => {
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
      <div className="bg-[#FCBFBF] w-48 h-full flex flex-col text-center justify-center items-center">
        <IoClose
          className="text-3xl text-black fixed right-4 top-4"
          onClick={() => onClose()}
        />
        <ul className=" flex flex-col text-center gap-5 text-[#212121] font-bold text-[16px] font_family">
          <Link href={"/Accueil"}>Accueil</Link>
          <Link href={"/SignUp"}>Inscription</Link>
          <Link href={"/Selection"}>Nos Voitures</Link>
          <Link href={"/Contact"}>Contactez-Nous</Link>
          <Link href={"/SignIn"}>Connexion</Link>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
