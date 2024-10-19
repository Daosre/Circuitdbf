import axios from "axios";
import { toast } from "react-toastify";

//All User
export async function getAllUser() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/user/all`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
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

//Delete User
export async function deleteUser(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/delete/user/${id}`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
    },
  };
  return axios
    .delete(url, axiosConfig)
    .then((res) => {
      toast.success(res.data.message, {
        position: "top-center",
      });
      return res;
    })

    .catch((e) => {
      toast.error(e.response.data.message, {
        position: "top-right",
      });
      return e;
    });
}

//Delete Reservation
export async function deleteReservation(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}reservation/delete/${id}`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
    },
  };
  return axios
    .delete(url, axiosConfig)
    .then((res) => {
      toast.success(res.data.message, {
        position: "top-center",
      });
      return res;
    })

    .catch((e) => {
      toast.error(e.response.data.message, {
        position: "top-right",
      });
      return e;
    });
}