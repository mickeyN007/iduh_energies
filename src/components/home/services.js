import React, { useRef } from 'react'

import './../../css/services.css'
import bg2 from '../../images/bg2.jpg'

import { mySettings } from './../../settings.js'

const Services = (props) => {
	const servicesArr = [
		{
			name: "Sustainable Energy",
			img: require('../../images/sustainableEnergy.png')
		},
		{
			name: "Drilling",
			img: require('../../images/oil-drill.png')
		},
		{
			name: "Completions",
			img: require('../../images/completions.png')
		},
		{
			name: "Geoscience Research",
			img: require('../../images/worker.png')
		}
	]
	const services = servicesArr.map((service, i) => {
		const { name, img } = service
		return (
			<div className='service' key={i}>
				<div className='service-image'>
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
				<div className='scroller'>{services}</div>
			</div>
			<img src={bg2} className='img' style={styles.img} />
			<div style={styles.imgg}></div>
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

export default Services;
