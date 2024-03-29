import React, { useState } from 'react';
import "./taskbar.css"
import "./navbar.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import { useNavigate } from "react-router-dom";

function Taskbar() {
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

    const [showInfo, setShowInfo] = useState(false);
    const [showRooms, setShowRooms] = useState(false);
    const [showuudai, setShowuudai] = useState(false);
    const [showamthuc, setShowamthuc] = useState(false);
    const [showtiennghi, setShowtiennghi] = useState(false);
    const [showtieccuoi, setShowtieccuoi] = useState(false);
    const [showbook, setShowBook] = useState(true);


    const handleInfoHover = () => {
        setShowInfo(true);
    }
    const handleInfoLeave = () => {
        setShowInfo(false);
    }

    const handleRoomHover = () => {
        setShowRooms(true);

    }
    const handleRoomLeave = () => {
        setShowRooms(false);
    }
    const handleuudaiHover = () => {
        setShowuudai(true);
    }
    const handleuudaiLeave = () => {
        setShowuudai(false);
    }
    const handleamthucHover = () => {
        setShowamthuc(true);
    }
    const handleamthucLeave = () => {
        setShowamthuc(false);
    }
    const handletiennghiHover = () => {
        setShowtiennghi(true);
    }
    const handletiennghiLeave = () => {
        setShowtiennghi(false);
    }
    const handletieccuoiHover = () => {
        setShowtieccuoi(true);
    }
    const handletieccuoiLeave = () => {
        setShowtieccuoi(false);
    }
    return (
        <div className='taskbar'>
            <div className="col-sm-10">
                <ul className='navi-taskbar'>
                    <li className='reservation'>
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
                    <li className='mobshow'
                        onMouseEnter={handleInfoHover}
                        onMouseLeave={handleInfoLeave}
                    >Thông tin về LOTTE Hotel Hà Nội
                        {showInfo && (
                            <div className="detail-info"
                                onMouseEnter={handleInfoHover}
                                onMouseLeave={handleInfoLeave}>
                                <div className="col-sm-3 panel-wrap">
                                    <div className="panel-align">
                                        <a class="menu-1depth-ttl" href="/hanoi-hotel/vi/information.html" >
                                            Thông tin về<br />LOTTE HOTEL HàNội &gt;
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-9 panel-align1">
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Thông tin về LOTTE Hotel Hà Nội</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/about/news.html" class="menu-2depth f-bold">Tin tức</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">Địa điểm của LOTTE Hotel Hà Nội</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="https://www.lottehotel.com/global/en/download-site/download-site-chain.html?propertycode=hanoi-hotel" class="menu-2depth f-bold">Hình ảnh</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >Điểm du lịch Hà Nội</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                    <li className='mobshow'
                        onMouseEnter={handleRoomHover}
                        onMouseLeave={handleRoomLeave}
                    >Phòng
                        {showRooms && (
                            <div className="detail-info"
                                onMouseEnter={handleRoomHover}
                                onMouseLeave={handleRoomLeave}
                            >
                                <div className="col-sm-3 panel-wrap">
                                    <div className="panel-align">
                                        <a class="menu-1depth-ttl" href="/hanoi-hotel/vi/information.html" >
                                            Phòng &gt;
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-9 panel-align1">
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Standard</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/about/news.html" class="menu-2depth f-bold">Phòng Deluxe</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">Phòng Club</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="https://www.lottehotel.com/global/en/download-site/download-site-chain.html?propertycode=hanoi-hotel" class="menu-2depth f-bold">Phòng Deluxe</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">Phòng Junior Suite</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >Suite</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >Phòng Deluxe Suite</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >Phòng Premier Suite</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >Phòng President Suite</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        )}</li>
                    <li className='mobshow'
                        onMouseEnter={handleuudaiHover}
                        onMouseLeave={handleuudaiLeave}>Ưu đãi
                        {showuudai && (
                            <div className="detail-info"
                                onMouseEnter={handleuudaiHover}
                                onMouseLeave={handleuudaiLeave}>
                                <div className="col-sm-3 panel-wrap">
                                    <div className="panel-align">
                                        <a class="menu-1depth-ttl" href="/hanoi-hotel/vi/information.html" >
                                            Ưu đãi &gt;
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-9 panel-align1">
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Gói Nghỉ dưỡng & Ưu đãi phòng</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">Ưu đãi ẩm thực</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >Trải nghiệm</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        )}</li>
                    <li className='mobshow'
                        onMouseEnter={handleamthucHover}
                        onMouseLeave={handleamthucLeave}>Ẩm thực
                        {showamthuc && (
                            <div className="detail-info"
                                onMouseEnter={handleuudaiHover}
                                onMouseLeave={handleuudaiLeave}>
                                <div className="col-sm-3 panel-wrap">
                                    <div className="panel-align">
                                        <a class="menu-1depth-ttl" href="/hanoi-hotel/vi/information.html" >
                                            Ẩm thực &gt;
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-9 panel-align1">
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Nhà hàng</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Grill 63</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Red River</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Tim Ho Wan</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">BAR & LOUNGE</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">Top of Hanoi</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">Pharaoh ' Bar & Upper</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/location.html" class="menu-2depth f-bold">The Lounge Sky</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >BAKERY</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/hanoi-tourist-attractions.html" class="menu-2depth f-bold" >Delica Hans</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        )}</li>
                    <li className='mobshow'
                        onMouseEnter={handletiennghiHover}
                        onMouseLeave={handletiennghiLeave}>Tiện nghi
                        {showtiennghi && (
                            <div className="detail-info"
                                onMouseEnter={handletiennghiHover}
                                onMouseLeave={handletiennghiLeave}>
                                <div className="col-sm-3 panel-wrap">
                                    <div className="col-sm-3 panel-align">
                                        <a class="menu-1depth-ttl" href="/hanoi-hotel/vi/information.html" >
                                        Tiện Nghi &gt;
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-9 panel-align1">
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Spa & Fitness</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Evian Spa</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Phòng tập thể hình khách sạn</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Bể bơi trong nhà</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Bể bơi ngoài trời</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}</li>
                    <li className='mobshow'
                        onMouseEnter={handletieccuoiHover}
                        onMouseLeave={handletieccuoiLeave}>Tiệc cưới&Hội nghị
                        {showtieccuoi && (
                            <div className="detail-info"
                                onMouseEnter={handletiennghiHover}
                                onMouseLeave={handletiennghiLeave}>
                                <div className="col-sm-3 panel-wrap">
                                    <div className="panel-align">
                                        <a class="menu-1depth-ttl" href="/hanoi-hotel/vi/information.html" >
                                            Tiệc cưới & Hội nghị &gt;
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-9 panel-align1">
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Tiệc cưới tại khách sạn</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Phong cách cưới</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Tư vấn</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3 panel-category-wrap">
                                        <ul className='menu-2depth-wrap'>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Hội nghị tại khách sạn</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Phòng Crystal Ballroom</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Phòng Emerald</a>
                                            </li>
                                            <li className='liinfo'>
                                                <a href="/hanoi-hotel/vi/information.html" class="menu-2depth f-bold" >Phòng Charlotte</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}</li>
                </ul>
            </div>
            <div className="col-sm-2">
                <a className='btc' href="https://www.lottehotel.com/global/vi/lotte-hotel-rewards.html">
                    <button className='btn-lotte'>LOTTE HOTEL REWARDS</button>
                </a>
            </div>
        </div>
    )
}

export default Taskbar