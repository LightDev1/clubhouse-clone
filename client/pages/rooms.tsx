import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { ConversationCard } from '../components/ConversationCard';
import Link from 'next/link';
import React from 'react';
import axios from '../core/axios';

export default function RoomsPage({ rooms = [] }) {
    return (
        <>
            <Header />
            <div className="container">
                <div className=" mt-40 d-flex align-items-center justify-content-between">
                    <h1>All conversations</h1>
                    <Button color="green">+ Start room</Button>
                </div>
                <div className="grid mt-30">
                    {rooms.map((room: any) => (
                        <Link key={room.id} href={`/rooms/${room.id}`}>
                            <a className="d-flex">
                                <ConversationCard
                                    title={room.title}
                                    avatars={room.avatars}
                                    guests={room.guests}
                                    guestsCount={room.guestsCount}
                                    speakersCount={room.speakersCount}
                                />
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export const getServerSideProps = async () => {
    try {
        const { data } = await axios.get('/rooms.json');
        return {
            props: {
                rooms: data,
            },
        };
    } catch (error) {
        console.log('ERROR!');
        return {
            props: {
                rooms: [],
            },
        };
    }
};
