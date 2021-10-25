import type { NextPage } from 'next';
import { EnterPhoneStep } from '../components/steps/EnterPhoneStep';
import { WelcomeStep } from '../components/steps/WelcomeStep';

const Home: NextPage = () => {
  return (
    <div>
      <EnterPhoneStep />
    </div>
  );
};

export default Home;
