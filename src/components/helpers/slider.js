import React, { Component } from 'react'
import './css/slider.css'
import { ReactComponent as SvgBanner } from './../../images/banner.svg'

import { mySettings } from './../../settings.js'

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
			currentIndex: 0,
      translateValue: 0,
			index: 0,
    }
  }

	componentDidMount() {
		setInterval(this.changeText.bind(this), 2500)
	}

	componentWillUnmount() {
		clearInterval()
	}

	changeText() {
		let { index } = this.state
		if (index<3) {
			index += 1
			this.setState({index})
		}
		else {
			this.setState({index: 0})
		}
	}

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0)
      return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
		const images = [
			//require('./../../')
		]

    return (
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
        </div>

        <LeftArrow
         goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
	/*const text = {
		position: 'absolute',
		//flexWrap: 'wrap',
		color: 'white',
		backgroundColor: 'pink',
		fontSize: '2.5em',
		height: '20vh',
		top: '30vh',
		left: '50vw',
		wordWrap: 'break-word',
	}
	const styles = {
		width: '100vw',
	}*/

	return (
		<div className="slide" style={styles}>
		</div>
	)
}


const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}


const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}
