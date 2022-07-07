import { AppBar, Box, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    return (
            <AppBar position="fixed" style={{background: '#000' }}>
                <Toolbar>
                    <NavLink
                        className="nav-logo"
                        to="/"
                    >
                        <img src={'../../assets/images/logo.png'} alt='logo' />
                    </NavLink>
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            BestCycling
                        </Typography> */}
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
    );
};