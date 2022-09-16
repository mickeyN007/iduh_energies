import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from "react-icons";
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillTwitterSquare
} from 'react-icons/ai'

import { mySettings } from './../../settings.js'

//import './../../css/footer.css'
//import d from './../../images/logo.png'

import './../../css/services.css'
import bg2 from '../../images/gas.jpg'

export default class Footer extends Component {
	constructor() {
		super()
	}

	render() {
		const addy = `https://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003`
		return (
			<div className='services'>
				<div style={{zIdex: 999999}} className='section'>
				</div>
				<img src={bg2} className='img' style={styles.img} />
			</div>
		)
	}
}

const styles = {
	img: {
		position: 'absolute',
		margin: 0,
		top: 0, right: 0, bottom: 0,
		zIndex: -1,
		height: '70vh',
		filter: 'brightness(90%)',
	},
	imgg: {
		position: 'absolute',
		margin: 0,
		top: 0, right: 0, bottom: 0,
		zIndex: -1,
		width: '100%',
		opacity: 0.3,
		backgroundColor: mySettings.blue
	}

}

