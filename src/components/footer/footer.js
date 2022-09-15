import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from "react-icons";
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillTwitterSquare
} from 'react-icons/ai'

import { mySettings } from './../../settings.js'

import './../../css/footer.css'
import d from './../../images/logo.png'

export default class Footer extends Component {
	constructor() {
		super()
	}

	render() {
		const addy = `https://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003`
		return (
			<div className="f-main">
				<div className="f-container">
				</div>
			</div>
		)
	}
}
