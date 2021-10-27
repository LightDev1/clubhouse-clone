import React from 'react';
import Link from 'next/link';

interface BackButtonProps {
    title: string;
    href: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ title, href }) => {
    return (
        <Link href={href}>
            <a>
                <div className="d-flex mb-30 cup">
                    <img
                        src="/static/img/back-arrow.svg"
                        alt="Back arrow"
                        className="mr-10"
                    />
                    <h3>{title}</h3>
                </div>
            </a>
        </Link>
    );
};
