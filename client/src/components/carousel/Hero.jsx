import React from 'react'
import "./carousel.css"
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
    var heroData = [
        {
          id: 1,
          image: require('../../assets/images/delux1.jpg'),
          title: 'Phòng Deluxe',
          // p1: 'Loại giường King/Twin',
          // p2: 'Sức chứa 2 người/phòng',
          // p3: 'Hướng nhìn Thành phố',
          // p4: 'Kích thước phòng 42~44 ㎡',
          // link: 'https://www.google.com'
        },
        {
          id: 2,
          image: require('../../assets/images/deluxe2.jpg'),
          title: 'Phòng Deluxe',
        },
        {
          id: 3,
          image: require('../../assets/images/club.jpg'),
          title: 'Phòng Club Junior Suite',
        },
        {
          id: 4,
          image: require('../../assets/images/deluxesuite.jpg'),
          title: 'Phòng Deluxe Suite',
        },
        {
          id: 5,
          image: require('../../assets/images/premier.jpg'),
          title: 'Phòng Premier Suite',
        },
        {
          id: 6,
          image: require('../../assets/images/prescident.jpg'),
          title: 'Phòng Prescidential Suite',
        }
      ]
      return (
        <div className="carousel1">
          <div className="carousel11">
          <Carousel>
              {
                heroData.map(hero => {
                  return (
                    <Carousel.Item key={hero.id}>
                      <img
                        className="d-block w-100"
                        src={hero.image}
                        alt={"slide " + hero.id}
                      />
                      <Carousel.Caption>
                        <div className="ctong">
                        <h2>{hero.title}</h2>
                        <div className="ctHero">
                            <div className="ct1">
                                <div className="ct2">
                                <p className='pt'>{hero.p1}</p>
                                <p className='pt2'>{hero.p2}</p>
                                <p className='pt3'>{hero.p3}</p>
                                </div>
                                <p>{hero.p4}</p>
                            </div>
                            <div className="link">
                            <a className='herolink' href={hero.link}>Xem chi tiết &gt;</a>
                            </div>
                        </div>
                        </div>                      
                      </Carousel.Caption>             
                    </Carousel.Item>
                  );
                })
              }
          </Carousel>
          </div>
          <div className="introduction">
            <div className='intro-right'>
              <div className="intro-img1">
                <img className='intro_img' src="https://www.lottehotel.com/content/dam/lotte-hotel/lotte/hanoi/dining/restaurant/timhowan/180718-2-2000-din-hanoi-hotel.jpg.thumb.480.480.jpg" alt="" />
                <span className='introtext'>Nhà hàng & BAR</span>
              </div>
            </div>
            <div className='intro-right'>
              <div className="intro-img1">
                <img className='intro_img' src="https://www.lottehotel.com/content/dam/lotte-hotel/lotte/hanoi/convention/meetings/crystalballroom/180712-3-2000-con-hanoi-hotel.jpg.thumb.480.480.jpg" alt="" />
                <span className='introtext'>Tiệc & hội nghị</span>
              </div>
            </div>
            <div className='intro-right'>
              <div className="intro-img1">
                <img className='intro_img' src="https://www.lottehotel.com/content/dam/lotte-hotel/lotte/hanoi/facilities/fitness-spa/fitnessrecreationcenter/180712-9-2000-fac-hanoi-hotel.jpg.thumb.480.480.jpg" alt="" />
                <span className='introtext'>Spa & GYM</span>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Hero