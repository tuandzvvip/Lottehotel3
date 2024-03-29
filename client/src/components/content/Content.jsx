import React from 'react'
import "./content.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Content() {
  
  const servicesData = [
    {
      id: 1,
      img: 'https://pix8.agoda.net/hotelImages/22423667/-1/c8b11fd11884172c23959f0ccb4ebfc0.jpg?ca=19&ce=1',
      des: "Khách sạn LOTTE HÀ NỘI",
      place: 'Kỳ nghỉ đong đầy hạnh phúc',
      title: 'Phòng Deluxe | Gia đình | Kỳ nghỉ | Ưu đãi tại nhà hàng',
      strong1: 'Ở lại :',
      destrong1: ' Jan 19, 2024-Feb 29, 2024',
      strong2: 'Đặt phòng :',
      destrong2: ' Jan 19, 2024-Feb 29, 2024',
      span: 'PACKAGE',
      from: 'From',
      cost: '3,600,000VND'
    },
    {
      id: 2,
      img: 'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/hanoi/promotion/package/4644-1440-pkg-LTHA.jpg.thumb.480.480.jpg',
      des: "Khách sạn LOTTE HÀ NỘI",
      place: 'Kỳ Nghỉ Lãng Mạn Trong Lòng Thành Phố',
      title: '2 Người lớn | Club Junior Suite hoặc Deluxe Suite | Trang trí phòng | Quà tặng Chanel',
      strong1: 'Ở lại :',
      destrong1: ' Jan 19, 2024-Feb 29, 2024',
      strong2: 'Đặt phòng :',
      destrong2: ' Jan 19, 2024-Feb 29, 2024',
      span: 'PACKAGE',
      from: 'From',
      cost: '10,000,000VND'
    },
    {
      id: 3,
      img: 'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/hanoi/promotion/package/3670-02-1440-pkg-LTHA.jpg.thumb.480.480.jpg',
      des: "Khách sạn LOTTE HÀ NỘI",
      place: 'Xách vali lên và đi',
      title: '2 Người lớn | Phòng Deluxe hoặc Phòng Club Junior Suite | Ăn sáng | Đưa đón sân bay',
      strong1: 'Ở lại :',
      destrong1: ' Jan 19, 2024-Feb 29, 2024',
      strong2: 'Đặt phòng :',
      destrong2: ' Jan 19, 2024-Feb 29, 2024',
      span: 'PACKAGE',
      from: 'From',
      cost: '4,500,000VND'
    }
  ]
  return (
    <section id="content">
      <div className='content'>
      <div className="contentlabel">
        <div className="contentlabel1">
          <span>Ưu đãi đặc biệt từ
            <br />
            KHÁCH SẠN LOTTE HÀ NỘI</span>
        </div>
        <a className='contentlabel2' href="https://www.lottehotel.com/hanoi-hotel/vi/hotel-offers/packages.html">Xem thêm &gt;</a>
      </div>
      <div className="slidecontent">
      <Container fluid>
              <div>
              </div>
              <Row>
                {
                  servicesData.map(services => {
                    return (
                      <Col sm={4} className='holder' key={services.id}>
                        <div className="imgservices">
                          <a href="https://www.lottehotel.com/hanoi-hotel/vi/hotel-offers/packages/2024-01/A-Blissful-Tet-Package.html">
                            <img className='imgservice' src={services.img} />
                          </a>
                        </div>
                        <div className="txt-promotion">
                          <div className="category-hotel">
                            <span className='spancategory'>{services.des}</span>
                          </div>
                          <div className="place">{services.place}</div>
                          <div className="title">
                            <span>{services.title}</span>
                          </div>
                          <div className="promotion-date">
                            <strong>{services.strong1}</strong>
                            <span>{services.destrong1}</span>
                          </div>
                          <div className="promotion-date1">
                            <strong>{services.strong2}</strong>
                            <span>{services.destrong2}</span>
                          </div>

                        </div>
                        <div className="promotion-price">
                          <span className='category'>{services.span}</span>
                          <div className="price">
                            <span className='promotion-price__currency'>{services.from}</span>
                            <strong className='conversionCurrency'>{services.cost}</strong>
                          </div>
                        </div>
                      </Col>
                    );
                  })
                }
              </Row>
            </Container>
      </div>
    </div>
    </section>
  )
}

export default Content