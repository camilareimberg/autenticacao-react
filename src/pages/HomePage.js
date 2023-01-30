import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "../components/Card";

function HomePage() {
  const [trips, setTrips] = useState([]);

  const getTrips = () => {
    const aluno = "darvas"; //coloque aqui o nome que você criou no começo da aula
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`
      )
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTrips();
  }, []);

  const allTrips =
    trips &&
    trips.map((trip) => {
      return <Card key={trip.id} trip={trip} />;
    });
  return <TripsContainer>{allTrips}</TripsContainer>;
}

export default HomePage;

const TripsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url("https://img.freepik.com/fotos-premium/fundo-do-espaco-caotico-planetas-estrelas-e-galaxias-no-espaco-sideral-mostrando-a-beleza-da-exploracao-espacial_372999-412.jpg?w=2000");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 90vh;
`;
