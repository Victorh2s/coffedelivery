import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';
import { api } from '../services/axios';

interface CoffeCartProviderProps {
  children: ReactNode;
}
interface Stock {
  id: string;
  amount: number;
}

export interface UpdateProductAmount {
  productId: string;
  amount: number;
}

interface CoffeData {
  id: string;
  nameCoffe: string;
  descriptionCoffe: string;
  imgUrl: string;
  tags: [
    {
      id: string;
      nameTag: string;
    }
  ];
  price: number;
  amount: number;
}
export interface CoffeCart {
  id: string;
  nameCoffe: string;
  descriptionCoffe: string;
  imgUrl: string;
  tags: [
    {
      id: string;
      nameTag: string;
    }
  ];
  price: number;
  QuantityItems: number;
  amount: number;
}

interface CoffeCartContextData {
  coffeCart: CoffeCart[];
  coffes: CoffeData[];
  addProduct: ({ productId, amount }: UpdateProductAmount) => void;
  removeProduct: (productId: string) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CoffeCartContext = createContext<CoffeCartContextData>(
  {} as CoffeCartContextData
);

export function CoffeCartProvider({ children }: CoffeCartProviderProps) {
  const [coffeCart, setCoffeCart] = useState<CoffeCart[]>([]);
  const [coffes, setCoffes] = useState<CoffeData[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<CoffeData[]>('/api/coffes');
      setCoffes(response.data);
    }

    loadProducts();
  }, []);

  function addProduct({ productId, amount }: UpdateProductAmount) {
    const coffe = coffes.find((info) => info.id === productId);
    const CoffeExistInCart = coffeCart.find((info) => info.id === coffe.id);

    if (!CoffeExistInCart) {
      const newCoffe = {
        id: coffe.id,
        nameCoffe: coffe.nameCoffe,
        descriptionCoffe: coffe.descriptionCoffe,
        imgUrl: coffe.imgUrl,
        tags: coffe.tags,
        price: coffe.price * amount,
        QuantityItems: amount,
        amount: coffe.amount,
      };
      setCoffeCart((state) => [...state, newCoffe]);
    } else {
      const updateQuantityItems = coffeCart.map((info) => ({
        ...info,
        QuantityItems:
          info.id === productId && info.QuantityItems + amount <= info.amount
            ? info.QuantityItems + amount
            : info.QuantityItems,
      }));
      setCoffeCart(updateQuantityItems);
      localStorage.setItem('@CoffeDelivery:cart', JSON.stringify(coffeCart));
    }
  }
  console.log(coffeCart);

  function removeProduct(productId: string) {
    const CoffeExistInCart = coffeCart.filter((info) => info.id !== productId);
    setCoffeCart(CoffeExistInCart);
    localStorage.setItem('@CoffeDelivery:cart', JSON.stringify(coffeCart));
  }

  function updateProductAmount({ productId, amount }: UpdateProductAmount) {
    const updateQuantityItems = coffeCart.map((info) => ({
      ...info,
      QuantityItems:
        info.id === productId &&
        info.QuantityItems + amount <= info.amount &&
        info.QuantityItems + amount > 0
          ? info.QuantityItems + amount
          : info.QuantityItems,
    }));
    setCoffeCart(updateQuantityItems);
    localStorage.setItem('@CoffeDelivery:cart', JSON.stringify(coffeCart));
  }

  return (
    <CoffeCartContext.Provider
      value={{
        coffeCart,
        addProduct,
        removeProduct,
        updateProductAmount,
        coffes,
      }}
    >
      {children}
    </CoffeCartContext.Provider>
  );
}

export function useCartCoffe(): CoffeCartContextData {
  const context = useContext(CoffeCartContext);

  return context;
}
