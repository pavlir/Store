import React from 'react'
import { useState } from 'react'
import { IconSwitch } from '../../components/IconSwitch/IconSwitch'
import { ListView, CardsView } from '../../components/ContentsView/ContentsView'
import './Store.css'

export const Store = () => {
	const VIEW_TYPE = {
		LIST: 1,
		CARDS: 2
	};
	const ICON_BY_VIEW_TYPE = {
		[VIEW_TYPE.LIST]: 'view_module',
		[VIEW_TYPE.CARDS]: 'view_list'
	};

	const products = [{
		name: "Nike Metcon 2",
		price: "130",
		color: "red",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
	}, {
		name: "Nike Metcon 2",
		price: "130",
		color: "green",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
	}, {
		name: "Nike Metcon 2",
		price: "130",
		color: "blue",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
	}, {
		name: "Nike Metcon 2",
		price: "130",
		color: "black",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
	}, {
		name: "Nike free run",
		price: "170",
		color: "black",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
	}, {
		name: "Nike Metcon 3",
		price: "150",
		color: "green",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
	}];

	const [view, setView] = useState(VIEW_TYPE.LIST);
	const handleSwitch = () => {
    const newView = view == VIEW_TYPE.LIST ? VIEW_TYPE.CARDS : VIEW_TYPE.LIST;
		setView(newView);
	};

  const content = view == VIEW_TYPE.LIST ? <ListView items={products}/> : <CardsView cards={products}/>

  return (
    <div className='store'>
			<div className='header'>
        <IconSwitch icon={ICON_BY_VIEW_TYPE[view]} onSwitch={handleSwitch}/>
      </div>
      <div className='content'>{content}</div>
	  </div>
  )
}
