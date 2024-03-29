import React from 'react'
import "./content1.css"

function COntent1() {
    return (
        <div className='Content1'>
            <h1>Trải nghiệm đặc biệt tại KHÁCH SẠN LOTTE HÀ NỘI</h1>
            <div className="Phan1">
                <div className="anh1">
                    <img src="https://www.lottehotel.com/content/dam/lotte-hotel/lotte/hanoi/main/4646-558-mai-LTHA.jpg" alt="" />
                </div>
                <div className="contentPhan1">
                    <div className="khoangtrong"></div>
                    <h3 className='topcontent'>Top of Hanoi đã quay trở lại với diện
                        <br /> mạo mới!</h3>
                    <div className="divt1">
                        <span className='t1'>Không chỉ là quán bar cao nhất Hà Nội với tầm nhìn thành phố tuyệt hảo,
                            <br /> Top of Hanoi đã trở thành thiên đường giải trí về đêm mà bạn hằng yêu
                            <br />thích.</span>
                    </div>
                    <br />
                    <a className='t2' href="https://www.lottehotel.com/hanoi-hotel/vi/dining/restaurant-top-of-hanoi.html">Xem chi tiết &gt; </a>
                </div>
            </div>
            <div className="Phan2">
                <div className="contentPhan2">
                    <div className="khoangtrong2"></div>
                    <h3 className='topcontent'>Pharaoh's Bar & Upper
                    </h3>
                    <div className="divt1">
                        <span className='t1'>Nếu bạn đang tìm kiếm một quán bar thời thượng với những loại cocktail
                            <br /> tuyệt hảo, Pharaoh's Bar & Upper sẽ là sự lựa chọn hợp lí nhất cho bạn.
                        </span>
                    </div>
                    <br />
                    <a className='t2' href="https://www.lottehotel.com/hanoi-hotel/vi/dining/restaurant-top-of-hanoi.html">Xem chi tiết &gt; </a>
                </div>
                <div className="anh2">
                    <img src="https://www.lottehotel.com/content/dam/lotte-hotel/lotte/hanoi/main/3283-02-558-mai-LTHA.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default COntent1