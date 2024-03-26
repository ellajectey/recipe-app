import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import preLoader from "../../assets/images/bouncing-circles.svg";
import Navbar from "../../components/navbar";


const getRecipe = (...args) => {
   
     // prepare url ( this will call the page for a particular recipe)
     const url =new URL (...args);
     url.searchParams.append('apiKey',process.env.REACT_APP_SPOONACULAR_API_KEY);
    //  fetch and return data
    return fetch(url).then(response => response.json());
}

export default function Recipe(){

    const {id}=useParams();
    const { data: recipe, isLoading} = useSWR(`${process.env.REACT_APP_RECIPE_API}/recipes/${id}`, getRecipe);
    // const fetcher = (...args) => fetch(...args).then(res => res.json())
    console.log(recipe,isLoading);

    return( 
    <>
    <Navbar/>
    {isLoading?<img src={preLoader} /> :(
    <Container>
        <h1>{recipe.title}</h1>
        {/* <p>{recipe.summary}</p> */}
        <div>{recipe.description}</div>
        <img sx={{ maxWidth: 40, height: '40%' }} 
        src={`${process.env.REACT_APP_RECIPE_API}/images/${recipe.image}`} alt={recipe.title}/>
       
        
    </Container>
    )}
    </>
    );
}