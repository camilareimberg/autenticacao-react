import axios from "axios";
import { useEffect } from "react";
import { useProtectPage } from "../hooks/useProtectPage";

export default function TripDetails() {
  // toda a página que tem proteção, traz o hook para ela, que é o useProtectPage que criamos
  useProtectPage();
  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/camilareimberg/trip/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlncEc3N25QZGV3cjRoN3NGbGIwIiwiZW1haWwiOiJjYW1pbGFAZ21haWwuY29tLmJyIiwiaWF0IjoxNjc1MDM2NjI1fQ.rLyDEk0_SAlm7YnBg-8Y2YvsUUeOtSpYOIp3ZRJ80o8",
        {
          header: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <h1>Trip Details</h1>;
}
