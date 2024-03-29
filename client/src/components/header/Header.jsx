import React, { useState } from 'react'
import "./header.css"
import { Link } from "react-router-dom";

function Header() {
    const [openlanguge, setOpenLanguage] = useState(false);
    const [openmoney, setOpenMoney] = useState(false);
    return (
        <div className="topofHead">
            <div className="inner">
                <h1>
                    <Link to="/" className='logo'>
                        <img src="https://www.lottehotel.com/content/dam/lottehotel/components/common/structure/header/gnb_logo_hotels.png" alt="Lotte Hotel logo" className='logoimg' />
                    </Link>
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
                        <Link className='s121' to="/logins">
                            <span>Đăng nhập</span>
                        </Link>
                        <Link className='s121' to='/register'>
                            <span>Đăng ký</span>
                        </Link>
                        <a href="#language" className='s122'>
                            <span
                                onClick={() => setOpenLanguage(!openlanguge)}
                                class="ico-flagg flag-vi">
                                TiếngViệt
                            </span>
                            {openlanguge && <div className='Language'>
                                <ul class="util-view lang-list ui-choice-wrapper">

                                    <li className='ui-choice'>
                                        <span class="ico-flag flag-ko">
                                            한국어
                                        </span>
                                    </li>
                                    <li className='ui-choice'>
                                        <span class="ico-flag flag-en">
                                            English
                                        </span>
                                    </li>

                                    <li className='ui-choice'>
                                        <span class="ico-flag flag-ja">
                                            日本語
                                        </span>
                                    </li>
                                    <li className='ui-choice'>
                                        <span class="ico-flag flag-zh">
                                            中文(简体字)
                                        </span>
                                    </li>

                                </ul>
                            </div>}
                        </a>
                        <a href="#language" className='s122'>
                            <span
                            onClick={() => setOpenMoney(!openmoney)}>VND ^</span>
                            {openmoney && <div className='Money'>
                                <ul class="util-view lang-list ui-choice-wrapper">

                                    <li className='ui-choice'>
                                        <span class="ico-flag">
                                        Australia (AUD)
                                        </span>
                                    </li>
                                    <li className='ui-choice'>
                                        <span class="ico-flag">
                                        Canada (CAD)
                                        </span>
                                    </li>

                                    <li className='ui-choice'>
                                        <span class="ico-flag">
                                        中國 (CNY)
                                        </span>
                                    </li>
                                    <li className='ui-choice'>
                                        <span class="ico-flag">
                                        EU (EUR)
                                        </span>
                                    </li>
                                    <li className='ui-choice'>
                                        <span class="ico-flag">
                                        Hong Kong (HKD)
                                        </span>
                                    </li>
                                    <li className='ui-choice'>
                                        <span class="ico-flag">
                                        日本 (JPY)
                                        </span>
                                    </li>
                                    <li className='ui-choice'>
                                        <span class="ico-flag">
                                        대한민국 (KRW)
                                        </span>
                                    </li>
                                    <li className='ui-choice'>
                                        <span class="ico-flag">
                                        Россия (RUB)
                                        </span>
                                    </li>
                                    <li className='ui-choice'>
                                        <span class="ico-flag">
                                        USA (USD)
                                        </span>
                                    </li>
                                    <li className='ui-choice'>
                                        <span class="ico-flag">
                                        Việt Nam (VND)
                                        </span>
                                    </li>

                                </ul>
                            </div>}
                        </a>
                    </div>
                    <div className="quicksite">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header