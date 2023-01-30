import { useNavigate } from "react-router-dom";
import { navigateToAdmin } from "../routes/coordinator";
import styled from "styled-components";

function Card({ trip }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <CardContainer onClick={() => navigateToAdmin(navigate, trip.id)}>
      <h3>{trip.name}</h3>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
  margin: 10px;
  border: 2px solid blueviolet;
  max-width: 25vw;
  min-height: 20vh;
  background-color: white;
  cursor: pointer;
  padding: 0 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  :hover {
    box-shadow: 10px 5px 5px blueviolet;
  }
`;
