import { Link } from "react-router";
import type { Route } from "./+types/countriesList";
import Lists from "~/components/Lists";
import React from "react";
import { Divider } from "@mui/material";

interface Country {
  name: {
    common: string;
  };
  population: number;
  region: string;
  flags: {
    svg: string;
  };
}

export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

export default function CountriesList({ loaderData }: Route.ComponentProps) {
  if (!loaderData) return;

  return (
    <>
      <div className="px-2">
        <h2 className="text-3xl font-bold"> Countries </h2>
      </div>

      <ul>
        {loaderData.map((country: Country, key: number) => (
          <React.Fragment key={key}>
            <Link to={`/countries/${country.name.common}`}>
              <Lists
                countryName={country.name.common}
                flag={country.flags.svg}
              />
            </Link>
            <div className="px-8">
              Region: {country.region} | Population: {country.population}
            </div>
            <Divider />
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}
