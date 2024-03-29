import React, { useState } from 'react';
import { format } from "date-fns";
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import "./register1.css"

function Register1() {
    const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    
    // Thêm các checkbox khác nếu cần
  });

  const handleSelectAllChange = () => {
    const updatedCheckboxes = {};
    for (const key in checkboxes) {
      updatedCheckboxes[key] = !selectAll;
    }
    setCheckboxes(updatedCheckboxes);
    setSelectAll(prevState => !prevState);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes(prevState => ({
      ...prevState,
      [name]: checked
    }));
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
    <div>
        <div className="top">
                <Header/>
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
            </div>
            <div className="middle">
                <div className="name-dining">
                    <span>Trang chủ </span>
                    <span>/</span>
                    <span>Tham gia</span>
                    <span>/</span>
                    <span className='dieukhoan'>Điều khoản sử dụng</span>
                </div>
                <div className="content-dieukhoan">
                    <label className='lbdieukhoan'>Chấp nhận các Điều khoản và Điều kiện</label>
                    <div className="sodieukhoan">
                        <ol class="step-process">
                            <li><a href="#" class="is-active">Chấp nhận các Điều khoản và Điều kiện</a></li>
                            <li><a href="#" class="is-done">Chèn thông tin thành viên</a></li>
                            <li><a href="#" class="is-done">Hoàn thành đăng ký</a></li>
                        </ol>
                    </div>
                    <span>Đồng ý tất cả” bao gồm chấp thuận tất cả các mục bắt buộc và tùy chọn, nhưng quý khách có thể chọn các mục để chấp thuận riêng.</span><br />
                    <span>Quý khách vẫn có thể sử dụng các dịch vụ của chúng tôi ngay cả khi quý khách không đồng ý với các mục tùy chọn.</span><br />
                    <span>Để đăng ký tư cách thành viên LOTTE HOTEL REWARDS, HOTEL LOTTE Co., Ltd. (sau đây gọi là “Công ty”) yêu cầu thu thập, sử dụng và tiết lộ thông tin cá nhân như được nêu<br /> bên dưới.</span>
                </div>
                <div className="dongytatca">
                    <div className="agree-all-item">
                        <input type="checkbox" className='ckall' checked={selectAll} 
        onChange={handleSelectAllChange} />
                        <label>Đồng ý tất cả</label>
                    </div>
                    <div className="agree-item">
                        <div className="itemleft">
                            <input type="checkbox" className='ckitem' name="checkbox1" 
        checked={checkboxes.checkbox1} 
        onChange={handleCheckboxChange} />
                            <span className='itemleft1'>Các Điều khoản và Điều kiện Thành viên LOTTE HOTEL REWARDS </span>
                            <span className='batbuoc'>(bắt buộc)</span>
                        </div>
                        <div className="itemright">
                            <button className='btn-item'>Xem các điều khoản &gt;</button>
                        </div>
                    </div>
                    <div className="agree-item">
                        <div className="itemleft">
                            <input type="checkbox" className='ckitem' name="checkbox2" 
        checked={checkboxes.checkbox2} 
        onChange={handleCheckboxChange} />
                            <span className='itemleft1'>Đồng ý với việc thu thập và sử dụng thông tin cá nhân </span>
                            <span className='batbuoc'>(bắt buộc)</span>
                        </div>
                        <div className="itemright">
                            <button className='btn-item'>Xem các điều khoản &gt;</button>
                        </div>
                    </div>
                    <div className="agree-item">
                        <div className="itemleft">
                            <input type="checkbox" className='ckitem' name="checkbox2" 
        checked={checkboxes.checkbox3} 
        onChange={handleCheckboxChange} />
                            <div className="daiqua">
                                <span className='itemleft1'>Chấp thuận tiết lộ thông tin cá nhân cho bên thứ ba – Các mục liên quan đến việc tiết lộ thông tin của bên thứ ba cho các bộ phận kinh doanh <br /> trong và ngoài nước của Công ty </span>
                                <span className='batbuoc'>(bắt buộc)</span>
                            </div>
                        </div>
                        <div className="itemright">
                            <button className='btn-item'>Xem các điều khoản &gt;</button>
                        </div>
                    </div>
                    <div className="agree-item">
                        <div className="itemleft">
                            <input type="checkbox" className='ckitem' name="checkbox2" 
        checked={checkboxes.checkbox4} 
        onChange={handleCheckboxChange} />
                            <span className='itemleft1'>Các mục liên quan đến việc tiết lộ thông tin cá nhân cho bên thứ ba – Liên kết</span>
                            <span className='kbatbuoc'>(không bắt buộc)</span>
                        </div>
                        <div className="itemright">
                            <button className='btn-item'>Xem các điều khoản &gt;</button>
                        </div>
                    </div>
                    <div className="agree-item">
                        <div className="itemleft">
                            <input type="checkbox" className='ckitem' name="checkbox2" 
        checked={checkboxes.checkbox5} 
        onChange={handleCheckboxChange} />
                            <div className="daiqua">
                                <span className='itemleft1'>Chấp thuận cho phép thu thập và sử dụng thông tin cá nhân để nhận thông tin liên quan đến sản phẩm và dịch vụ cho mục đích<br /> tiếp thị </span>
                                <span className='kbatbuoc'>(không bắt buộc)</span>
                            </div>
                        </div>
                        <div className="itemright">
                            <button className='btn-item'>Xem các điều khoản &gt;</button>
                        </div>
                    </div>
                    <div className="agree-item">
                        <div className="itemleft">
                            <input type="checkbox" className='ckitem' name="checkbox2" 
        checked={checkboxes.checkbox6} 
        onChange={handleCheckboxChange} />
                            <span className='itemleft1'>Đồng ý cung cấp thông tin cá nhân cho bên thứ ba để phục vụ mục đích tiếp thị và và cung cấp thông tin về sản phẩm</span>
                            <span className='kbatbuoc'>(không bắt buộc)</span>
                        </div>
                        <div className="itemright">
                            <button className='btn-item'>Xem các điều khoản &gt;</button>
                        </div>
                    </div>

                </div>

            </div>
            <div class="confirm-bar">
                <div class="btn-group">
                    <p class="txt">Tất cả các điều khoản và điều kiện đã được chấp nhận. Tiếp tục đến bước tiếp theo</p>
                    <div class="btn-area">
                        <Link to="/register">
                            <button type="button" class="btn prev-btn">
                                <span>Hủy</span>
                            </button>
                        </Link>
                        <Link to='/register2'>
                            <button type="submit" class="btn next-btn" >
                                <span>Tiếp theo</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer1">
                <Footer />
            </div>
    </div>
  )
}

export default Register1