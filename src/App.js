import Navbar from "./components/navbar";
import Recipes from "./pages/recipes";
import Recipe from "./pages/recipe";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element: <Recipes/>},
  {path:"/recipes", element: <Recipes/>},
  // the path below will open the recipe depending on the card that was clicked based on their id
  {path:"/recipes/:id", element: <Recipe/>}
]);

function App() {
  return (
    <>
    <Navbar/>
     <RouterProvider router={router}/>
    </>
  );

}

export default App;
