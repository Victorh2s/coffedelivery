import styled from 'styled-components';

export const Container = styled.div`
  height: 19.375rem;
  background: ${(props) => props.theme.Base['base-card']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem 1.5rem;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;

  .info-card {
    text-align: center;

    img {
      margin-top: -1.5rem;
      width: 120px;
      height: 120px;
    }

    .coffe-tags {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin: 1rem 0 1.25rem;
      span {
        font-family: ${(props) => props.theme.font.family.header};
        font-size: 0.625rem;
        color: ${(props) => props.theme.Produto['yellow-dark']};
        background: ${(props) => props.theme.Produto['yellow-light']};
        padding: 0.25rem 0.5rem;
        font-weight: 700;
        line-height: 13px;
        border-radius: 15px;
      }
    }
    h3 {
      font-family: ${(props) => props.theme.font.family.text};
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 26px;
      color: ${(props) => props.theme.Base['base-subtitle']};
    }
    span {
      color: ${(props) => props.theme.Base['base-label']};
      font-family: ${(props) => props.theme.font.family.header};
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 18.2px;
    }
  }

  .cart-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    div {
      font-family: ${(props) => props.theme.font.family.header};
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 18.2px;
    }
    .price-info {
      font-family: ${(props) => props.theme.font.family.text};
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 31.2px;
      max-width: 67px;
    }
    .container-btn {
      display: flex;
      gap: 0.5rem;

      .amount-coffe {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.5rem;
        height: 2.37rem;
        border-radius: 8px;
        background: ${(props) => props.theme.Base['base-button']};

        span {
          flex: 1;
          text-align: center;
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          height: 2.37rem;
          border: none;
          cursor: pointer;
          background: transparent;
          color: ${(props) => props.theme.Produto.purple};
          transition: all 0.1s ease-in-out;
          &:hover {
            filter: brightness(80%);
          }
        }
      }

      button {
        background: ${(props) => props.theme.Produto['purple-dark']};
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.375rem;
        height: 2.375rem;
        border: none;
        cursor: pointer;
        border-radius: 8px;
        color: ${(props) => props.theme.Base['base-card']};
      }
    }
  }
`;
