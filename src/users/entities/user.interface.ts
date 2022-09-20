import { AddressI } from './address.interface';

export interface UserI {
  id: string;
  username: string;
  password: string;
  address?: AddressI | null;
}

interface AddressResponse {
  street: string;
  city: string;
  country: string;
}

export interface UserResponse {
  id: string;
  name: string;
  address: AddressResponse;
}
