import React, { useContext, useRef, useState } from 'react';
import "./dining.css"
import { format } from "date-fns";
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import { Link, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Context } from '../../context/Context';
import axios from 'axios';

function Dining() {
    const [error, setError] = useState(false);
    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching} = useContext(Context);
    const handleSubmit = async (e) => {
        // console.log(useRef.current.value, passwordRef.current.value)
        e.preventDefault();
        // dispatch({ type: "LOGIN_START" });
        try{
            const res = await axios.post("http://localhost:5000/v1/user/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
            window.location.replace("/homeuser");
        } catch(err){
            console.log('useRef.current.value, passwordRef.current.value');
            setError(true);
            // dispatch({ type: "LOGIN_FAILURE"});
        }
    };

    const [showbook, setShowBook] = useState(false);
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        })
    };
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate("/hotels", { state: { date, options } });
    };
    const [showuudai, setShowuudai] = useState(false);
    const handleuudaiHover = () => {
        setShowuudai(true);
    }
    const handleuudaiLeave = () => {
        setShowuudai(false);
    }
    const [showlecuoi, setShowlecuoi] = useState(false);
    const handlelecuoiHover = () => {
        setShowlecuoi(true);
    }
    const handlelecuoiLeave = () => {
        setShowlecuoi(false);
    }

    return (
        <div className="dining">
            <div className="navbar-dining">
                <ul className='navi-dining'>
                    <li className='reservation1'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <span
                            onClick={() => setShowBook(!showbook)}
                            className='book-reservation'>BOOK</span>
                        {showbook && <div className='navbar-search'>
                            <div className="col-sm-3 Lottename">
                                <label className='label-khachsan'>Khách sạn</label>
                                <br />
                                <span className='span-khachsan'>Khách sạn LOTTE Hà Nội</span>
                            </div>
                            <div className="col-sm-3 searchdate">
                                <label className='label-date1'>Nhận Phòng</label>
                                <label className='label-date'>Trả Phòng</label>
                                <br />
                                <div className="headerSearchItem">
                                    <span onClick={() => setOpenDate(!openDate)}
                                        className='headerSearchText'>
                                        {`${format(date[0].startDate, "EEE,MMM dd")}   to   ${format(
                                            date[0].endDate,
                                            "EEE,MMM dd"
                                        )}`}
                                    </span>
                                    {openDate && <DateRangePicker
                                        onChange={item => setDate([item.selection])}
                                        showSelectionPreview={true}
                                        moveRangeOnFirstSelection={false}
                                        months={2}
                                        ranges={date}
                                        direction="horizontal"
                                        preventSnapRefocus={true}
                                        calendarFocus="backwards"
                                        className='date'
                                    />}
                                </div>

                            </div>
                            <div className="col-sm-2 searchroom">
                                <div className="headerSearchItem">
                                    <label className='labelroom'>Số Lượng</label>
                                    <br />
                                    <span
                                        onClick={() => setOpenOptions(!openOptions)}
                                        className='headerSearchText'>
                                        {`${options.adult} Adult · ${options.children} Child · ${options.room} Room`}
                                    </span>
                                    {openOptions && <div className="options">
                                        <div className="optionItem">
                                            <span className='optionText'>Người lớn</span>
                                            <div className="optionCounter">
                                                <button className='optionCounterButton'
                                                    disabled={options.adult <= 1}
                                                    onClick={() => handleOption("adult", "d")}
                                                >-</button>
                                                <span className='optionCounterNumber'>
                                                    {options.adult}
                                                </span>
                                                <button className='optionCounterButton'
                                                    onClick={() => handleOption("adult", "i")}
                                                >+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className='optionText'>Trẻ em</span>
                                            <div className="optionCounter">
                                                <button className='optionCounterButton'
                                                    disabled={options.children <= 0}
                                                    onClick={() => handleOption("children", "d")}
                                                >-</button>
                                                <span className='optionCounterNumber'>
                                                    {options.children}
                                                </span>
                                                <button className='optionCounterButton'
                                                    onClick={() => handleOption("children", "i")}
                                                >+</button>
                                            </div>

                                        </div>
                                        <div className="optionItem">
                                            <span className='optionText'>Room</span>
                                            <div className="optionCounter">
                                                <button className='optionCounterButton'
                                                    disabled={options.room <= 1}
                                                    onClick={() => handleOption("room", "d")}
                                                >-</button>
                                                <span className='optionCounterNumber'>
                                                    {options.room}
                                                </span>
                                                <button className='optionCounterButton'
                                                    onClick={() => handleOption("room", "i")}
                                                >+</button>
                                            </div>

                                        </div>
                                    </div>}
                                </div>
                            </div>
                            <div className="col-sm-4 khuyenmai">
                                <div className="contentkhuyenmai">
                                    <i class="fa-solid fa-layer-group"></i>
                                    <span className='contentkhuyenmai1'>mã khuyến mãi</span>
                                </div>
                                <div className="timkiem">
                                    <button className='btntimkiem' onClick={handleSearch}>Tìm kiếm</button>
                                </div>
                            </div>

                        </div>}
                    </li>
                    <li className='mobshow-dining'>
                        DINING
                    </li>
                    <li className='mobshow-dining'
                        onMouseEnter={handleuudaiHover}
                        onMouseLeave={handleuudaiLeave}
                    >Ưu Đãi
                        {showuudai && (
                            <div className="detail-info1"
                                onMouseEnter={handleuudaiHover}
                                onMouseLeave={handleuudaiLeave}>
                                <div className="col-sm-3 panel-wrap">
                                    <div className="panel-align">
                                        <a class="menu-1depth-ttl" href="/hanoi-hotel/vi/information.html" >
                                            Ưu Đãi &gt;
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-9 panel-align1">
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Gói Nghỉ Dưỡng &Ưu Đãi Phòng</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">Ưu Đãi Ẩm Thực</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >Trải Nghiệm</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                    <li className='mobshow-dining'
                        onMouseEnter={handlelecuoiHover}
                        onMouseLeave={handlelecuoiLeave}
                    >Lễ Cưới &Hội Nghị
                        {showlecuoi && (
                            <div className="detail-info1"
                                onMouseEnter={handlelecuoiHover}
                                onMouseLeave={handlelecuoiLeave}>
                                <div className="col-sm-3 panel-wrap">
                                    <div className="panel-align">
                                        <a class="menu-1depth-ttl" href="/hanoi-hotel/vi/information.html" >
                                            Lễ Cưới <br /> &Hội Nghị &gt;
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-9 panel-align1">
                                    <div className="col-sm-4 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Đám cưới tại khách sạn</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Gói khuyến mãi cho lễ cưới</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Địa điểm tổ chức lễ cưới với LOTTE HOTEL</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Tư vấn đám cưới</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-4 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">Hội nghị tại khách sạn</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Giới thiệu</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Phòng tiệc</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
            <div className="info-dining">
                <div className="name-dining">
                    <span>Trang chủ </span>
                    <span>/</span>
                    <span>Đăng nhập</span>
                </div>
                <div className="contentLogin">
                    <div className="contentLogin1">
                        <span>Đăng Nhập</span>
                    </div>
                </div>
                <div className="login">
                    <div className="login1">
                        <form className='loginForm' onSubmit={handleSubmit}>
                            <div className="nhapinfo">
                                <input type="text" className='loginInput' placeholder='Vui lòng nhập ID hoặc mã số Rewards của quý khách' 
                                ref={userRef}
                                />
                                <br />
                                <input type="password" className='loginInput' placeholder='Vui lòng nhập mật khẩu của bạn' 
                                ref={passwordRef}
                                />
                                <br />

                            </div>
                            <div className="buttonLogin">
                                <button type='submit' disabled={isFetching}>Đăng nhập</button>
                            </div>
                        </form>
                        {error && <span className='tbaoloi' style={{ color: "red", marginTop: "10px" }}>Username or password are wrong!</span>}
                        <div className="luuy1">
                            <div className="luuy">
                                <div className="luuy2">
                                    <input type="checkbox" />
                                    <span>Lưu USER ID và Mã số Chương trình tặng thưởng LOTTE HOTEL REWARDS</span>
                                </div>
                                <div className="luuy3">
                                    <span className='ctluuy'>Tìm ID và Số Thành viên Rewards</span>
                                    <span className='ctluuy'>Tìm kiếm mật khẩu</span>
                                    <Link to="/register">
                                    <span>Đăng ký</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="buttontrong"></div>
                        </div>
                        <div className="anhlogin1">
                            <div className="iconA">
                                <a href="https://appleid.apple.com/auth/authorize?response_type=code%20id_token&client_id=com.lottehotel.ios.LotteHotel.services&redirect_uri=https://www.lottehotel.com/global/ajax/sns.appleLogin.json&scope=email&response_mode=form_post&nonce=a78203a0-f256-4dfb-b7a5-6aff1c840526&state=e28ec926-6742-4775-a080-b29f66d96a6b">
                                    <img src="https://www.lottehotel.com/content/dam/lottehotel/components/common/content/common/d599-sns-login/icon-100-apple.png" alt="" />
                                </a>
                            </div>
                            <div className="iconB">
                                <a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&access_type=offline&scope=email%20profile%20openid&client_id=363073060002-gqk034r4dg851ia65siivb0lks278he4.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.lottehotel.com%2Fglobal%2Fajax%2Fsns.googleLogin.json&state=6b1438b0-1d70-4963-bee4-64647567d251&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow">
                                    <img src="https://www.lottehotel.com/content/dam/lottehotel/components/common/content/common/d599-sns-login/icon-100-google.png" alt="" />
                                </a>
                            </div>
                            <div className="iconC">
                                <a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=0OzgcApHJ_4VA2iMzqBu&redirect_uri=https://www.lottehotel.com/global/ajax/sns.naverLogin.json&state=899ca037-d50b-4622-9608-e11aa5053a56">
                                    <img src="https://www.lottehotel.com/content/dam/lottehotel/components/common/content/common/d599-sns-login/icon-100-naver.png" alt="" />
                                </a>
                            </div>
                            <div className="iconD">
                                <a href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fwww.lottehotel.com%252Fglobal%252Fajax%252Fsns.kakaoLogin.json%26through_account%3Dtrue%26client_id%3Db9d82f541311e03b0757ad014aefc273#login">
                                    <img src="https://www.lottehotel.com/content/dam/lottehotel/components/common/content/common/d599-sns-login/icon-100-kakao.png" alt="" />
                                </a>
                            </div>
                            <div className="iconE">
                                <a href="https://members.lpoint.com/lgnView/login/lpointLogin_01_001">
                                    <img src="https://www.lottehotel.com/content/dam/lottehotel/components/common/content/common/d599-sns-login/icon-100-lpoint.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="anhlogin2">
                            <div className="anh1login">
                                <a className='ctlogin2' href="https://www.lottehotel.com/global/vi/member/sign-up/privilege-member.html?returnUrl=https%3A%2F%2Fwww.lottehotel.com%2Fglobal%2Fvi%2Fmember%2Fjoin%2Fterms-of-use.html%3FreturnUrl%3Dhttps%253A%252F%252Fwww.lottehotel.com%252Fhanoi-hotel%252Fvi.html">
                                    <p class="s600-join__tit">Đây có phải là lần đầu tiên quý khách đăng ký không?</p>
                                    <div class="s600-join__txt">
                                        <div class="s600__arw">
                                            <span>LOTTE HOTEL REWARDS<br />Đăng ký trở thành hội viên mới &gt;</span>
                                        </div>
                                    </div>
                                </a>
                                <div class="imglogin"><img src="https://www.lottehotel.com/content/dam/lotte-hotel/common/login-banner-member-01-pc.jpg" /></div>
                            </div>
                            <div className="anh2login">
                                <a className='ctlogin2' href="https://www.lottehotel.com/global/vi/member/join/terms-of-use.html?returnUrl=https%3A%2F%2Fwww.lottehotel.com%2Fglobal%2Fvi%2Fmember%2Fjoin%2Fterms-of-use.html%3FreturnUrl%3Dhttps%253A%252F%252Fwww.lottehotel.com%252Fhanoi-hotel%252Fvi.html">
                                    <p class="s600-join__tit">Quý khách đã đăng ký tại một chuỗi khách sạn chưa?</p>
                                    <div class="s600-join__txt">
                                        <div class="s600__arw">
                                            <span>LOTTE HOTEL REWARDS<br />Kích hoạt tài khoản trực tuyến &gt;</span>
                                        </div>
                                    </div>
                                </a>
                                <div class="imglogin"><img src="https://www.lottehotel.com/content/dam/lotte-hotel/common/login-banner-member-02-pc.jpg" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tabledining">
                    <div className="cttable"><span className='contenttable'>Sơ lược về các quyền lợi theo hạng hội viên ?</span></div>
                    <div className="tableday">
                        <Table striped="columns">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th><img src="https://www.lottehotel.com/content/dam/lottehotel/components/common/content/common/s547-membership-benefit/s547_platinum.png" alt="" />
                                    <span className='platium'>Platium</span></th>
                                    <th><img src="https://www.lottehotel.com/content/dam/lottehotel/components/common/content/common/s547-membership-benefit/s547_gold.png" alt="" />
                                    <span className='gold'>Gold</span></th>
                                    <th><img src="https://www.lottehotel.com/content/dam/lottehotel/components/common/content/common/s547-membership-benefit/s547_silver.png" alt="" />
                                    <span className='silver'>Silver</span></th>
                                    <th><img src="https://www.lottehotel.com/content/dam/lottehotel/components/common/content/common/s547-membership-benefit/s547_classic.png" alt="" />
                                    <span className='classic'>Classic</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Điều kiện đối với các hạng hội viên</td>
                                    <td>Số lượng đêm 50 đêm trở lên
                                        or
                                        Số điểm đủ điều kiện 70.000 điểm trở lên</td>
                                    <td>Số lượng đêm 25 đêm trở lên
                                        or
                                        Số điểm đủ điều kiện 20.000 điểm trở lên</td>
                                    <td>Số lượng đêm 5 đêm trở lên
                                        or
                                        Số điểm đủ điều kiện 1.500 điểm trở lên</td>
                                    <td>Ngay khi đăng ký</td>
                                </tr>
                                <tr>
                                    <td>Số điểm thưởng đã tích lũy</td>
                                    <td>10%</td>
                                    <td>8%</td>
                                    <td>6%</td>
                                    <td>4%</td>
                                </tr>
                                <tr>
                                    <td>Giảm giá Đồ ăn và Đồ uống</td>
                                    <td>10%</td>
                                    <td>10%</td>
                                    <td>5%</td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <td>Giảm phí dịch vụ giặt là</td>
                                    <td>20%</td>
                                    <td>15%</td>
                                    <td>10%</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Phiếu điểm thưởng LH</td>
                                    <td>2 x phiếu giảm giá 50 USD</td>
                                    <td>2 x phiếu giảm giá 50 USD</td>
                                    <td>1 x phiếu giảm giá 50 USD</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Giảm giá cho bộ chăn ga gối đệm He:on</td>
                                    <td>20~25%</td>
                                    <td>10~15%</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Nâng hạng phòng*</td>
                                    <td>O</td>
                                    <td>O</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Phiếu giảm giá nâng hạng phòng (Phiếu giảm giá trực tuyến)*</td>
                                    <td>5 phiếu giảm giá</td>
                                    <td>3 phiếu giảm giá</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Miễn phí vào Club Lounge cho 1 khách đi cùng (Chỉ giới hạn khi ở phòng câu lạc bộ)①</td>
                                    <td>O</td>
                                    <td>O</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Miễn phí vào Club Lounge cho 1 người (Phiếu giảm giá trực tuyến) ②</td>
                                    <td>3 phiếu giảm giá</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1 phiếu ăn sáng miễn phí cho 1 người (Phiếu giảm giá trực tuyến)</td>
                                    <td>5 phiếu giảm giá</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Đồ chào mừng*</td>
                                    <td>O</td>
                                    <td>O</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Late Checkout</td>
                                    <td>14:00</td>
                                    <td>14:00</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Phiếu tặng phòng khách sạn miễn phí</td>
                                    <td>Mỗi năm một lần</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Số đêm chuyển đổi cho hạng thành viên của năm tới</td>
                                    <td>O</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Các quyền lợi đặc biệt tiêu chuẩn</td>
                                    <td colSpan={4}>• REWARDS Members only rate provided<br />
                                        • 10–20% discount is available when issuing offline membership card at LOTTE DUTY FREE stores in Korea (limited to certain brands and items)<br />
                                        • Please note that Food & Beverage discount for SIGNIEL(SEOUL, BUSAN) and LOTTE HOTEL YANGON is 10% for Platinum, 5% for Gold. Silver and Classic are not available.<br />
                                        • Online coupon is only available at Lotte Hotels located in Korea.<br />
                                        • [Platinum/Gold] Late Checkout 14:00 Benefits - In July and August (as of check-out date) excluded from All Chain Hotels.<br />
                                        * will be available at LOTTE HOTELS and SIGNIEL(SEOUL, BUSAN)</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dining