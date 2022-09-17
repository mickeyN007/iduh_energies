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
import './../../css/footer.css'

import bg from '../../images/gasIllustration.jpg'
import logo from './../../images/logo.png'

export default class Footer extends Component {
	constructor() {
		super()
		this.state = {
			email: ''
		}
	}
	render() {
		const addy = `https://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003`
		const { email } = this.state
		let date = new Date().getFullYear()
		return (
			<div>
				<div className='footer'>
					<div style={{zIdex: 999999}} className='footer-section'>
						<div className='title-2a'>NEWSLETTER</div>
						<div className='title-4 mid'>
							Subscribe to our newsletters to receive
							latest news and updates
						</div>
						<div className='subscribe-form'>
							<input
								className='input-txt title-2'
								type="text"
								onChange={(e) => this.setState({email: e.target.value})}
								value={email}
								placeholder='Enter your email'
							/>
							<div className='btn btn-label' onClick={this.subscribe.bind(this)}>
								SUBSCRIBE
							</div>
						</div>
					</div>
					<img src={bg} className='img' style={styles.img} />
					<div style={styles.imgg}></div>
				</div>
				<div className='f-main'>
					<div className='f-container'>
						<div className='col'>
							<Link to='/' className="footer-logo">
								<img src={logo} style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
							</Link>
							<div className='footer-mission'>
								Our mission is to deliver cleaner energy & sustain
								Nigeria's energy needs as we transition to <br /> Net Zero.
							</div>
							<div className="social-icons">
								<a href="#" className="link">
										<i className="fab fa-facebook-f fa-md"></i>
								</a>
								<a href="#" className="link">
										<i className="fab fa-twitter fa-md"></i>
								</a>
								<a href="#" className="link">
										<i className="fab fa-instagram fa-md"></i>
								</a>
								<a href="#" className="link">
										<i className="fab fa-linkedin fa-md"></i>
								</a>
							</div>
							<div className="footer-copyright" style={{color: 'white'}}>
								<p>
										Copyright {date} - Iduh Energies - All Rights Reserved
								</p>
							</div>
						</div>
						<div classame='col'>
							<div>Contact Us</div>
							<div>
							</div>
						</div>
						<div classame='col'>
							<div>Subscribe</div>
							<div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	subscribe() {
		//
	}
}

const styles = {
	img: {
		position: 'absolute',
		margin: 0,
		top: 0, right: 0, bottom: 0,
		zIndex: -1,
		height: '100vh',
		filter: 'brightness(90%)',
	},
	imgg: {
		position: 'absolute',
		margin: 0,
		top: 0, right: 0, bottom: 0,
		zIndex: -1,
		width: '100%',
		opacity: 0.7,
		backgroundColor: 'rgba(0,0,0,1)', /* Tint color */
	}

}

