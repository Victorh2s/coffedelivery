import { Container, ContainerWithoutCart } from './style';
import {
  MapPinLine,
  CurrencyDollar,
  Bank,
  Money,
  CreditCard,
} from 'phosphor-react';
import { useCartCoffe } from '../../Context/CoffeContext';
import { CoffeCardCheckout } from '../../components/CoffeCardCheckout';
import { formatPrice } from '../../utils/format';
import { useForm } from 'react-hook-form';
import { DataAddress, useAddressContext } from '../../Context/AddressContext';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    ZipCode: yup.string().required(),
    Road: yup.string().required(),
    Number: yup.number().required(),
    Complement: yup.string(),
    Neighborhood: yup.string().required(),
    City: yup.string().required(),
    Uf: yup.string().required(),
    paymentType: yup.string().required(),
  })
  .required();

export function Checkout() {
  const { coffeCart, removeProduct, updateProductAmount } = useCartCoffe();
  const { setDataFunction } = useAddressContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const totalItens = coffeCart.reduce((total, acc) => {
    return (total += acc.QuantityItems * acc.price);
  }, 0);

  const frete = 3.5;
  const value = formatPrice(totalItens);
  const totalValue = formatPrice(totalItens + frete);

  if (coffeCart.length === 0) {
    return (
      <ContainerWithoutCart>
        <h1>O carrinho está vázio :/ </h1>
      </ContainerWithoutCart>
    );
  }

  function onSubmit(data: DataAddress) {
    const dataForm = {
      ZipCode: data.ZipCode,
      Road: data.Road,
      Number: data.Number,
      Complement: data.Complement,
      Neighborhood: data.Neighborhood,
      City: data.City,
      Uf: data.City,
      paymentType: data.paymentType,
      Products: coffeCart,
      Freight: frete,
      TotalValue: totalValue,
    };
    setDataFunction(dataForm);
    console.log(dataForm);
    navigate('/success');
  }

  return (
    <Container>
      <div>
        <form className="grid" onSubmit={handleSubmit(onSubmit)}>
          <div className="box box-1">
            <h3>Complete seu pedido</h3>
            <div className="form-data">
              <div className="title-form-data">
                <MapPinLine size={22} />
                <div>
                  <h4>Endereço de Entrega</h4>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </div>
              <div className="form-inputs">
                <input
                  type="text"
                  placeholder="Cep"
                  className="inpt-ZipCode"
                  name="ZipCode"
                  {...register('ZipCode')}
                />

                <input
                  type="text"
                  placeholder="Rua"
                  className="inpt-Road"
                  name="Road"
                  {...register('Road')}
                />
                <div className="colections-inpt1">
                  <input
                    type="tel"
                    placeholder="Número"
                    className="inpt-Number"
                    name="Number"
                    {...register('Number')}
                  />
                  <input
                    type="text"
                    placeholder="Complemento"
                    className="inpt-comp"
                    name="Complement"
                    {...register('Complement')}
                  />
                </div>

                <div className="colections-inpt2">
                  <input
                    type="text"
                    placeholder="Bairro"
                    className="inpt-Neighborhood"
                    name="Neighborhood"
                    {...register('Neighborhood')}
                  />
                  <input
                    type="text"
                    placeholder="Cidade"
                    className="inpt-City"
                    name="City"
                    {...register('City')}
                  />
                  <input
                    type="text"
                    placeholder="Uf"
                    className="inpt-Uf"
                    name="Uf"
                    {...register('Uf')}
                  />
                </div>
              </div>
            </div>
            <div className="form-pay">
              <div className="title-form-pay">
                <CurrencyDollar size={22} />
                <div>
                  <h4>Pagamento</h4>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </div>

              <div className="payment-methods">
                <div className="SelectContainer">
                  <input
                    type="radio"
                    name="paymentType"
                    value="CREDIT_CARD"
                    required
                    {...register('paymentType')}
                  />

                  <div className="SelectContent">
                    <CreditCard size={16} />
                    <span>CARTÃO DE CRÉDITO</span>
                  </div>
                </div>
                <div className="SelectContainer">
                  <input
                    type="radio"
                    name="paymentType"
                    value="DEBIT_CARD"
                    required
                    {...register('paymentType')}
                  />
                  <div className="SelectContent">
                    <Bank size={16} />
                    <span>CARTÃO DE DÉBITO</span>
                  </div>
                </div>

                <div className="SelectContainer">
                  <input
                    type="radio"
                    name="paymentType"
                    value="MONEY"
                    required
                    {...register('paymentType')}
                  />
                  <div className="SelectContent">
                    <Money size={16} />
                    <span>DINHEIRO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box box-2">
            <h3>Cafés selecionados</h3>
            <main className="container-box2">
              {coffeCart.map((info) => (
                <CoffeCardCheckout
                  key={info.id}
                  id={info.id}
                  imgUrl={info.imgUrl}
                  title={info.nameCoffe}
                  price={info.price}
                  QuantityItems={info.QuantityItems}
                  removeProduct={removeProduct}
                  updateProductAmount={updateProductAmount}
                />
              ))}

              <div className="values">
                <div>
                  <span>Total de itens</span>
                  <span>{value}</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>{formatPrice(frete)}</span>
                </div>
                <div>
                  <strong>Total</strong>
                  <strong>{totalValue}</strong>
                </div>
              </div>

              <div className="div-btn-submit">
                <button className="btn-submit" type="submit">
                  CONFIRMAR PEDIDO
                </button>
              </div>
            </main>
          </div>
        </form>
      </div>
    </Container>
  );
}
