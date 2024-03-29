import React from 'react'
import "./content2.css"
import { Link } from "react-router-dom";

function Content2() {
    return (
        <div className='Ct1'>
            <div className="inner1">
                <div className="title1">
                    <p className='tit'>Đăng ký Thành viên để tận hưởng nhiều ưu đãi</p>
                </div>
                <div className="benefit1">
                    <div className="benefit-item">
                        <div className="img-area">
                            <img src="https://www.lottehotel.com/content/dam/lotte-hotel/common/member/pc-mai-rewards1.png" alt="" />
                        </div>
                        <div className="text-area">
                            <span>Ưu đãi sử dụng dịch vụ dành <br /> riêng cho Thành viên</span>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <div className="img-area">
                            <img src="https://www.lottehotel.com/content/dam/lotte-hotel/common/member/pc-mai-rewards2.png" alt="" />
                        </div>
                        <div className="text-area">
                            <span>Giá phòng ưu đãi dành riêng <br /> cho Thành viên</span>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <div className="img-area">
                            <img src="https://www.lottehotel.com/content/dam/lotte-hotel/common/member/pc-mai-rewards3.png" alt="" />
                        </div>
                        <div className="text-area">
                            <span>Tích điểm và đổi thưởng</span>
                        </div>
                    </div>
                </div>
                <div className="btn-area12">
                    <Link to='/blog'>
                    <button className='btn_area1'>
                    <span>Đăng ký LOTTE HOTEL Rewards</span>
                    </button>
                    </Link>
                </div>
            </div>
            <div className="inner2">
                <div className="content-inner2">
                    <p className='p-inner2'>LOTTE HOTELS &amp; RESORTS là chuỗi khách sạn lớn nhất tại Hàn Quốc. Với tư cách là một chuỗi khách sạn toàn cầu đã vượt ra ngoài châu Á và hội nhập với Thế Giới, chúng tôi hướng tới mục tiêu trở thành một thương hiệu mang lại ấn tượng sâu sắc cho khách hàng bằng dịch vụ và cơ sở vật chất tuyệt vời.<br />Chúng tôi hướng tới lối sống cân bằng và tinh tế cho khách hàng của mình. Với hệ thống phòng đẳng cấp mang lại cảm giác sang trọng mà hiện đại và chú ý đến từng chi tiết, chúng tôi hi vọng các khách hàng của mình có thể đạt được sự cân bằng trong cuộc sống tại Lotte Hotel.</p>
                </div>
            </div>
        </div>
    )
}

export default Content2