import { axiosMock } from "./axiosInstance";

function getUsers() {
  return axiosMock.get("/user").then((res) => res.data);
}

function getUserByEmail(email) {
  if (!email || typeof email !== "string") return Promise.resolve(null);
  return axiosMock
    .get(`/user?email=${encodeURIComponent(email.trim())}`)
    .then((res) => (Array.isArray(res.data) && res.data.length > 0 ? res.data[0] : null))
    .catch((err) => {
      // MockAPI returns HTTP 404 if no item matches filter
      if (err.response && err.response.status === 404) {
        return null;
      }
      throw err;
    });
}

function getUserByName(nama) {
  if (!nama || typeof nama !== "string") return Promise.resolve([]);
  return axiosMock
    .get(`/user?nama=${encodeURIComponent(nama.trim())}`)
    .then((res) => (Array.isArray(res.data) ? res.data : []))
    .catch((err) => {
      if (err.response && err.response.status === 404) {
        return [];
      }
      throw err;
    });
}

function createUser(user) {
  return axiosMock.post("/user", user).then((res) => res.data);
}

function updateUser(id, updatedData) {
  return axiosMock.put(`/user/${id}`, updatedData).then((res) => res.data);
}

export { getUsers, getUserByEmail, getUserByName, createUser, updateUser };
