import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';
import { useCartCoffe } from '../../Context/CoffeContext';
import { Container } from './style';
import { useState } from 'react';

interface CoffeCardProps {
  id: string;
  imgUrl: string;
  tags: [
    {
      id: string;
      nameTag: string;
    }
  ];
  coffeName: string;
  coffeDescription: string;
  price: number;
}

export function CoffeCard({
  id,
  coffeDescription,
  coffeName,
  imgUrl,
  price,
  tags,
}: CoffeCardProps) {
  const [amount, setAmount] = useState(1);
  const { coffes, addProduct } = useCartCoffe();

  const formatPrice = price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

  function incrementCoffe(productId: string, amount: number) {
    const stock = coffes.find((info) => info.id === productId);
    if (amount >= stock.amount) {
      return setAmount(stock.amount);
    }
    setAmount((state) => state + 1);
  }

  function decrementCoffe() {
    setAmount((state) => (state === 1 ? 1 : state - 1));
  }

  function addProductInCart(productId: string, amount: number) {
    addProduct({ productId, amount });
  }

  return (
    <Container>
      <div className="info-card">
        <img src={imgUrl} alt="coffe" />
        <div className="coffe-tags">
          {tags.map((tag) => (
            <span key={tag.id}>{tag.nameTag}</span>
          ))}
        </div>
        <h3>{coffeName}</h3>
        <span>{coffeDescription}</span>
      </div>
      <div className="cart-info">
        <div>
          R$ <strong className="price-info">{formatPrice}</strong>
        </div>
        <div className="container-btn">
          <div className="amount-coffe">
            <button onClick={() => decrementCoffe()}>
              <Minus size={16} weight="bold" />
            </button>
            <span>{amount}</span>
            <button onClick={() => incrementCoffe(id, amount)}>
              <Plus size={16} weight="bold" />
            </button>
          </div>
          <button onClick={() => addProductInCart(id, amount)}>
            <ShoppingCartSimple size={16} weight="fill" />
          </button>
        </div>
      </div>
    </Container>
  );
}
