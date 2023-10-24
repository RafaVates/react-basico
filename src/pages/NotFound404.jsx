import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Stack  from "@mui/material/Stack"

const NotFound404 = () => {
  return (
    <Link to={'/'} style={{textDecoration: 'none', color: 'red'}}>
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
                width: '600px',
                height: '600px',
                backgroundColor: 'primary.dark',
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
                },
                textDecoration: 'none',
            }}
        >
            <Stack spacing={2}>
                <Typography variant="h2">
                    404 - Not Found
                </Typography>
                <img src="./src/assets/error.png" alt="404-not found"/>
                <Typography variant="h4">
                    Back Home
                </Typography>
            </Stack>
            
        </Box>
    </Link>
  )
}

export default NotFound404
