import { AddressI } from './address.interface';
import { UserI } from './user.interface';

export interface ProfileI {
  id: string;
  name: string;
  user?: UserI | null;
  address?: AddressI | null;
}

interface AddressResponse {
  street: string;
  city: string;
  country: string;
}

export interface ProfileResponse {
  id: string;
  name: string;
  address: AddressResponse;
}
