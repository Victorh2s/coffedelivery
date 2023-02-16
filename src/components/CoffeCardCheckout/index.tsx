import { Minus, Plus, Trash } from 'phosphor-react';
import { UpdateProductAmount } from '../../Context/CoffeContext';
import { formatPrice } from '../../utils/format';
import { CoffeCard } from './style';

interface CoffeCardCheckoutProps {
  id: string;
  imgUrl: string;
  title: string;
  price: number;
  QuantityItems: number;
  removeProduct: (productId: string) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

export function CoffeCardCheckout({
  id,
  imgUrl,
  title,
  price,
  QuantityItems,
  removeProduct,
  updateProductAmount,
}: CoffeCardCheckoutProps) {
  function removeCoffeCart(id: string) {
    removeProduct(id);
  }
  function incrementCoffe(id: string, amount: number) {
    updateProductAmount({ productId: id, amount });
  }
  function decrementCoffe(id: string, amount: number) {
    updateProductAmount({ productId: id, amount });
  }

  return (
    <CoffeCard>
      <div className="infos-coffe">
        <img src={imgUrl} alt="coffe" />

        <div className="title-buttons">
          <span>{title}</span>
          <div className="buttons">
            <div className="amount-coffe">
              <button onClick={() => decrementCoffe(id, -1)} type="button">
                <Minus size={16} weight="bold" />
              </button>
              <span>{QuantityItems}</span>
              <button onClick={() => incrementCoffe(id, 1)} type="button">
                <Plus size={16} weight="bold" />
              </button>
            </div>
            <button
              type="button"
              className="button-remove"
              onClick={() => removeCoffeCart(id)}
            >
              <Trash size={16} />
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <strong className="price-coffe">
        {formatPrice(price * QuantityItems)}
      </strong>
    </CoffeCard>
  );
}
