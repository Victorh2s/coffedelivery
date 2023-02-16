import { InfoProject, Wrapper, Background } from './style';
import CoffeBanner from '../../assets/CoffeBanner.svg';
import { ShoppingCartSimple, Package, Timer, Coffee } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { CoffeCard } from '../../components/CoffeCard';
import { useCartCoffe } from '../../Context/CoffeContext';

export function Home() {
  const { coffes } = useCartCoffe();

  return (
    <Background>
      <InfoProject>
        <header className="text-info">
          <div className="title">Encontre o café perfeito</div>
          <div className="title">para qualquer hora do dia</div>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a <br />
            qualquer hora
          </p>

          <section>
            <div className="container">
              <div className="box box-1">
                <div>
                  <ShoppingCartSimple size={16} weight="fill" />
                </div>
                <span>Compra simples e segura</span>
              </div>

              <div className="box box-2">
                <div>
                  <Package size={16} weight="fill" />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </div>
            </div>

            <div className="container">
              <div className="box box-3">
                <div>
                  <Timer size={16} weight="fill" />
                </div>
                <span>Entrega rápida e rastreada</span>
              </div>

              <div className="box box-4">
                <div>
                  <Coffee size={16} weight="fill" />
                </div>
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </section>
        </header>
        <div className="img-info">
          <img src={CoffeBanner} alt="" />
        </div>
      </InfoProject>
      <Wrapper>
        <main>
          <h1>Nossos cafés</h1>
          <div className="grid-coffes">
            {coffes.map((info) => (
              <CoffeCard
                key={info.id}
                id={info.id}
                coffeName={info.nameCoffe}
                coffeDescription={info.descriptionCoffe}
                imgUrl={info.imgUrl}
                price={info.price}
                tags={info.tags}
              />
            ))}
          </div>
        </main>
      </Wrapper>
    </Background>
  );
}
