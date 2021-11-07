
import Search from "../components/Search";
import CocktailList from "../components/CocktailList";

function Home(){
    return (
        <main className="cocktail-app-container">
            <Search/>
            <CocktailList/>
      </main>
    )
}

export default Home;