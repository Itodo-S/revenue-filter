import axios from "axios";

const BASE_URL = "https://fe-task-api.mainstack.io";

export const fetchUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user`);
    console.log(response, "this response is from user");
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return [];
  }
};
