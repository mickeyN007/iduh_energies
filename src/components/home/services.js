import React, { useRef } from 'react'

import './../../css/services.css'
import bg2 from '../../images/bg2.jpg'

import { mySettings } from './../../settings.js'

const Services = (props) => {
	const servicesArr = [
		{
			name: "Sustainable Ennergy",
			img: require('../../images/avatar.jpg')
		},
		{
			name: "Drilling",
			img: require('../../images/avatar.jpg')
		},
		{
			name: "Sustainable Ennergy",
			img: require('../../images/avatar.jpg')
		},
		{
			name: "Drilling",
			img: require('../../images/avatar.jpg')
		}
	]
	const services = servicesArr.map((service, i) => {
		const { name, img } = service
		return (
			<div className='team-member'>
				<div className='team-image'>
					<img src={img} className='img' />
				</div>
				<div className='team-info'>
					<div className='team-name' style={{color: 'white'}}>{name}</div>
				</div>
			</div>
		)
	})
	return(
		<div className='services'>
			<div style={{zIdex: 999999}} className='section'>
				<div className='title-2'>OUR SERVICES</div>
				<div className='title-3 short'>
					Our mission is to deliver cleaner energy & sustain
					Nigeria's energy needs as we transition to <br /> Net Zero.
				</div>
				<div className='teams-images'>{services}</div>
			</div>
			<img src={bg2} className='img' style={styles.img} />
		</div>
	)
}

const styles = {
	img: {
		position: 'absolute',
		margin: 0,
		top: 0, right: 0, bottom: 0,
		zIndex: -1,
		filter: 'brightness(40%)',
		background: 'blue'
	}
}

export default Services;
