import HeatingServicesForm from './HeatingServicesForm';
import HeatingServicesSection from './HeatingServicesSection';
import HeatingCardsSection from './HeatingCardsSection';
import { styled } from 'styled-components';

const Session = () => {
  return (
    <div>
      <HeatingServicesForm />
      <HeatingServicesSection />
      <HeatingCardsSectionStyle>
        <HeatingCardsSection />
      </HeatingCardsSectionStyle>
    </div>
  );
};

export default Session;

const HeatingCardsSectionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
