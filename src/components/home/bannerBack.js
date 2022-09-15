import React, { useRef } from 'react'

import './../../css/banner.css'

import { mySettings } from './../../settings.js'
import bg1 from '../../images/bg1.jpg'

const Banner = React.forwardRef((props, ref) => (
		<div className='banerContainer'>
			<img src={bg1} className='img' />
		</div>
	)
)

const styles = {
}

export default Banner;
