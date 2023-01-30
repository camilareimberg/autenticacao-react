import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProtectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // proteção para a página. Se o token for falso continua na página inicial
    if (!token) {
      navigate("/");
    }
    // como é um array de dependência, coloca o navigate abaixo para ele sempre ir atualizando
  }, [navigate]);
};
