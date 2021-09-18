import { 
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button
} from '@mui/material';

import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';

const Header = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="relative">
                <Toolbar>
                    <CenterFocusWeakIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dio Context API
                    </Typography>
                    <Button variant="contained" color="error">
                        Sair
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;
