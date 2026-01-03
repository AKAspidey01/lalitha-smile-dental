export const BASE_URL = "https://snow-marten-634214.hostingersite.com/dental-backend/public/api/"; // update your backend URL

export const postRequest = async (endpoint, payload) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("data ==> " , data)

    if (!response.ok) {
      throw new Error(data?.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    throw error;
  }
};