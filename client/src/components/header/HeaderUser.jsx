import React, { useState } from 'react'
import "./header.css"
import { Link } from "react-router-dom";

function HeaderUser() {
  return (
    <div className="topofHead">
            <div className="inner">
                <h1>
                    <Link to="/" className='logo'>
                        <img src="https://www.lottehotel.com/content/dam/lottehotel/components/common/structure/header/gnb_logo_hotels.png" alt="Lotte Hotel logo" className='logoimg' />
                    </Link>
                </h1>
                <h1 className='texttt'>
                    Chúc mừng bạn đã đăng nhập thành công
                </h1>
                <div className="s598-quick">
                    <div className="quicklist">
                        <a href="/global/vi.html" className='s121'>
                            <img src="https://www.lottehotel.com/content/dam/lottehotel/components/common/structure/header/tmp_global.png" />
                            <span>Toàn cầu</span>
                        </a>
                        <a className='s121' href="https://www.lottehotel.com/global/vi/hotel-finder.html">
                            <span>Tìm kiếm khách sạn</span>
                        </a>
                        <a className='s121' href="https://www.lottehotel.com/global/vi/reservation/view-reservation.html">
                            <span>Đặt phòng</span>
                        </a>
                    </div>
                    <div className="quicksite">

                    </div>
                </div>
            </div>
        </div>
  )
}

export default HeaderUser