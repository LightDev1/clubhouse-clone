import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';

const ProfilePage: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Header />
            <div className="container mt-30">
                <Profile
                    fullname="Last Light"
                    username="lastlight"
                    about="Test Info"
                    avatarUrl="/static/img/back-arrow.svg"
                />
            </div>
        </>
    );
};

export default ProfilePage;