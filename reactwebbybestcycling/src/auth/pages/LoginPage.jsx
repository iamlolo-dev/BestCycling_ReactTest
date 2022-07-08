import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'

import { AuthContext } from '../context';

export const LoginPage = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {

        login('John Adams');

        navigate('/', {
            replace: true
        });
    };

    return (
        <div className='l-container c-p'>
            <div className='l-box'>
                <span className='logo-animated' style={{marginTop: '50px'}}>
                    <img src='../../../assets/images/logo.png' alt='logo' />
                </span>
                <span style={{fontSize:'3em', fontWeight:'bold'}}>Bienvenid@ !</span>
                <Button
                    variant="contained"
                    size='large'
                    color='warning'
                    sx={{
                        color: '#fff',
                        background: '#ff7900',
                        fontWeight: 'bold',
                        fontSize: '1em',
                        marginRight: '1.5em',
                        width: '15em',
                        marginBottom: '10em'

                    }}
                    onClick={onLogin}
                >
                    Login
                </Button>
            </div>
        </div>
    );
};