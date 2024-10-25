/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Footer from "@/Components/H.F/Footer";
import Header from "@/Components/H.F/Header";
import Admin_Modal from "@/Components/Modal/Admin_Modal";
import Modal from "@/Components/Modal/Modal";
import User_Modal from "@/Components/Modal/User_Modal";
import { deleteUser, getAllUser } from "@/Services/admin";
import { user_Props } from "@/Utils/user_type";
import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const page = () => {
  const [allUser, setAllUser] = useState<user_Props[]>();
  const [showModal, setShowModal] = useState(false);
  const Role = window.localStorage.getItem("Role");

  useEffect(() => {
    getAllUser().then((res) => {
      setAllUser(res.data);
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
      <section className="flex flex-col items-center mt-4">
        <ul className="flex justify-between w-[330px] border-2 border-[#212121] font-bold text-[#212121] md:w-[480px] lg:w-[600px] p-2">
          <li>Utilisateur</li>
          <li>Email</li>
          <li>IsActive</li>
        </ul>
        {allUser &&
          allUser.map((user) => {
            return (
              <div
                key={user.id}
                className="text-black flex text-[14px] justify-between w-[330px] bg-[#FCBFBF] md:w-[480px] md:text-[16px] lg:w-[600px] lg:text-[20px] p-2"
              >
                <p>{user.firstName}</p>
                <p>{user.email}</p>
                <p>{String(user.isActive)}</p>
                <MdDeleteOutline className="text-[20px]" onClick={() => {
                  deleteUser(user.id)
                }} />
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
