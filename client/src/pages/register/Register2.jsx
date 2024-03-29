import React, { useState } from 'react';
import { format } from "date-fns";
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import { useNavigate } from "react-router-dom";
import Header from '../../components/header/Header';
import { Link } from "react-router-dom";
import Footer from '../../components/footer/Footer';
import axios from "axios";
import "./register2.css";

function Register2() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [region, setRegion] = useState("");
  const [fullname, setFullname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [Contact, setContact]= useState("");
  console.log(username, email, password);
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/v1/user/register", {
        username,
        email,
        password,
        region,
        fullname,
        birthday,
        Contact,
      });
      res.data && window.location.replace("/logins");
    } catch (err) {
      setError(true);
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
    <div>
      <div className="top">
        <Header />
        <div className="navbar-dining1">
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
          <span className='dieukhoan'>Thông tin Tư cách thành viên</span>
        </div>
        <div className="content-dieukhoan">
          <label className='lbdieukhoan'>Chèn thông tin thành viên</label>
          <div className="sodieukhoan">
            <ol class="step-process">
              <li><a href="#" class="is-active">Chấp nhận các Điều khoản và Điều kiện</a></li>
              <li><a href="#" class="is-done">Chèn thông tin thành viên</a></li>
              <li><a href="#" class="is-done">Hoàn thành đăng ký</a></li>
            </ol>
          </div>
        </div>
        <div className="truongthongtin">
          <div className="trgbatbuoc1">
            <label className='trgbatbuoc'>*Trường bắt buộc</label>
          </div>

          <form className='registerForm' onSubmit={handleSubmit}>
            <div className="userid">
              <span className='spbatbuoc'>USER ID*</span>
              <div className="sanco">
                <input type="text" className='inputbatbuoc' placeholder='Nhập ID của quý khách'
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button className='susanco'>Kiểm tra về sự sẵn có</button>
              </div>
            </div>
            <div className="email">
              <span className='spbatbuoc'>Email*</span>
              <div className="sanco">
                <input type="text" className='inputbatbuoc' placeholder='Nhập địa chỉ email của quý khách'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className='susanco'>Kiểm tra về sự sẵn có</button>
              </div>
            </div>
            <div className="matkhau">
              <span className='spbatbuoc'>Mật khẩu*</span>
              <div>
                <input type="password" className='inputbatbuoc' placeholder='Vui lòng nhập mật khẩu của bạn'
                  onChange={(e) => setPassword(e.target.value)} />
                <input type="password" className='inputbatbuoc' placeholder='Xác nhận mật khẩu của quý khách' />
              </div>
              <div className="tbaomk">
                <span className='tbaomkid'>Mật khẩu chứa ID người dùng, tên, ngày sinh, số điện thoại di động và thông tin cá nhân khác của bạn có thể không an toàn.</span>
              </div>
            </div>
            <div className="quocgia">
              <span className='spbatbuoc'>Quốc gia*</span><br />
              <input type="text" className='inputbatbuoc' placeholder='Việt Nam' 
              onChange={(e) => setRegion(e.target.value)}/>
            </div>
            <div className="tentienganh">
              <span className='spbatbuoc'>Tên bằng tiếng Anh*</span>
              <div>
                <input type="text" className='inputbatbuoc' placeholder='Nhập họ của quý khách bằng Tiếng Anh' />
                <input type="text" className='inputbatbuoc' placeholder='Nhập tên và tên đệm bằng Tiếng Anh' 
                onChange={(e) => setFullname(e.target.value)}/>
              </div>
            </div>
            <div className="ngaysinh">
              <span className='spbatbuoc'>Ngày sinh*</span><br />
              <input type="text" className='inputbatbuoc' placeholder='YYYY/MM/DD' 
              onChange={(e) => setBirthday(e.target.value)}/>
            </div>
            <div className="thongtinlhe">
              <span className='spbatbuoc'>Thông tin Liên hệ*</span>
              <div>
                <input type="text" className='inputbatbuoc' placeholder='VietNam(+84)' />
                <input type="text" className='inputbatbuoc' placeholder='Vui lòng nhập số điện thoại của quý khách' 
                onChange={(e) => setContact(e.target.value)}/>
              </div>
            </div>
            <button type='submit'>Register</button>
          </form>
        </div>
        {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
      </div>
      <div className="footer">
        <div class="confirm-bar">
          <div class="btn-group">
            <p class="txt">Tất cả các điều khoản và điều kiện đã được chấp nhận. Tiếp tục đến bước tiếp theo</p>
            <div class="btn-area">
              <Link to="/register1">
                <button type="button" class="btn prev-btn">
                  <span>Hủy</span>
                </button>
              </Link>
              <Link to='/register3'>
                <button type="submit" class="btn next-btn" >
                  <span>Tiếp theo</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Register2