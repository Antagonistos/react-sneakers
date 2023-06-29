import Header from "./components/Header/Header";
import "./App.css"
import Shop from "./components/Shop/Shop";
import { useState } from "react";
import Favorites from "./components/Favorites/Favorites";


import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Profile from "./components/Profile/Profile";


function App() {
	const [shop, setShop] = useState([
		{
			id: 1,
			title: 'Мужские Кроссовки Nike Blazer Mid Suede',
			price: 12999,
			FavOn: false,
			CartOn: false,
		},
		{
			id: 2,
			title: 'Мужские Кроссовки Nike Air Max 270',
			price: 12999,
			FavOn: false,
			CartOn: false,
		},
		{
			id: 3,
			title: 'Мужские Кроссовки Nike Blazer Mid Suede',
			price: 8499,
			FavOn: false,
			CartOn: false,
		},
		{
			id: 4,
			title: 'Кроссовки Puma X Aka Boku Future Rider',
			price: 8499,
			FavOn: false,
			CartOn: false,

		}, {
			id: 5,
			title: 'Мужские Кроссовки Under Armour Curry 8',
			price: 15199,
			FavOn: false,
			CartOn: false,
		},
		{
			id: 6,
			title: 'Мужские Кроссовки Nike Kyrie 7',
			price: 11299,
			FavOn: false,
			CartOn: false,
		}, {
			id: 7,
			title: 'Мужские Кроссовки Jordan Air Jordan 11',
			price: 10799,
			FavOn: false,
			CartOn: false,
		}, {
			id: 8,
			title: 'Мужские Кроссовки Nike LeBron XVIII',
			price: 16499,
			FavOn: false,
			CartOn: false,
		},
	])

	const [cart, setCart] = useState([

	])

	const [totalPrice, setTotalPrice] = useState(0)

	const [fav, setFav] = useState([

	])

	const [purchases, setPurchases] = useState([

	])


	const addInPurchases = () => {
		setPurchases([...purchases, ...cart])
		setCart([])
		cart.forEach((item) => item.CartOn = false)
		setTotalPrice(0)
	}

	const addInFav = (item, addFav) => {
		setFav([...fav, item])
		addFav = true
		item.FavOn = true

	}

	const removeInFav = (item, addFav) => {
		setFav(fav.filter(p => p.id !== item.id))
		addFav = false
		item.FavOn = false
	}

	const addInCart = (item, addCart) => {
		setCart([...cart, item])
		setTotalPrice(totalPrice + Number(item.price))
		addCart = true
		item.CartOn = true
	}

	const removeInCart = (item, addCart) => {
		setCart(cart.filter(p => p.id !== item.id))
		setTotalPrice(totalPrice - Number(item.price))
		addCart = false
		item.CartOn = false

	}

	const navigate = useNavigate()

	const handlerSubmit = (event) => {
		event.preventDefault()
		navigate(event.target.getAttribute('data-name'))
	}


	return (
		<div className="App">
			<Header addInPurchases={addInPurchases} handlerSubmit={handlerSubmit} removeInCart={removeInCart} totalPrice={totalPrice} cart={cart} />


			<Routes>
				<Route path="/home" element={
					<Shop
						removeInFav={removeInFav}
						addInFav={addInFav}
						removeCard={removeInCart}
						inCart={addInCart}
						title={'Все кроссовки'}
						shop={shop}
					/>}>
				</Route>
				<Route path="/fav" element={<Favorites handlerSubmit={handlerSubmit} removeFav={removeInFav} inFav={addInFav} inCart={addInCart} removeCard={removeInCart} fav={fav} />}>
				</Route>
				<Route path="/profile" element={<Profile handlerSubmit={handlerSubmit} purchases={purchases} removeInFav={removeInFav} inFav={addInFav} inCart={addInCart} removeCard={removeInCart} />}></Route>
			</Routes>




		</div>
	);

}

export default App;
