import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Img1 from './images/img1.jpg'
import Img2 from './images/img2.jpg'
import Img3 from './images/img3.jpg'
import Img4 from './images/img4.jpg'
import Img5 from './images/img5.jpg'
import './carousel.css'
import './tile.css'

export class BootstrapCarousel extends Component {
    render() {
    // function BootstrapCarousel() {
        return (
            <div className="bigbox">
                <div className='car'>
                <div className='container-fluid' style={{padding: 0}}>
                    <Carousel className='carbody' variant="">
                        <Carousel.Item className='items'  >
                            <img
                                className="d-block"
                                src={Img1} />
                            {/* <Carousel.Caption>
                                <h3>Recent Events</h3>
                            </Carousel.Caption> */}
                        </Carousel.Item  >
                        <Carousel.Item className='items'>
                            <img
                                className="d-block"
                                src={Img2} />
                            {/* <Carousel.Caption>
                                <h3>Recent Events</h3>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item className='items'>
                            <img
                                className="d-block"
                                src={Img3} />
                            {/* <Carousel.Caption>
                                <h3>Recent Events</h3>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item className='items'>
                            <img
                                className="d-block"
                                src={Img4} />
                            {/* <Carousel.Caption>
                                <h3>Recent Events</h3>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item className='items'>
                            <img
                                className="d-block"
                                src={Img5} />
                            {/* <Carousel.Caption>
                                <h3>Recent Events</h3>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                    <Carousel.Caption>
                                <h3>Recent Events</h3>
                    </Carousel.Caption>
                </div>
                
            </div>
            </div>
        )
    }
//     }
}

export default BootstrapCarousel 