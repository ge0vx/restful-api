import { CityI } from "./city.interface";

export interface CountryI{
    id: string;
    name: string;
    cities?: CityI[] | null;
}