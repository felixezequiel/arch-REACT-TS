import { Moment } from 'moment';

export interface City {
  cep: number;
  name: string;
}

export interface Address {
  street: string;
  number: number;
  city: City;
}

export type Agency = number;
export type AccountNumber = number;

export interface Bank {
  agency: Agency;
  name: string;
  address: Address;
}

export interface Balance {
  balanceDate: Moment;
  balance: number;
}

export type ConsumerIdentifier = number;

export interface AccountConsumer {
  consumerId: ConsumerIdentifier;
  name: string;
  login: string;
  password: string;
  balance: Balance;
}

export interface ConsumerBank {
  agency: Agency;
  accountNumber: AccountNumber;
  account: AccountConsumer;
}

export interface Consumer extends AccountConsumer, ConsumerBank {}

export interface ResponsesToTransactions {
  newBalance: Balance;
  success: boolean;
}

export type InputType = 'LANCAMENTO' | 'ESTORNO' | 'TRANSFERENCIA';

export interface Input {
  value: number;
  date: Moment;
  uuid: string;
  type: InputType;
}

export type Payment =
  | 'CREDIT_CARD'
  | 'DEBIT_CARD'
  | 'CHECK'
  | 'TICKET'
  | 'MONEY';
