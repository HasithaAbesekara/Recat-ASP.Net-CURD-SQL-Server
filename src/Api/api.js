const API_BASE_URL = "https://localhost:7245/api";

export const apiService = {
  async getAllUsers() {
    const response = await fetch(`${API_BASE_URL}/User`);
    const data = await response.json();
    return data.data; // Access the data property from ApiResponse
  },

  async getUserById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/User/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Get User Error:", error);
      throw error;
    }
  },

  async addUser(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/User`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        mode: "cors", // Add this
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  async updateUser(id, userData) {
    const response = await fetch(`${API_BASE_URL}/User/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  },

  async deleteUser(id) {
    const response = await fetch(`${API_BASE_URL}/User/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  },
};
