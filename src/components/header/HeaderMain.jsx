import LocationGreen from '../../assets/LocationGreen.png';
import WhatsApp from '../../assets/WhatsApp.png';
import Telegram from '../../assets/Telegram.png';
import PhonelinkRing from '../../assets/PhonelinkRing.png';
import { styled } from 'styled-components';

const HeaderMain = () => {
  return (
    <>
      <HeaderMainDiv>
        <HeaderDiv>
          <div className="logo-header">
            <img
              src="https://i.pinimg.com/736x/ef/43/7d/ef437d0f03908139ba09eda06502dc68.jpg"
              alt="logo-img"
            />
          </div>
          <div className="header-nav">
            <p>О нас</p>
            <p>Работы</p>
            <p>Услуги</p>
            <p>Отзывы</p>
            <p>Контакты</p>
          </div>
          <div className="header-location-green">
            <img src={LocationGreen} alt="LocationGreen-img" />
            <p>Бишкек</p>
          </div>
          <div className="contacts-header">
            <img src={WhatsApp} alt="WhatsApp-img" />
            <img className="telegram" src={Telegram} alt="Telegram-img" />
            <img
              className="phone-link"
              src={PhonelinkRing}
              alt="PhonelinkRing-img"
            />
            <div className="order-call">
              <p>+996 770 43 04 76</p>
              <h6>Заказать звонок</h6>
            </div>
          </div>
        </HeaderDiv>
      </HeaderMainDiv>
    </>
  );
};

export default HeaderMain;

const HeaderMainDiv = styled.div`
  width: 100%;
  height: 87px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  width: 100%;
  .logo-header {
    width: 25%;
  }
  .logo-header img {
    width: 302px;
    height: 87px;
    margin-top: 5px;
  }
  .header-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    width: 30%;
    font-size: 16px;
    color: #000000;
  }
  .header-location-green {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 10%;
    font-size: 16px;
  }
  .contacts-header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    .telegram {
      margin-left: 20px;
    }
    .phone-link {
      margin-left: 23px;
      margin-right: 4px;
    }
    .order-call {
      color: #000000;
      font-size: 16px;
    }
    .order-call h6 {
        font-size: 12px;
        margin-left: 36px;
        border-bottom: 2px solid #000000;
    }


  }
`;
