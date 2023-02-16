import { Container } from './style';
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import successArt from '../../assets/Illustration.png';
import { useAddressContext } from '../../Context/AddressContext';

export function Success() {
  const { data } = useAddressContext();

  let typePayment;

  switch (data.paymentType) {
    case 'DEBIT_CARD':
      typePayment = 'Cartão de Débito';
      break;
    case 'CREDIT_CARD':
      typePayment = 'Cartão de Crédito';
      break;
    case 'MONEY':
      typePayment = 'Dinheiro';
      break;

    default:
      typePayment = 'Dinheiro';
      break;
  }

  return (
    <Container>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div className="box">
        <div className="left-side">
          <div className="delivery-address">
            <div className="svg-delivery-address">
              <MapPin size={18} weight="fill" />
            </div>
            <div className="info-delivery-address">
              {data ? (
                <span>
                  Entrega em <strong> {`${data.Road}, ${data.Number}`}</strong>
                </span>
              ) : (
                <span>
                  Entrega em <strong> Rua João Daniel Martinelli, 102</strong>
                </span>
              )}

              <span>Avenida Paulista - São Paulo, SP</span>
            </div>
          </div>
          <div className="delivery-forecast">
            <div className="svg-delivery-forecast">
              <Timer size={18} weight="fill" />
            </div>
            <div className="info-delivery-forecast">
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min </strong>
            </div>
          </div>
          <div className="payment-type">
            <div className="svg-payment-type">
              <CurrencyDollar size={18} weight="fill" />
            </div>
            <div className="info-payment-type">
              <span>Pagamento na entrega</span>
              <strong>{typePayment} </strong>
            </div>
          </div>
        </div>
        <div className="right-side">
          <img src={successArt} alt="Homem fazendo entrega" />
        </div>
      </div>
    </Container>
  );
}
