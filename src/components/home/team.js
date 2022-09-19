import React, { useRef } from 'react'

import './../../css/team.css'

import { mySettings } from './../../settings.js'

const Team = (props) => {
	const teamsArr = [
		{
			name: "Chief Peter E Iduh",
			title: "Founder and Chairman Emeritus",
			img: require('../../images/avatar.jpg')
		},
		{
			name: "Samuel Iduh",
			title: "Chairman and CEO",
			img: require('../../images/avatar.jpg')
		}
	]
	const teams = teamsArr.map((team, i) => {
		const { name, title, img } = team
		return (
			<div className='team-member' key={i}>
				<div className='team-image'>
					<img src={img} className='img' />
				</div>
				<div className='team-info'>
					<div className='team-name'>{name}</div>
					<div className='team-title'>{title}</div>
				</div>
			</div>
		)
	})
	return(
		<div className='section'>
			<div className='title-3'>Meet Our Team of Experts</div>
			<div className='scroller'>{teams}</div>
		</div>
	)
}

const styles = {
}

export default Team;
