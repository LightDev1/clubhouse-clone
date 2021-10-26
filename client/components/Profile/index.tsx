import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { Avatar } from '../Avatar';
import { Button } from '../Button';

import styles from './Profile.module.scss';

interface ProfileProps {
    fullname: string;
    username: string;
    avatarUrl: string;
    about: string;
}

export const Profile: React.FC<ProfileProps> = ({ fullname, username, avatarUrl, about }) => {
    return (
        <>
            <Link href="/rooms">
                <div className="d-flex mb-30 cup">
                    <img
                        src={avatarUrl}
                        alt="Back arrow"
                        className="mr-10"
                    />
                    <h3>Back</h3>
                </div>
            </Link>
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                    <Avatar
                        width="100px"
                        height="100px"
                        src="https://sun2-3.userapi.com/s/v1/if1/CAR1Aao3yIica7xq77xIIMMTn29CME-cE5JSJBc8OTNVt29JQjnhR0ZsX_9IO-AzgwVbfgB6.jpg?size=200x0&quality=96&crop=138,44,1048,1048&ava=1"
                    />
                    <div className="d-flex flex-column ml-30 mr-30">
                        <h2 className="mt-0 mb-0">{fullname}</h2>
                        <h3 className={clsx(styles.username, 'mt-0 mb-0')}>@{username}</h3>
                    </div>
                </div>
                <Button
                    color="blue"
                    className={styles.followButton}
                >
                    Follow
                </Button>
            </div>
            <p className={styles.about}>{about}</p>
        </>
    );
};
