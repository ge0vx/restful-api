import { AddressI } from "./address.interface";
import { CountryI } from "./country.interface";

export interface CityI{
    id: string;
    name: string;
    country?: CountryI;
    addresses?: AddressI[] | null;
}