import React from 'react';
import Location from '../../assets/Location.png';
import OnlineShopping from '../../assets/OnlineShopping.png';
import { styled } from 'styled-components';
const HeaderTop = () => {
  return (
    <>
      <HeaderBackdropDiv>
        <div className="header-top-papa">
          <div className="location-header">
            <p>
              <img src={Location} alt="img-Location" />
            </p>
            <h5>г.Бишкек,улица Тендик 2-я,д.14</h5>
          </div>
          <h5>рабочие дни: с 10:00 до 20:00</h5>
          <div className="when-works">
            <p>
              <img src={OnlineShopping} alt={OnlineShopping} />
            </p>
            <h5>Заказы через сайт принимаются круглосуточно!</h5>
          </div>
          <div>
            <p>Админ</p>
          </div>
        </div>
      </HeaderBackdropDiv>
    </>
  );
};

export default HeaderTop;

const HeaderBackdropDiv = styled.div`
  width: 100%;
  height: 46px;
  background-color: #000000;
  .header-top-papa {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    width: 70%;
    height: 100%;
    color: #ffffff;
    margin-left: 20px;
    font-size: 14px;
  }
  .location-header, .when-works {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;