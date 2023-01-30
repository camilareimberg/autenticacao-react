import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";

function AdminPage() {
  const [tripDetail, setTripDetail] = useState({}); //use este estado para guardar as informações da requisição.
  const { id } = useParams(); //use este hook do houter para conseguir fazer a requisição através do id

  return (
    <AdminContainer>
      <h1>Administração: Detalhes da Viagem</h1>
      <hr />
      {id !== "undefined" ? (
        <BoxDetail>
          <h3>{tripDetail.name}</h3>
          <p>{tripDetail.description}</p>
          <p>
            <b>Duração em dias: </b>
            {tripDetail.durationInDays}
          </p>
          <p>
            <b>Data: </b>
            {tripDetail.date}
          </p>
          <p>
            <b>Planeta: </b>
            {tripDetail.planet}
          </p>
        </BoxDetail>
      ) : (
        <h2>Escolha uma das viagens disponiveis </h2>
      )}
    </AdminContainer>
  );
}

export default AdminPage;
const AdminContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
const BoxDetail = styled.main`
  margin: 10px;
  border: 2px solid blueviolet;
  width: 50vw;
  background-color: white;
  padding: 0 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
