import { GetServerSidePropsContext, NextPage } from 'next';

import { BackButton } from '../../components/BackButton';
import { Header } from '../../components/Header';
import { Room } from '../../components/Room';
import axios from '../../core/axios';

type RoomPageProps = {
    room: any;
};

const RoomPage: NextPage<RoomPageProps> = ({ room }) => {
    return (
        <>
            <Header />
            <div className="container mt-40">
                <BackButton title="All rooms" href="/rooms" />
            </div>
            <Room title={room.title} />
        </>
    );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    try {
        const { data } = await axios.get('/rooms.json');
        const roomId = ctx.query.id;
        const room = (data as any).find((obj: any) => obj.id === roomId)

        return {
            props: {
                room,
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

export default RoomPage;