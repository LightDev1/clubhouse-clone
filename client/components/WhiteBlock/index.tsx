import clsx from 'clsx';
import React from 'react';
import styles from './WhiteBlock.module.scss';

interface WhiteBlockProps {
    children: any;
    className: string;
}

export const WhiteBlock: React.FC<WhiteBlockProps> = ({ children, className }) => {
    return <div className={clsx(styles.block, className)}>{children}</div>;
};
