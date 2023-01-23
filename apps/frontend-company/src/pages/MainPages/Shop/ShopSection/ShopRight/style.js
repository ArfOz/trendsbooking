import shopImage from '../../../../../assets/shopImage.png';
import na from '../../../../../assets/na.png';

export const Styles = {
    // ============ShopsRight =============
    boxcontainer: {
        left: '924px',
        top: '172px',
        background: '#D9D9D9',
        borderRadius: '20px',
        width: '37%',
        height: '540px',
        position: 'fixed',
    },
    swiperbox: {
        position: 'relative',
        background: `url(${shopImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '540px',
        borderRadius: '20px',
    },
    swiperbox1: {
        position: 'relative',
        background: `url(${na})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '540px',
        borderRadius: '20px',
    },
    commentbox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '99px',
        height: '99px',
        background: '#000000',
        opacity: 0.5,
        borderRadius: '0px 20px 0px 0px',
        position: 'absolute',
        right: '0px',
    },
    typographycomment1: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '40px',
        lineHeight: '47px',
        color: '#FFFFFF',
    },
    typographycomment2: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '15px',
        lineHeight: '18px',
        color: '#FFFFFF',
    },
};
