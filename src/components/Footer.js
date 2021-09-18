import { Typography, Link } from '@mui/material';

const Footer = () => {
    return(
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/nathyts/dio-context">
                Dio Context API - Github
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default Footer;
