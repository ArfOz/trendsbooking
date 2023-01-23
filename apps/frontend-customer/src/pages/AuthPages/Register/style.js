export const buttons = {
    submit: {
        fontSize: '1rem',
        p: '10px',
        mt: '30px',
        mb: '10px',
        backgroundColor: '#F75936',
        border: '1px solid green',
        color: 'white',
        '&:hover': {
            color: '#F75936',
        },
    },
    next: {
        mt: '30px',
        mb: '10px',
        fontSize: '1rem',
        p: '10px',
        backgroundColor: '#F75936',
        border: '1px solid green',
        color: 'white',
        '&:hover': {
            color: '#F75936',
        },
    },
    back: {
        mt: '30px',
        // mb: "10px",
        fontSize: '1rem',
        p: '10px',
        backgroundColor: '#F75936',
        border: '1px solid green',
        color: 'white',
        '&:hover': {
            color: '#F75936',
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
        mt: 2,
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
        backgroundColor: '#F75936 !important',
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
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },

    headerBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        mt: 0,
    },
    logoWordShort: {
        width: 'calc(100% - 50px)',
        mt: 4,
        ml: 3,
    },
    progressBarEmpty: {
        width: '50%',
        height: '10px',
        background: '#F2F8FF',
        borderRadius: '15px',
        mb: 2,
    },
    progressBarFull: {},

    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
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
