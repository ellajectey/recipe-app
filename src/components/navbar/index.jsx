import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";


export default function Navbar() {
    return (

        <AppBar color="warning" position="static">
            <Toolbar>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Recipe App
                </Typography>

            </Toolbar>
        </AppBar>
    );
}
