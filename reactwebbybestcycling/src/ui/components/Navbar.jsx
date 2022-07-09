import { useContext } from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { Duration } from 'luxon';
import LoginOutlined from '@mui/icons-material/LoginOutlined';

import { AuthContext } from '../../auth/context';
import { ButtonSubNav } from './ButtonSubNav';
import { useInterval } from '../../BestCycling/hooks/useInterval';

export const Navbar = () => {

    const { logout, authState, decrementTime } = useContext(AuthContext);
    const navigate = useNavigate()

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    };

    useInterval(() => {
        decrementTime();

    }, authState.user.subscription !== null ? 1000 : null)

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
                    {
                        (authState.user.subscription !== null) ? <span style={{ fontWeight: 'bold' }}> SUSCRIPCIÓN {Duration.fromMillis(authState.user.subscription).toFormat("mm.ss")}</span>
                            : (authState.user.typeSubscription !== null) ? <ButtonSubNav text={'Renovación pendiente'} />
                                : <ButtonSubNav text={'SUSCRIPCIÓN'} />
                    }

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