import { HeaderContainer } from './styles';
import Logo from '../../assets/Logo.svg';
import { MapPin } from 'phosphor-react';
import { ShoppingCartSimple } from 'phosphor-react';
import { useCartCoffe } from '../../Context/CoffeContext';
import { Link } from 'react-router-dom';

export function Header() {
  const { coffeCart } = useCartCoffe();

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <nav>
        <div>
          <MapPin size={20} weight="fill" />
          <span>São Paulo, SP</span>
        </div>

        <Link to="/checkout">
          <div>
            <div>
              <p>{coffeCart.length}</p>
            </div>
            <ShoppingCartSimple size={20} weight="fill" />
          </div>
        </Link>
      </nav>
    </HeaderContainer>
  );
}
