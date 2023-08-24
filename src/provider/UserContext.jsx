import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");

    const fetchUserData = async () => {
      if (token && userId) {
        setLoading(true);
        try {
          const { data } = await api.get(`/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userData = data;
          setUser(userData);
          navigate("/dashboard");
        } catch (error) {
          console.error(error);
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USERID");
          toast.error("Ops! Ocorreu um erro ao carregar os dados do usuário.");
          navigate("/");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleRegister = async (formData, reset) => {
    try {
      const { confirmPassword, ...requestData } = formData;
      await api.post("/users", requestData);

      toast.success("Cadastro realizado com sucesso!");
      reset();
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  const handleLogin = async (formData, reset) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      const { user, token } = data;
      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USERID", user.id);
      toast.success("Login realizado com sucesso!");
      reset();
      setUser(user);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Email ou senha incorretos.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleRegister,
        handleLogin,
        handleLogout,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
