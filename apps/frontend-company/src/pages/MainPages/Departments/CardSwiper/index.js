import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { styled } from '@mui/system';
import {
    Card,
    CardContent,
    CardMedia,
    Button,
    Stack,
    CardActionArea,
    Typography,
    Box,
} from '@mui/material';

// import star from '../../assets/star.svg';

const SwipperList = [
    {
        id: '0',
        name: 'Seta Kuaför',
        city: 'Ankara',
        district: 'Çankaya',
        rate: '4.5',
        imageUrl:
            'https://img.freepik.com/free-photo/stylish-man-sitting-barbershop_1157-20487.jpg?w=1480&t=st=1667757551~exp=1667758151~hmac=a0a69244bdee8625d3229826848df4580bcc9d7ff5f90d54386a952c70e5311e',
    },
    {
        id: '1',
        name: 'Karanfil Kuaför',
        city: 'Ankara',
        district: 'Keçiören',
        rate: '4.7',
        imageUrl:
            'https://img.freepik.com/free-photo/handsome-man-barber-shop-styling-hair_1303-20978.jpg?w=1480&t=st=1667757596~exp=1667758196~hmac=f3528bb50ac7818bbdf48cbf0ed68a159f570bd36dade65d51bd50bba3472ff6',
    },
    {
        id: '2',
        name: 'Tesettür Nur Kuaför',
        city: 'Ankara',
        district: 'Yenimahalle',
        rate: '4.0',
        imageUrl:
            'https://img.freepik.com/free-photo/handsome-man-barbershop-shaving-beard_1303-26258.jpg?w=996&t=st=1667797387~exp=1667797987~hmac=8f084290f7ea0c1f0b53c3a94d9097a0002ac81f4c9f7432588f0f5ba502dfabs',
    },
    {
        id: '3',
        name: 'Ewa Kuaför',
        city: 'İstanbul',
        district: 'Beşiktaş',
        rate: '4.2',
        imageUrl:
            'https://img.freepik.com/free-photo/latin-man-smiling-mockup-psd-cheerful-expression-closeup-portrai_53876-145665.jpg?w=900&t=st=1667797504~exp=1667798104~hmac=2e87c3ee288ad6baafdfb626f2e5f4c0583d14e7761d07af7e3f98abe90c3552',
    },
    {
        id: '4',
        name: 'Essanella',
        city: 'İzmir',
        district: 'Bornova',
        rate: '4.4',
        imageUrl:
            'https://img.freepik.com/free-photo/charming-girl-denim-sundress-sweater-touches-her-red-hair-poses-wearing-glasses_197531-23296.jpg?w=996&t=st=1667798445~exp=1667799045~hmac=561c3b71a054c84ac5113c5d712b81bafb9067f782c812a27f8583cdfbe8835e',
    },
    {
        id: '5',
        name: 'Hairport',
        city: 'Adana',
        district: 'Ceyhan',
        rate: '4.3',
        imageUrl:
            'https://img.freepik.com/free-photo/female-hairdresser-making-hairstyle-redhead-woman-beauty-salon_176420-4482.jpg?w=996&t=st=1667798473~exp=1667799073~hmac=9c428b2ae493e64dac224cde79d6e8912243dee1d51b7b346c6db0c9a2ec1aa3',
    },
];

// const StyledCard = styled(Card)({
//     width: '502px',
//     height: '300px',
// });

const CardMediaContainer = styled('div')({
    position: 'relative',
});

const CardPoints = styled('div')({
    position: 'absolute',
    top: '12px',
    right: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
});

const StarIcon = styled('span')({
    color: 'yellow',
});

const DepartmentsCards = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    // when window width is >= 1200px
                    1200: {
                        width: 1200,
                        slidesPerView: 3,
                    },
                    // when window width is >= 900px
                    900: {
                        width: 900,
                        slidesPerView: 3,
                    },
                    // when window width is >= 600px
                    600: {
                        width: 600,
                        slidesPerView: 2,
                    },
                }}
            >
                {SwipperList.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card>
                            <CardMediaContainer>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={item.imageUrl}
                                    alt={item.name}
                                />
                                <CardPoints>
                                    <span className="points">{item.rate}</span>
                                    <StarIcon className="star">
                                        &#9733;
                                    </StarIcon>
                                    <span className="number">
                                        {item.rate * 30}
                                    </span>
                                    F
                                </CardPoints>
                            </CardMediaContainer>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {item.name}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                >
                                    {item.city}, {item.district}
                                </Typography>
                                <div className="card-points"></div>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DepartmentsCards;
