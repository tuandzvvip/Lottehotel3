import React from 'react'
import "./hotel.css"
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header';
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Taskbar from '../../components/taskbar/Taskbar';

function Hotel() {
    const location = useLocation();
    console.log(location);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [openOptions, setOpenOptions] = useState(false);
  const handleOption = (name, operation) => {
    setOptions((prev) => {
        return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
    })
};
  return (
    <div>
        <Header />
        <Taskbar/>
        <div className='navbar-search'>
            <div className="Lottename">
                <label className='label-khachsan'>Khách sạn</label>
                <br />
                <span className='span-khachsan'>Khách sạn LOTTE Hà Nội</span>
            </div>
            <div className="searchdate">
                <label className='label-date1'>Nhận Phòng</label>
                <label className='label-date'>Trả Phòng</label>
                <br />
                <div className="headerSearchItem">
                    <span onClick={() => setOpenDate(!openDate)}
                        className='headerSearchText'>
                        {`${format(date[0].startDate, "EEE,MMM dd")}  to  ${format(
                            date[0].endDate,
                            "EEE,MMM dd"
                        )}`}
                    </span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='date'
                    />}
                </div>

            </div>
            <div className="searchroom">
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
            <div className="khuyenmai">
                <div className="contentkhuyenmai">
                    <i class="fa-solid fa-layer-group"></i>
                    <span className='contentkhuyenmai1'>mã khuyến mãi</span>
                </div>
                <div className="timkiem">
                    <button className='btntimkiem'>Tìm kiếm</button>
                </div>
            </div>
            
        </div>
        <div className="img">
            <img className='img' src="https://www.lottehotel.com/content/dam/lotte-hotel/global/promotion/events/231218-1410-evt-GLOBAL_pc.jpg" alt="" />
        </div>
    </div>
  )
}

export default Hotel