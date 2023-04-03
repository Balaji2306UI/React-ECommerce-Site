import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import Products from "./Products";

const productsArr = [
    {
        title: "Colors",
        price: 100,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        rating: 4.5,
    },
    {
        title: "Black and white Colors",
        price: 50,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        rating: 4,
    },
    {
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        rating: 3.5,
    },
    {
        title: "Blue Color",
        price: 100,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        rating: 5,
    },
];

function App() {
    return (
        <>
            <Header />
            <Products data={productsArr}/>
			<Footer />
        </>
    );
}

export default App;
