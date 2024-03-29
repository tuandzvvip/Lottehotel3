import React from 'react'
import "./map.css"

function Map() {
    return (
        <div className='map'>
            <div className="map1">
                <div className="contentmap">
                    <div className="ct">
                        <h4>KHÁCH SẠN LOTTE HÀ NỘI xa hoa giữa lòng thủ đô</h4>
                        <span>Toạ lạc tại góc cắt giữa hai phố Liễu Giai và Đào Tấn thuộc quận Ba Đình, khách sạn Lotte Hà Nội là sự kết nối và tổng hoà giữa khu phố cổ Hà Nội giàu truyền thống và khu đô thị mới đang ngày một phát triển với tương lai tươi sáng. Khách sạn Lotte Hà Nội tự hào là đại diện cho tiêu chuẩn khách sạn 5 sao quốc tế mới tại Hà Nội.</span>
                    </div>
                    <div className="thoitiet">
                        <span className='diaphuong'>Thời tiết địa phương</span>
                        <div className="thoitiet1">
                            <img src="https://www.lottehotel.com/content/dam/lotte-hotel/global/common/weather/ico_weathr_12.png" alt="" />
                            <div className="nhietdo">
                                <span>Feb 23, 2024 16:23 <br />18.6℃(65)℉</span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ggmap">
                    <iframe className='ggmap1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0201162224344!2d105.80972291095578!3d21.03188108759023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6cecd4ed9d%3A0xaa0bbd53d1491c7a!2zS2jDoWNoIHPhuqFuIExvdHRlIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1708680812688!5m2!1svi!2s" ></iframe>
                </div>
            </div>
            <div className="con">
                <div class="d088-info">
                    <div class="d088-info__time">
                        <p class="d088-info__item">
                            <span>Nhận phòng 15:00</span>
                            <br />
                            <span>Trả phòng 12:00</span>
                        </p>
                    </div>
                    <div class="d088-info__room">
                        <p class="d088-info__item">
                            <span>PHÒNG : 318</span>
                            <br />
                            <span>Ẩm thực : 7</span>
                            <br />

                            <span>Hội nghị : 3</span>
                        </p>
                    </div>
                    <div class="d088-info__tel">

                        <p class="d088-info__item">
                            <span>Số điện thoại :</span>
                            <span>+84-24-3333-1000</span>
                            <br />
                            <span>Đặt phòng :</span>
                            <span class="phone_number">+84-24-3333-1000</span>
                            <br />
                            <span>Fax : +84-24-3333-1100</span></p>

                    </div>
                    <div class="d088-info__facilities">
                        <p class="d088-info__item">
                            <span>Cơ sở tiện ích đáng chú ý : </span>
                            <span>

                                Phòng Hội nghị,

                                Nhà hàng,

                                quán Bar  Lounge,

                                Spa  xông hơi, ,

                                Khu vực phòng tập thể thao,

                                Khu vực Club Floor

                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map