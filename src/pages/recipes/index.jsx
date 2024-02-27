import { Container, TextField, Grid, } from "@mui/material";
import RecipeItem from "../../components/recipe-item"
import { useState, useEffect} from "react";


export default function Recipes() {

// don't use variables in react use useState
   const[recipes,setRecipes] = useState([]);
   const [searchItem,setSearchItem] = useState("");

   const searchRecipes =() => {

    // prepare url
    const url =new URL ('https://api.spoonacular.com/recipes/complexSearch')
    url.searchParams.append('apiKey',process.env.REACT_APP_SPOONACULAR_API_KEY);

    // searching for the item in the api
    url.searchParams.append('query',searchItem); //add the query parameter
    url.searchParams.append('number',20); // changes the number of items showing in the default page

    //fetch recipes from API
    fetch(url)
    .then((response) => response.json())
    .then((data)=>{

    //update the recipes state
    setRecipes(data.results);
    // console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })

   }
   useEffect(searchRecipes,[]);

    return (
        <>
            <Container  sx={{ my: '2rem' }}>
                <TextField color="warning" fullWidth
                    id="outlined-basic"
                    label="Enter a keyword to search recipes and hit Enter"
                    variant="outlined" 
                    value={searchItem}
                    onChange={(event) =>setSearchItem(event.target.value)}
                    onKeyDown ={event => event.key =="Enter" && searchRecipes()}
                    />
                <Grid sx={{ mt: '2rem' }} container spacing={3}>
                    {recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image}/>)}
                </Grid>
            </Container>

        </>
    );
}