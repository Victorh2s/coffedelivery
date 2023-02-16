import styled from 'styled-components';

export const CoffeCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  height: 104px;
  border-bottom: 1px solid ${(props) => props.theme.Base['base-button']};

  .infos-coffe {
    display: flex;
    align-items: flex-start;

    img {
      width: 64px;
      height: 64px;
      margin-right: 0.6rem;
    }
    .title-buttons {
      span {
        font-family: ${(props) => props.theme.font.family.header};
        font-size: 1rem;
        color: ${(props) => props.theme.Base['base-subtitle']};
        line-height: 130%;
        font-weight: 500;
      }
      .buttons {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem;

        .amount-coffe {
          width: 72px;
          height: 32px;
          background: ${(props) => props.theme.Base['base-button']};
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          span {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 32px;
            color: ${(props) => props.theme.Base['base-title']};
            font-family: ${(props) => props.theme.font.family.header};
          }

          button {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            height: 32px;
            border: none;
            cursor: pointer;
            background: transparent;
            color: ${(props) => props.theme.Produto.purple};
          }
        }

        .button-remove {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 32px;
          border: none;
          border-radius: 5px;
          background: transparent;
          color: ${(props) => props.theme.Base['base-text']};
          background: ${(props) => props.theme.Base['base-button']};
          padding: 6.5px 8px;
          font-size: 12px;
          font-family: ${(props) => props.theme.font.family.header};
          cursor: pointer;

          svg {
            margin-right: 0.25rem;
            color: ${(props) => props.theme.Produto.purple};
          }
        }
      }
    }
  }

  .price-coffe {
    font-family: ${(props) => props.theme.font.family.header};
    font-weight: bold;
    font-size: 0.9rem;
  }
`;
