import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  padding: 2rem 10rem;

  img {
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 0.75rem;

    div {
      height: 2.37rem;
      display: flex;
      align-items: center;
      padding: 0.5rem;
      border-radius: 4px;
    }

    div:first-child {
      gap: 0.25rem;
      background: ${(props) => props.theme.Produto['purple-light']};

      span {
        font-family: ${(props) => props.theme.font.family.header};
        color: ${(props) => props.theme.Produto['purple-dark']};
        line-height: 130%;
        font-weight: 500;
      }

      svg {
        color: ${(props) => props.theme.Produto.purple};
      }
    }

    div:last-child {
      background: ${(props) => props.theme.Produto['yellow-light']};
      position: relative;
      div {
        position: absolute;
        width: 20px;
        height: 20px;
        padding: 12px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        right: 0;
        margin-right: -10px;
        margin-top: -10px;
        background: ${(props) => props.theme.Produto['yellow-dark']};

        p {
          font-family: ${(props) => props.theme.font.family.header};
          font-size: 0.75rem;
          font-weight: bold;
          color: ${(props) => props.theme.Base.white};
        }
      }
      svg {
        color: ${(props) => props.theme.Produto['yellow-dark']};
      }
    }
  }
`;
