import { AppBar, Toolbar, IconButton, Typography,Button } from "@mui/material";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (

        <AppBar color="warning" position="static">
            <Toolbar>

                <Typography  to="/" component={Link} variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
                    Recipe App
                </Typography>
                {/* <Link to="/add-recipe"><Button color="inherit">Add New Recipe</Button></Link> */}
                <Button component={Link} to="/add-recipe" color="inherit">Add New Recipe</Button>

            </Toolbar>
        </AppBar>
    );
}
