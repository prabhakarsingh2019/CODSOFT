export const signup = async (userData) => {
  try {
    const response = await fetch("/api/auth/sign-up", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(data.message || "Login failed");
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const login = async (userdata) => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(userdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(data.message || "Login failed");
    }
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    throw error;
  }
};
