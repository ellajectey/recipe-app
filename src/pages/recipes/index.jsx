import { Container, TextField, Grid, } from "@mui/material";
import RecipeItem from "../../components/recipe-item"
import { useState, useEffect} from "react";
import noRecipes from"../../assets/images/no_data_re_kwbl.svg";
import preLoader from "../../assets/images/bouncing-circles.svg";


export default function Recipes() {

// don't use variables in react use useState
   const[recipes,setRecipes] = useState([]);
   const [searchItem,setSearchItem] = useState("");
   const[loading,setLoading] = useState(false);

   const searchRecipes =() => {
setLoading(true);
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
.finally(()=>setLoading(false))
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
                    onKeyDown ={event => event.key ==="Enter" && searchRecipes()}
                    />
                <Grid sx={{ mt: '2rem' }} container spacing={3}>
                    {/* tenary operator if the first statement is true the middle statement would work. if it is false the last statement will work */}
                    {loading ? (
                    <Container sx = {{display:"flex",justifyContent:"center", height:"60vh"}}><img src={preLoader} width="20%"/>
                    </Container>)
                     : recipes.length >0 ? recipes.map((recipe) => 
                    <RecipeItem key={recipe.id} title={recipe.title} 
                    image={recipe.image}/>): (
                    <Container sx={{display:"flex",justifyContent:"center",height:"60vh"}}> <img src= {noRecipes} width="20%"/>
                    </Container>
                    )}
                </Grid>
            </Container>

        </>
    );
}