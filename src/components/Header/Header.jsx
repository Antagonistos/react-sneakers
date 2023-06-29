import React from 'react'
import logo from './img/logo.png'
import Navigator from './Navigator/Navigator'
import './style.css'
const Header = ({ cart, totalPrice, removeInCart, handlerSubmit, addInPurchases }) => {



	return (
		<header className='header'>
			<img data-name='home' onClick={event => handlerSubmit(event)} src={logo} className="logo" alt="" />
			<Navigator addInPurchases={addInPurchases} handlerSubmit={handlerSubmit} removeInCart={removeInCart} totalPrice={totalPrice} cart={cart} />
		</header >
	)
}

export default Header
