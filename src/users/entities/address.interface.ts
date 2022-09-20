import { CityI } from "./city.interface";

export interface AddressI{
    id: string;
    street: string;
    city?: CityI;
}