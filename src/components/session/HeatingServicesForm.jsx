import styled from 'styled-components';
import ok from '../../assets/Ok.png';
import TickBox from '../../assets/TickBox.png';
import { motion } from 'framer-motion';

const HeatingServicesForm = () => {
  return (
    <StyledDiv>
      <StyledDivLeft>
        <h1>Отопление на дома в Бишкеке</h1>
        <h2>Профессиональные услуги по установке отопления</h2>
        <p>
          <img src={ok} alt="ok-img" />
          Индивидуальный подход к каждому проекту
        </p>
        <p>
          <img src={ok} alt="ok-img" />
          Опытные специалисты по сварке и монтажу
        </p>
        <p>
          <img src={ok} alt="ok-img" />
          Использование качественных материалов и оборудования
        </p>
        <p>
          <img src={ok} alt="ok-img" />
          Гарантия качества и надежности выполненных работ
        </p>
        <p>
          <img src={ok} alt="ok-img" />
          Бесплатная консультация и оценка проекта
        </p>
      </StyledDivLeft>
      

      <motion.div whileHover={{ scale: 1.1 }}>
        <StyledDivRight>
          <p className="call">Заказать звонок </p>
          <div className="inputs">
            <div className="top-date">
              <label htmlFor="inputss">начало ремонта дата 👉</label>
              <input
                type="date"
                id="inputss"
                placeholder="начало ремонта дата"
              />
            </div>
            <div className="bottom-date">
              <label htmlFor="inputsss">завершение ремонта дата 👉 </label>
              <input
                type="date"
                id="inputsss"
                placeholder="завершение ремонта дата"
              />
            </div>
          </div>
          <p className="servise">Выберите категорию услуг</p>
          <div className="servise-category">
            <div>
              <p>
                <img src={TickBox} alt="TickBox-img" />1 комната
              </p>
              <p>
                <img src={TickBox} alt="TickBox-img" />2 комнат
              </p>
            </div>
            <div>
              <p>
                <img src={TickBox} alt="TickBox-img" />3 комнат
              </p>
              <p>
                <img src={TickBox} alt="TickBox-img" />4 комнат
              </p>
            </div>
            <div>
              <p>
                <img src={TickBox} alt="TickBox-img" />5 комнат
              </p>
              <p>
                <img src={TickBox} alt="TickBox-img" />6 комнат
              </p>
            </div>
          </div>
          <button>Хочу узнать все варианты</button>
        </StyledDivRight>
      </motion.div>
    </StyledDiv>
  );
};

export default HeatingServicesForm;

const StyledDiv = styled.div`
  background: url('https://i.pinimg.com/564x/68/8e/df/688edf717a5abf6a9158634c5be4d977.jpg')
    center center/cover no-repeat;
  background-size: cover;
  width: 100%;
  height: 570px;
  display: flex;
  justify-content: space-around;
`;

const StyledDivLeft = styled.div`
  color: #ffffff;
  font-weight: 500;
  h1 {
    font-size: 43px;
    margin-top: 87px;
    margin-bottom: 34px;
  }
  h2 {
    font-size: 28px;
    margin-bottom: 33px;
  }
  p {
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 23px;
  }
`;

const StyledDivRight = styled.div`
  width: 532px;
  height: 353px;
  border-radius: 20px;
  background-color: #47752482;
  margin-top: 157px;
  padding: 22px 25px;
  color: #ffffff;
  font-weight: 300;
  p {
    font-size: 20px;
  }
  .call {
    margin-bottom: 18px;
  }
  .inputs {
    display: flex;
    gap: 40px;
    margin-bottom: 26px;
  }
  .top-date input,
  .bottom-date input {
    width: 18px;
    background: none;
    border: none;
    outline: none;
    margin-left: 190px;
    margin-top: 8px;
  }
  .top-date,
  .bottom-date {
    width: 222px;
    height: 35px;
    background-color: #ffffff;
    border-radius: 10px;
    position: relative;
  }
  .top-date label,
  .bottom-date label {
    position: absolute;
    top: 7px;
    left: 10px;
    color: #000000;
    font-size: 14px;
    cursor: pointer;
  }
  .servise {
    font-size: 16px;
  }
  .servise-category {
    margin-top: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    width: 80%;
  }
  .servise-category p {
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .servise-category img {
    margin-right: 9px;
  }
  button {
    width: 445px;
    height: 46px;
    border-radius: 20px;
    border: 1px solid #ffffff;
    background-color: #477524;
    color: #ffffff;
    font-size: 16px;
    margin-top: 30px;
    margin-left: 19px;
  }
`;
