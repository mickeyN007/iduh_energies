import React, { useRef }  from 'react'
import CheckIfInView from '../helpers/checkIfInView.js'

import './../../css/home.css'
import './../../css/banner.css'

import Header from './../header/header.js'
import Footer from './../footer/footer.js'
import Team from './team.js'
import Services from './services.js'

import { mySettings } from './../../settings.js'

import bg1 from '../../images/bg1.jpg'
import trust from '../../images/trust.jpg'
import engineer from '../../images/engineer.jpg'

const Home = () => {
	const ref = useRef();
	const inViewport = CheckIfInView(ref, '0px'); // Trigger as soon as the element becomes visible
	return (
		<div className='container'>
			<Header inViewport={inViewport} />

			<div ref={ref} className='bannerContainer'>
				<div className='bannerHeader'>
					<div style={{fontWeight: 'bold'}}>Discover Our Energy</div>
					<div style={{fontWeight: 'bold'}}>For The New Age</div>
					<div className='small-font'>Iduh Energies is meeting worldwide demand for energy while preparing for the future</div>
				</div>
				<img src={bg1} className='img' style={styles.img} />
			</div>

			<div className='section'>
				<div className='title-2'>OUR EXPERTISE</div>
				<div className='col-2'>
					<div className='col-2-a'>
						<div className='title-3'>
							Why People Choose Us
						</div>
						<div className='p'>
							We develop innovative, efficient and sustainable exploration and
							production solutions that respond to our future energy challenges.
						</div>
						<div className='p'>
							We help companies create and improve
							industry products through long lasting and
							mutually rewarding relationships.
						</div>
					</div>
					<div className='col-2-b'>
						<img src={trust} className='img' />
					</div>
				</div>
			</div>

			<Services />
			<Team />
			<Footer />
		</div>
	)
}

const styles = {
	img: {
		position: 'absolute',
		margin: 0,
		top: 0, right: 0, bottom: 0,

		filter: 'brightness(5%)',
		zIndex: -1
	}
}

export default Home;
