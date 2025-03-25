import { Link } from "react-router";
import type { Route } from "./+types/countriesList";

interface Country {
  name: {
    common: string;
  };
  population: number;
  region: string;
}

export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

export default function CountriesList({ loaderData }: Route.ComponentProps) {
  if (!loaderData) return;

  return (
    <ul>
      {loaderData.map((country: Country, key: number) => (
        <>
          <Link key={key} to={`/countries/${country.name.common}`}>
            <li>{country.name.common}</li>
          </Link>
          <div>
            Region: {country.region} | Population: {country.population}
          </div>
        </>
      ))}
    </ul>
  );
}
