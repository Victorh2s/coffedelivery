import { createContext, ReactNode, useContext, useState } from 'react';
import { CoffeCart } from './CoffeContext';

interface AddresContextDataProps {
  children: ReactNode;
}

export interface DataAddress {
  ZipCode: string;
  Road: string;
  Number: number;
  Complement: string;
  Neighborhood: string;
  City: string;
  Uf: string;
  paymentType: string;
  Products: CoffeCart[];
  Freight: number;
  TotalValue: string;
}

interface AddressContextData {
  data: DataAddress;
  setDataFunction: (data: DataAddress) => void;
}

const AddressContext = createContext<AddressContextData>(
  {} as AddressContextData
);

export function AddresProvider({ children }: AddresContextDataProps) {
  const [data, setData] = useState<DataAddress>();

  function setDataFunction(data: DataAddress) {
    setData(data);
  }

  return (
    <AddressContext.Provider
      value={{
        data,
        setDataFunction,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export function useAddressContext(): AddressContextData {
  const context = useContext(AddressContext);

  return context;
}
