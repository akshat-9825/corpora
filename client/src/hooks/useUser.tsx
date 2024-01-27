import { useQuery } from "react-query";
import { useCookies } from "react-cookie";
import axios from "axios";

interface User {
  email: string;
  username: string;
  password: string;
  createdAt: string;
  type: string;
}

interface ApiResponse {
  status: boolean;
  user?: User;
}

const useUser = () => {
  const [cookies] = useCookies(["token"]);

  const { data, isError, isLoading } = useQuery<ApiResponse, Error>(
    "user",
    async () => {
      if (!cookies.token) {
        return { status: false, user: {} };
      }

      try {
        const response = await axios.post(
          "http://localhost:5001/api",
          {},
          { withCredentials: true }
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
      }
    },
    {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      enabled: !!cookies.token,
    }
  );

  return {
    user: data?.user,
    isAuthenticated: data?.status,
    isError,
    isLoading,
  };
};

export default useUser;
