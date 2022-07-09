import { useContext } from 'react';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginOutlined from '@mui/icons-material/LoginOutlined';

import { AuthContext } from '../../auth/context';
import { ButtonSubNav } from './ButtonSubNav';

export const Navbar = () => {

    const { logout, authState } = useContext(AuthContext);
    const navigate = useNavigate()

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    };

    const component = () => {

        if (authState.user.subscription !== null) return <span> SUBSCRICIÓN: {authState.user.subscription}</span>
        if (authState.user.typeSubscription !== null) return <ButtonSubNav text={'Renovación pendiente'} />

        return <ButtonSubNav text={'SUSCRIPCIÓN'} />
    }

    return (
        <AppBar position="fixed" style={{ background: '#000' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <NavLink
                    className="nav-logo"
                    to="/"
                >
                    <img src={'../../assets/images/logo.png'} alt='logo' />
                </NavLink>

                <div>
                    {component()}

                    <IconButton
                        size='large'
                        aria-label="logout"
                        sx={{ color: '#fff' }}
                        onClick={onLogout}
                    >
                        <LoginOutlined />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};