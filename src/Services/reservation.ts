import axios from "axios";
import { toast } from "react-toastify";
import { reservationAdd_Props } from "../Utils/reservation_type";

//Add Reservation
export async function addReservation(reservation: reservationAdd_Props) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}reservation/new`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(
      url,
      {
        name: reservation.name,
        tours: reservation.tours,
        cardId:reservation.cardId,
        reservationDate: reservation.reservationDate
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      toast.error(e.response.data.message, {
        position: "top-right",
      });
      return e;
    });
}

//All Reservation
export async function getAllReservation() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}reservation/all`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      toast.error(e.response.data.message, {
        position: "top-right",
      });
      return e;
    });
}