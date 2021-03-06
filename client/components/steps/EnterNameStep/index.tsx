import clsx from 'clsx';
import React, { useContext } from 'react';

import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';
import { MainContext } from '../../../pages';

import styles from './EnterNameStep.module.scss';


export const EnterNameStep = () => {
  const { onNextStep } = useContext(MainContext);
  const [inputValue, setInputValue] = React.useState<string>('');

  const nextDisabled = !inputValue;

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/img/man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <WhiteBlock className={clsx('m-auto', styles.whiteBlock)}>
        <div className="mb-30">
          <input
            onChange={handleChangeInput}
            value={inputValue}
            className="field"
            placeholder="Enter fullname"
          />
        </div>
        <Button onClick={onNextStep} disabled={nextDisabled}>
          Next
          <img className="d-ib ml-10" src="/static/img/arrow.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
