export const buttons = {
    submit: {
        width: '294px',
        height: '40px',
        fontSize: '1rem',
        ml: '250px',
        backgroundColor: '#07232C',
        color: 'white',
        '&:hover': {
            color: '#07232C',
        },
    },
    next: {
        width: '40%',
        height: '100%',
        fontSize: '1rem',
        //ml: '410px',
        backgroundColor: '#07232C',
        color: 'white',
        '&:hover': {
            color: '#07232C',
        },
    },
    back: {
        width: '40%',
        height: '100%',
        fontSize: '1rem',
        //ml: '50px',
        backgroundColor: '#07232C',
        color: 'white',
        '&:hover': {
            color: '#07232C',
        },
    },
};

export const modal = {
    position: 'absolute',
    top: '50%',
    left: '25%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: '#fff',
    p: 4,

    button: {
        width: '30%',
        mt: 2,
        ml: '6%',
        fontSize: '1rem',
        p: '10px',
        backgroundColor: '#fff',
        border: '1px solid #07232C',
        color: '#07232C',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#07232C',
        },
    },
    scrollBar: {
        height: '500px',
        overflowY: 'scroll',
        width: '52%',
        pr: '2%',
        margin: 'auto',
        '::-webkit-scrollbar': {
            width: '8px',
        },
        '::-webkit-scrollbar-track': {
            borderRadius: '5px',
        },
        '::-webkit-scrollbar-thumb': {
            background: '#D9D9D9',
            borderRadius: '15px',
        },
    },
    checkbox: {
        fontSize: '1rem !important',
        p: '10px !important',
        backgroundColor: '#07232C!important',
        border: '1px solid green !important',
        color: 'white !important',
        width: '45%',
        display: 'flex',
        margin: 'auto',
        '&:hover': {
            color: '#fff !important',
        },
    },
};

export const boxStyle = {
    leftMain: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
    },

    headerBox: {
        width: '100%',
        mt: 2,
        ml: 2,
    },
    logoWord: {
        width: 'calc(100% - 350px)',
        mt: 4,
        ml: 3,
    },
    progressBarEmpty: {
        width: '50%',
        height: '10px',
        background: '#F2F8FF',
        borderRadius: '15px',
        mb: 2,
        mt: 2,
    },
    progressBarFull: {},

    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },

    rightside: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    },
};

export const input = {
    '&:invalid': {
        border: 'red solid 2px',
    },
};
