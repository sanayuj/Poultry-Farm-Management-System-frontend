import axios from "axios";

const userInstance = axios.create({
  baseURL:"http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

const adminInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/admin`,
});

export { userInstance, adminInstance };
