import styled from 'styled-components';

export const Container = styled.div`
  padding: 0rem 10rem;
  margin-top: 70px;

  h2 {
    color: ${(props) => props.theme.Produto['yellow-dark']};
    font-family: ${(props) => props.theme.font.family.text};
    font-size: 2rem;
    font-weight: bold;
  }

  p {
    color: ${(props) => props.theme.Base['base-title']};
    font-family: ${(props) => props.theme.font.family.header};
    font-size: 1.25rem;
  }

  .box {
    flex: 1;

    margin-top: 2.5rem;
    min-height: 300px;
    gap: 6.37rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    .left-side {
      height: 270px;
      padding: 2.5rem;
      border-top-right-radius: 50px;
      border-bottom-left-radius: 50px;
      border: 1px solid ${(props) => props.theme.Produto['purple-light']};
      flex: 1;

      .delivery-address,
      .delivery-forecast,
      .payment-type {
        display: flex;
        align-items: center;
      }
      > div + div {
        margin-top: 2rem;
      }

      .delivery-address {
        gap: 0.75rem;

        .svg-delivery-address {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50px;
          color: ${(props) => props.theme.Base.white};
          background: ${(props) => props.theme.Produto.purple};
        }

        .info-delivery-address {
          flex: 1;

          span {
            display: block;
            font-family: ${(props) => props.theme.font.family.header};
          }
        }
      }

      .delivery-forecast {
        gap: 0.75rem;

        .svg-delivery-forecast {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50px;
          color: ${(props) => props.theme.Base.white};
          background: ${(props) => props.theme.Produto.yellow};
        }

        .info-delivery-forecast {
          flex: 1;

          span,
          strong {
            display: block;
            font-family: ${(props) => props.theme.font.family.header};
          }
        }
      }

      .payment-type {
        gap: 0.75rem;

        .svg-payment-type {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50px;
          color: ${(props) => props.theme.Base.white};
          background: ${(props) => props.theme.Produto['yellow-dark']};
        }

        .info-payment-type {
          flex: 1;

          span,
          strong {
            display: block;
            font-family: ${(props) => props.theme.font.family.header};
          }
        }
      }
    }

    .right-side {
      flex: 1;
    }
  }
`;
