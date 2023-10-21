import axios from "axios";


export const sendEmail = async() => {
  await axios.post(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_BACKEND_PORT}/api/notificaciones`);
} 