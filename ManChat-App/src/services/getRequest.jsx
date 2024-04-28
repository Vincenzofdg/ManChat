import api from "./api";

export const getAllUsers = async () => {
  try {
    const { data } = await api.get('/users');
    return data
  } catch (error) {
    throw new Error(error);
  }
};
