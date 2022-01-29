import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [empData, setEmpData] = useState({});

  async function fetchEmpData() {
    axios.get("http://localhost:8080/emp3").then((response) => {
      //alert(response.data);
      setEmpData(response.data);
    });
  }
  useEffect(fetchEmpData);
  return (
    <div>
      <div>Hello Every one</div>
      <p>
        <h1>empno : {empData.id}</h1> <br />
        name : {empData.name} <br />
        salary : {empData.salary} <br />
      </p>
    </div>
  );
}
