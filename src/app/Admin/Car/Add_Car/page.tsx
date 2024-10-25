/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import ErrorMsg from "@/Components/Error/Error";
import Footer from "@/Components/H.F/Footer";
import Header from "@/Components/H.F/Header";
import Admin_Modal from "@/Components/Modal/Admin_Modal";
import Modal from "@/Components/Modal/Modal";
import User_Modal from "@/Components/Modal/User_Modal";
import { addCar } from "@/Services/car";
import { carAdd_Props } from "@/Utils/car_type";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RxHamburgerMenu } from "react-icons/rx";
import { toast } from "react-toastify";

const page = () => {
  const [showModal, setShowModal] = useState(false);
  const { push } = useRouter();
  const Role = window.localStorage.getItem("Role");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<carAdd_Props>();
  const onSubmit: SubmitHandler<carAdd_Props> = (data) => {
    addCar(data)
      .then((res) => {
        if (res.status === 403) {
          toast.error(res.response.data.message);
        }
        if (res.status === 400) {
          toast.error(res.response.data.message);
        }
        if (res.status === 201) {
          toast.success("Crée avec succès");
        }
        setTimeout(() => {
          push("/");
        }, 1500);
      })
      .catch((e) => {});
  };

  return (
    <div className="flex flex-col items-center bg-[#FEF4F4]">
      <Header />
      <div
        className="w-full flex flex-row-reverse gap-2 mt-2 mr-2 font-bold cursor-pointer text-[#212121]"
        onClick={() => setShowModal(true)}
      >
        <RxHamburgerMenu className="text-2xl " />
        <p className="font_family">Menu</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#FCBFBF] text-bold text-[#212121] w-[350px] h-[600px] flex flex-col items-center gap-10 rounded-[10px] p-4 mt-5"
      >
        <label htmlFor="" className="flex flex-col gap-1">
          Nom :
          <input
            type="text"
            placeholder="Entrer le text ici..."
            className="rounded-[10px] p-1 text-[12px] w-[250px] h-[50px] text-center"
            {...register("name", { required: true })}
          />
          {errors.name && <ErrorMsg error={"Nom"} />}
        </label>
        <label htmlFor="Description" className=" flex flex-col gap-1">
          Description :
          <input
            type="text"
            placeholder="Entrer le texte ici..."
            className="rounded-[10px] p-1 text-[12px] w-[250px] h-[50px] text-center"
            {...register("description", { required: true })}
          />
          {errors.description && <ErrorMsg error={"Description"} />}
        </label>
        <input type="file" className="w-[300px]" />
        <button
          type="submit"
          className="bg-[#FD3131] drop-shadow-[0_2px_3px_#212121] p-2 text-[#F2F2F2] font-bold rounded-[10px] w-[200px] "
        >
          Ajouter
        </button>
      </form>
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
