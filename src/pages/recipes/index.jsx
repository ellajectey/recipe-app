import {Card,CardActionArea, CardContent, CardMedia, Container,TextField, Typography,Grid, } from "@mui/material";




export default function Recipes(){

    return(
        <>
         <Container sx={{my:'2rem'}} maxWidth="sm">
            <TextField fullWidth 
            id="outlined-basic" 
            label="Enter a keyword to search recipes and hit Enter" 
            variant="outlined" />
            <Grid sx={{mt:'2rem'}}container spacing={3}>
                <Grid item xs={4}>
                    <Card>
                        
                        <CardMedia 
                        
                        sx ={{height:180}}
                        image="https://images.unsplash.com/photo-1633959639810-16c90bee95f9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                        
                    </Card>
                    <CardContent>
                        <Typography variant ="h6"> Recipe Name</Typography>
                    </CardContent>
                </Grid>
            </Grid>
         </Container>
         
        </>
    );
}