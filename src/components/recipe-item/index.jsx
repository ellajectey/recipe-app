import { Card, CardMedia, CardContent, Typography, Grid, } from "@mui/material";
import { Link } from "react-router-dom";

// creating the card component
export default function RecipeItem({ title, image, id}) {
    return (
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={`https://savefiles.org/${image}?shareable_link=155`}
                    title={title}

                />
                {/* react router comes with the link tag that helps you link pages */}

                <CardContent>
                    <Link to={`/recipes/${id}`}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                    </Link>
                </CardContent>
            </Card>
        </Grid>
    );
}