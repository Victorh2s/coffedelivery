import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 0 10rem;

  .grid {
    display: grid;

    grid-template-columns: 1.7fr 1fr;
    gap: 2rem;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 4rem;
    flex: 1;

    .box-1 {
      min-height: 591px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;

      h3 {
        color: ${(props) => props.theme.Base['base-subtitle']};
        font-family: ${(props) => props.theme.font.family.text};
        font-size: 1.12rem;
      }
      .form-data {
        height: 372px;
        padding: 2.5rem;
        background: ${(props) => props.theme.Base['base-card']};
        border-radius: 5px;

        .title-form-data {
          font-family: ${(props) => props.theme.font.family.header};
          color: ${(props) => props.theme.Base['base-text']};

          h4 {
            font-size: 1rem;
          }
          span {
            font-size: 0.875rem;
          }

          flex: 1;
          display: flex;
          height: 44px;
          gap: 0.687rem;
          svg {
            color: ${(props) => props.theme.Produto['yellow-dark']};
          }
        }
        .form-inputs {
          margin-top: 2rem;

          input {
            display: block;
            height: 42px;
            padding: 0.75rem;
            background: ${(props) => props.theme.Base['base-input']};
            border: none;
            border-radius: 5px;
          }

          > input + input {
            margin-top: 1rem;
          }
          .inpt-Road {
            width: 100%;
          }

          .colections-inpt1 {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
            width: 100%;

            .inpt-comp {
              width: 100%;
            }
          }

          .colections-inpt2 {
            width: 100%;
            display: flex;
            gap: 1rem;
            margin-top: 1rem;

            .inpt-City {
              width: 100%;
            }

            .inpt-Uf {
              width: 60px;
            }
          }
        }
      }
      .form-pay {
        height: 207px;
        padding: 2.5rem;
        background: ${(props) => props.theme.Base['base-card']};
        border-radius: 5px;

        .title-form-pay {
          flex: 1;
          display: flex;
          height: 44px;
          gap: 0.687rem;
          font-family: ${(props) => props.theme.font.family.header};
          color: ${(props) => props.theme.Base['base-text']};

          h4 {
            font-size: 1rem;
          }
          span {
            font-size: 0.875rem;
          }

          svg {
            color: ${(props) => props.theme.Produto.purple};
          }
        }

        .payment-methods {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-top: 2rem;

          .SelectContainer {
            position: relative;
            width: 100%;
            input {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              cursor: pointer;
              opacity: 0;
              :hover + div {
                background: ${(props) => props.theme.Produto['purple-light']};
                color: ${(props) => props.theme.Base['base-subtitle']};
              }
              :checked + div {
                background: ${(props) => props.theme.Produto['purple-light']};
                border-color: ${(props) => props.theme.Produto.purple};
              }
            }

            .SelectContent {
              width: 100%;
              display: flex;
              align-items: center;
              gap: 0.75rem;
              padding: 1rem;
              background: ${(props) => props.theme.Base['base-button']};
              border-radius: 6px;
              text-transform: uppercase;
              border: 1px solid transparent;
              transition: 0.3s;

              span {
                font-family: ${(props) => props.theme.font.family.header};
                color: ${(props) => props.theme.Base['base-text']};
                font-size: 0.7rem;
              }

              svg {
                color: ${(props) => props.theme.Produto.purple};
              }
            }
          }
        }
      }
    }

    .box-2 {
      height: 498px;

      h3 {
        color: ${(props) => props.theme.Base['base-subtitle']};
        font-family: ${(props) => props.theme.font.family.text};
        font-size: 1.12rem;
      }

      .container-box2 {
        min-height: 498px;
        padding: 2.5rem;
        background: ${(props) => props.theme.Base['base-card']};
        margin-top: 0.937rem;
        width: 100%;
        border-radius: 5px;

        div + div {
          margin-top: 24px;
        }

        .values {
          flex: 1;
          height: 92px;
          margin-top: 12px;

          div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: ${(props) => props.theme.font.family.header};
            font-size: 1rem;

            strong {
              font-size: 1.5rem;
              font-weight: bold;
            }
          }

          div + div {
            margin-top: 13.5px;
          }
        }
        .div-btn-submit {
          flex: 1;
          margin-top: 36px;
          button {
            width: 100%;
            background: ${(props) => props.theme.Produto.yellow};
            font-family: ${(props) => props.theme.font.family.text};
            border: none;
            padding: 12px 0;
            color: ${(props) => props.theme.Base.white};
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            border-radius: 4px;
          }
        }
      }
    }
  }
`;

export const ContainerWithoutCart = styled.div`
  width: 100vw;
  height: calc(90vh - 104px);
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: ${(props) => props.theme.font.family.text};
    color: ${(props) => props.theme.Produto.gray};
  }
`;
