import React, { useMemo, useState } from 'react'
import CardItem from '../Shop/CardItem/CardItem'
import style from './Modal.module.css'
import addpunch from './img/adding.jpg'
const Modal = ({ setModal, cart, totalPrice, removeInCart, addInPurchases }) => {

	const [procent, setProcent] = useState(0)
	const [addPunchases, setAddPunchases] = useState(false)

	const punch = function () {
		addInPurchases()
		setAddPunchases(true)
	}

	useMemo(() => {
		const tallage = 5
		const result = totalPrice / 100 * tallage
		setProcent(result)
	}, [procent, totalPrice])

	return (
		<div className={style.wrapper}>
			<div onClick={() => setModal(false)} className={style.content}>
			</div>
			<div className={style.inner}>
				<h1 className={style.title}>Корзина</h1>
				{
					addPunchases ?
						<>
							<img src={addpunch} alt="" />
							<h1 className={style.title}><span>Заказ оформлен</span></h1>
							<p className={style.text}>Ваш заказ #18 скоро будет передан курьерской доставке</p>
							<button onClick={() => setAddPunchases(false)} className={addPunchases ? `${style.btnBuy} ${style.btnBuyActive}` : style.btnBuy}>     Вернуться назад</button>
						</>
						:
						cart.length ?
							<>
								<ul  >
									{cart.map((item) =>
										<CardItem key={item.id} removeInCart={removeInCart} item={item} />
									)}
								</ul>
								<ul className={style.control} style={{ width: '100%' }} >
									<li className={style.item}>
										Итого: <span>{totalPrice} руб. </span>
									</li>
									<li className={style.item}>
										Налог 5%:  <span>{procent.toFixed(0)} руб. </span>
									</li>
									<li className={style.item}>
										<button onClick={punch} className={style.btnBuy}>Оформить заказ</button>
									</li>
								</ul>
							</>
							:
							<h1>Товары не найдены</h1>
				}


			</div>
		</div >
	)
}

export default Modal
