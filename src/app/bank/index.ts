import {
  Agency,
  Bank,
  Consumer,
  ConsumerIdentifier,
  Input,
  Payment,
  ResponsesToTransactions,
} from './types';

export interface DTO {
  banks: Map<Agency, Bank>;

  consumers: Map<ConsumerIdentifier, Consumer>;

  inputs: Map<ConsumerIdentifier, Map<string, Input>>;
}

export interface BankManager {
  add(bank: Bank): Promise<boolean>;

  delete(agency: Agency): Promise<boolean>;

  get(agency: Agency): Promise<Bank>;

  update(bank: Bank): Promise<boolean>;
}

export interface ConsumerManager {
  add(consumer: Consumer): Promise<boolean>;

  delete(consumerId: ConsumerIdentifier): Promise<boolean>;

  get(consumerId: ConsumerIdentifier): Promise<Consumer>;

  update(consumer: Consumer): Promise<boolean>;
}

export interface ServicesBank {
  transfer(
    value: number,
    targetConsumer: Consumer,
    bindConsumer: Consumer
  ): Promise<ResponsesToTransactions>;

  payment(
    value: number,
    type: Payment,
    targetConsumer: Consumer,
    bindConsumer: Consumer
  ): Promise<ResponsesToTransactions>;

  reversal(
    input: Input,
    targetConsumer: Consumer,
    bindConsumer: Consumer
  ): Promise<ResponsesToTransactions>;

  deposit(value: number, bindConsumer: Consumer): Promise<Input>;
}
