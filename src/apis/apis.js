const BASE_URL = "https://fe-task-api.mainstack.io";

export const fetchUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/user`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return [];
  }
};

export const fetchWallet = async () => {
  try {
    const response = await fetch(`${BASE_URL}/wallet`);
    if (!response.ok) {
      throw new Error(`Failed to fetch wallet: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching wallet:", error);
    return [];
  }
};
