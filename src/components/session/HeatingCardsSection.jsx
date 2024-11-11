import React from 'react';
import Engine from '../../assets/Engine.png';
import Gears from '../../assets/Gears.png';
import { styled } from 'styled-components';

const HeatingCardsSection = () => {
  const arrayHeating = [
    {
      id: Date.now(),
      img: 'https://i.pinimg.com/564x/28/af/54/28af545c54e4febf6d5294cdbc04566d.jpg',
      title: '1 Комната',
      informationProductTop: '100кв',
      informationProductBottom: '2 батареи',
      prise: 'от 3150 сом/1бат',
    },
    {
      id: Date.now(),
      img: 'https://i.pinimg.com/564x/60/fb/3c/60fb3c4d2aa64395e312850830bdd77f.jpg',
      title: '1 Комната',
      informationProductTop: '100кв',
      informationProductBottom: '2 батареи',
      prise: 'от 3150 сом/1бат',
    },

    {
      id: Date.now(),
      img: 'https://i.pinimg.com/564x/df/9e/50/df9e50964e4915a4d3ebed93df88dbc1.jpg',
      title: '1 Комната',
      informationProductTop: '100кв',
      informationProductBottom: '2 батареи',
      prise: 'от 3150 сом/1бат',
    },
    {
      id: Date.now(),
      img: 'https://i.pinimg.com/564x/c1/e8/68/c1e86886571a161310411c61bf5093f8.jpg',
      title: '1 Комната',
      informationProductTop: '100кв',
      informationProductBottom: '2 батареи',
      prise: 'от 3150 сом/1бат',
    },
    {
      id: Date.now(),
      img: 'https://i.pinimg.com/564x/65/ae/54/65ae54d22c88aeae5c80f1b667d29c92.jpg',
      title: '1 Комната',
      informationProductTop: '100кв',
      informationProductBottom: '2 батареи',
      prise: 'от 3150 сом/1бат',
    },
    {
      id: Date.now(),
      img: 'https://i.pinimg.com/originals/89/d0/45/89d045814cbb2cbf632e10ab7e123b6f.gif',
      title: '1 Комната',
      informationProductTop: '100кв',
      informationProductBottom: '2 батареи',
      prise: 'от 3150 сом/1бат',
    },
    {
      id: Date.now(),
      img: 'https://i.pinimg.com/564x/6f/39/fc/6f39fc6c9dbd39280d846623e0c22d5b.jpg',
      title: '1 Комната',
      informationProductTop: '100кв',
      informationProductBottom: '2 батареи',
      prise: 'от 3150 сом/1бат',
    },
    {
      id: Date.now(),
      img: 'https://i.pinimg.com/564x/dd/f9/00/ddf900fc92d7ed1d57044bc8001f3cfe.jpg',
      title: '1 Комната',
      informationProductTop: '100кв',
      informationProductBottom: '2 батареи',
      prise: 'от 3150 сом/1бат',
    },
    {
      id: Date.now(),
      img: 'https://i.pinimg.com/564x/f7/53/5d/f7535dacd85f6ebafa20360665a417b7.jpg',
      title: '1 Комната',
      informationProductTop: '100кв',
      informationProductBottom: '2 батареи',
      prise: 'от 3150 сом/1бат',
    },
  ];
  return (
    <>
      {arrayHeating.map((item) => (
        <StyledDiv id={item.id}>
          <img className="img-main" src={item.img} alt="img" />
          <h4>{item.title}</h4>
          <div className="papa-engine">
            <div className="engine">
              <p className="engine-top">
                <img src={Engine} alt="Engine" />
                {item.informationProductTop}
              </p>
              <p className="engine-bottom">
                <img src={Gears} alt="Gears" />
                {item.informationProductBottom}
              </p>
            </div>
            <div className="price">
              <p>{item.prise}</p>
            </div>
          </div>
          <button>Забронировать</button>
        </StyledDiv>
      ))}
    </>
  );
};

export default HeatingCardsSection;

const StyledDiv = styled.div`
  width: 435px;
  margin-bottom: 37px;
  .img-main {
    width: 100%;
    height: 322px;
    margin-bottom: 14px;
  }
  h4 {
    font-weight: 400;
    margin-bottom: 1px;
    font-size: 22px;
  }
  .papa-engine {
    display: flex;
    justify-content: space-between;
    .price {
      margin-top: 25px;
      font-size: 28px;
    }
  }
  .engine {
    p {
      display: flex;
      align-items: center;
      gap: 22px;
      margin-bottom: 3px;
    }
    .engine-top {
      font-size: 14.52px;
    }
    .engine-bottom {
      font-size: 18px;
    }
  }
  button {
    width: 100%;
    height: 59px;
    font-size: 18px;
    border: none;
    color: #ffffff;
    background-color: #4775247a;
    font-size: 18px;
    cursor: pointer;
    margin-top: 16px;
    &:hover {
      background-color: #6f9b4e79;
    }
    &:active {
      background-color: #1f4304a2;
    }
  }
`;
