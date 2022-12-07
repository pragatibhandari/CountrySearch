import React from "react";
import { useParams } from "react-router-dom";
import useCountry from "../../../custom-hooks/useCountry";
import { Link } from "react-router-dom";
import "./style.css";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function CountryPage() {
  const { name } = useParams();
  const [country, error] = useCountry(name);

  if (error) {
    return <p>Something went Wrong.</p>;
  }
  if (!country) {
    return <p>loading...</p>;
  }

  return (
    <div className="container1">
      <div className="countryContainer">
        <h1 key={country.name.common}>{country.name.common}</h1>
        <img className="img" alt="flag" src={country.flags.png}></img>
        <table>
          <tbody>
            <tr>
              <th className="title" key={"key1"}>
                Capital
              </th>
              <th key={"key2"}>
                {country.capital
                  ? country.capital.map((capitalName) => (
                      <span key={capitalName}> {capitalName} </span>
                    ))
                  : "N/A"}
              </th>
            </tr>
            <tr>
              <th className="title" key={"key3"}>
                Population
              </th>
              <th key={country.population}>
                {" "}
                {country.population.toLocaleString()}
              </th>
            </tr>
            <tr>
              <th className="title" key={"key3"}>
                Region{" "}
              </th>
              <th key={"key4"}>{country.region}</th>
            </tr>
            <tr>
              <th className="title" key={"key4"}>
                Languages
              </th>
              <th>
                {country.languages
                  ? Object.values(country.languages).map((value) => (
                      <p key={value}>{value} </p>
                    ))
                  : "N/A"}
              </th>
            </tr>
          </tbody>
        </table>

        <div className="button">
          <Link to="/">
            <Button variant="contained" startIcon={<ArrowBackIosNewIcon />}>
              GO Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
