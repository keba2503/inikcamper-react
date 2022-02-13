import React from 'react';
import classnames from 'classnames';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    
    this.IMAGE_PARTS = 4;
    
    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;
    
    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }
  
  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }
  
  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }
  
  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }
  
  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }
  
  render() {

    const { activeSlide, prevSlide, sliderReady } = this.state;
    return (
      <div className={classnames('slider', { 's--ready': sliderReady })}>
        <p className="slider__top-heading">En tus vacaciones sin preocupaciones; tendrás:</p>
        <div className="slider__slides">
          {slides.map((slide, index) => (
            <div
              className={classnames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
              key={slide.text1}
              >
              <div className="slider__slide-content">
                <h3 className="slider__slide-subheading">{slide.text2 || slide.text1}</h3>
                <h2 className="slider__slide-heading">
                  {slide.text1.split('').map((l, i) => <span key={i}>{l}</span>)}
                </h2>
              </div>
              <div className="slider__slide-parts">
                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="slider__control" onClick={() => this.changeSlides(-1)} />
        <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
      </div>
    );
  }
}

const slides = [
  {
    text1: 'Picnis',
    text2: 'Para tus ocasiones especiales',
    img: 'https://i.ibb.co/sVN2jRd/slide1.jpg',
  },
  {
    text1: 'Experiencias',
    text2: 'Kayak, Surf, Ciclismo, Tours y más...',
    img: 'https://i.ibb.co/w06r5R7/slide2.jpg',
  },
  {
    text1: 'Confort',
    text2: 'Espacio y comodidad',
    img: 'https://i.ibb.co/N9v9rMg/slide3.jpg',
  },
  {
    text1: 'Momentos',
    text2: 'Planificado por nosotros; para ti',
    img: 'https://i.ibb.co/YtwZdDt/slide4.jpg',
  },
 
];


