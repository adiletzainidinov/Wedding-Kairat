import React from 'react';
import jeep from '../../assets/Jeep.png';
import { styled } from 'styled-components';

const HeatingServicesSection = () => {
  return (
    <StyledDiv>
      <p>
        В Бишкеке, быстро растущем городе, спрос на качественные сварочные
        услуги постоянно возрастает. Сварка играет ключевую роль в создании
        надежных конструкций, соответствующих высоким стандартам безопасности и
        прочности. Сварочные работы стали неотъемлемой частью успешных
        инженерных проектов и строительства. В этом динамичном городе, где
        каждая деталь имеет значение, надежные и профессиональные сварщики
        ценятся как непременный элемент успеха и долговечности.
      </p>
      <h3>Подборка наших работ</h3>
      <div className="buttons">
        <button>
          <img src={jeep} alt="img" /> 1 комнатные
        </button>
        <button>
          <img src={jeep} alt="img" /> 2 комнатные
        </button>
        <button>
          <img src={jeep} alt="img" /> 3 комнатные
        </button>
        <button>
          <img src={jeep} alt="img" /> 4 комнатные
        </button>
        <button>
          <img src={jeep} alt="img" /> 5 комнатные
        </button>
      </div>
    </StyledDiv>
  );
};

export default HeatingServicesSection;

const StyledDiv = styled.div`
  background-color: #ffffff;
  color: #000000;
  p {
    margin: 36px 64px 31px 66px;
    font-size: 20px;
  }
  h3 {
    font-weight: 400;
    font-size: 43px;
    margin-left: 42px;
    margin-bottom: 36px;
  }
  button {
    width: 250px;
    height: 73px;
    background-color: #d9d9d9;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 20px;
    cursor: pointer;
    img {
      margin-right: 10px;
    }
    &:hover {
      color: white;
      background-color: #477524;
      img {
        background-color: white;
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    margin-bottom: 36px;
  }
`;
