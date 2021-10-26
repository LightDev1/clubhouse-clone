import React, { useContext } from 'react';

import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { MainContext } from '../../../pages';

import styles from './WelcomeStep.module.scss';

export const WelcomeStep: React.FC = () => {
  const { onNextStep } = useContext(MainContext);

  return (
    <WhiteBlock className={styles.block}>
      <h3 className={styles.title}>
        <img className={styles.handWaveImg} src="/static/img/hand-wave.png" alt="Celebration" />
        Welcome to Clubhouse!
      </h3>
      <p>
        We’re working hard to get Clubhouse ready for everyone! While we wrap up the finishing
        youches, we’re adding people gradually to make sure nothing breaks :)
      </p>
      <div>
        <Button onClick={onNextStep}>
          Get your username
          <img className="d-ib ml-10" src="/static/img/arrow.svg" />
        </Button>
      </div>
      <div className="link mt-15 cup d-ib">Have an invite text? Sign in</div>
    </WhiteBlock>
  );
};
