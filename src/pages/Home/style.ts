import styled from 'styled-components';
import BackgroudBanner from '../../assets/BackgroundBanner.svg';

export const Background = styled.div`
  background: ${(props) => props.theme.Base.background};
`;

export const Wrapper = styled.div`
  padding: 0rem 10rem;

  h1 {
    margin-bottom: 3.375rem;
    font-family: ${(props) => props.theme.font.family.header};
    font-weight: 800;
    font-size: 2rem;
    line-height: 41.6px;
  }

  .grid-coffes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14.5rem, 1fr));
    flex: 1;
    gap: 2.5rem 1rem;
  }
`;

export const InfoProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 34rem;
  background-image: url(${BackgroudBanner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0rem 10rem;

  .text-info,
  .img-info {
    flex: 1;
    height: 22.5rem;
  }

  .text-info {
    .title {
      font-family: ${(props) => props.theme.font.family.text};
      color: ${(props) => props.theme.Base['base-title']};
      font-size: 40px;
      line-height: 130%;
      font-weight: 800;
    }

    p {
      font-family: ${(props) => props.theme.font.family.header};
      line-height: 130%;
      color: ${(props) => props.theme.Base['base-subtitle']};
      font-weight: 500;
      font-size: 16px;
      margin-top: 1rem;
    }

    section {
      margin-top: 4.125rem;

      .container {
        display: flex;

        :last-child {
          margin-top: 1.25rem;
        }
        gap: 1rem;

        .box {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          min-height: 2rem;

          div {
            display: flex;
            align-items: center;
            justify-content: center;

            min-height: 2rem;
            width: 2rem;
            border-radius: 50px;
            color: ${(props) => props.theme.Base.white};
            svg {
            }
          }

          span {
            font-family: ${(props) => props.theme.font.family.header};
            font-size: 14px;
          }
        }

        .box-1 {
          flex: 0.7;
          div {
            background: ${(props) => props.theme.Produto['yellow-dark']};
          }
          span {
            flex: 1;
          }
        }
        .box-2 {
          flex: 1;
          div {
            background: ${(props) => props.theme.Base['base-text']};
          }
          span {
            flex: 1;
          }
        }

        .box-3 {
          flex: 0.7;
          div {
            background: ${(props) => props.theme.Produto['yellow']};
          }
          span {
            flex: 1;
          }
        }

        .box-4 {
          flex: 1;
          div {
            background: ${(props) => props.theme.Produto['purple']};
          }
          span {
            flex: 1;
          }
        }
      }
    }
  }

  .img-info {
    display: flex;
    justify-content: flex-end;

    img {
      flex: 1;
    }
  }
`;
