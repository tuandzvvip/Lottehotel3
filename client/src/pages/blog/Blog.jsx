import React from 'react'
import "./blog.css"
import Header from '../../components/header/Header'
import Taskbar from '../../components/taskbar/Taskbar'

function Blog() {
    var blogdata = [
        {
            id: 1,
            img: require('../../assets/images/blog1.jpg'),
            date: '08/02/2023',
            title: 'Những lời khuyên để tập BJJ hiệu quả nhất',
            des: 'Tìm kiếm một giáo viên uy tín và học theo hướng dẫn của họ là một trong những cách tốt nhất để tập BJJ hiệu quả. Bạn có thể tìm kiếm thông tin về các giáo viên BJJ uy tín trong cộng đồng các tay võ và tham gia các hoạt động tập luyện của […]',

        },
        {
            id: 2,
            img: require('../../assets/images/blog1.jpg'),
            date: '08/02/2023',
            title: 'Những lời khuyên để tập BJJ hiệu quả nhất',
            des: 'Tìm kiếm một giáo viên uy tín và học theo hướng dẫn của họ là một trong những cách tốt nhất để tập BJJ hiệu quả. Bạn có thể tìm kiếm thông tin về các giáo viên BJJ uy tín trong cộng đồng các tay võ và tham gia các hoạt động tập luyện của […]',
        },
        {
            id: 3,
            img: require('../../assets/images/blog1.jpg'),
            date: '08/02/2023',
            title: 'Những lời khuyên để tập BJJ hiệu quả nhất',
            des: 'Tìm kiếm một giáo viên uy tín và học theo hướng dẫn của họ là một trong những cách tốt nhất để tập BJJ hiệu quả. Bạn có thể tìm kiếm thông tin về các giáo viên BJJ uy tín trong cộng đồng các tay võ và tham gia các hoạt động tập luyện của […]',
        },
        {
            id: 4,
            img: require('../../assets/images/blog1.jpg'),
            date: '08/02/2023',
            title: 'Những lời khuyên để tập BJJ hiệu quả nhất',
            des: 'Tìm kiếm một giáo viên uy tín và học theo hướng dẫn của họ là một trong những cách tốt nhất để tập BJJ hiệu quả. Bạn có thể tìm kiếm thông tin về các giáo viên BJJ uy tín trong cộng đồng các tay võ và tham gia các hoạt động tập luyện của […]',
        }
    ]


    return (
        <div className='blogtong'>
            <div className='top'>
                <Header />
                <Taskbar />
            </div>
            <div className="blogjs">
                <div className="topcontentblog">
                    <div className="blogtitle">
                        <span>Trang chủ</span>
                        <span> | </span>
                        <span className='spanlog'>Blog &gt;</span>
                    </div>
                    <div className="ttblog">
                        <label>Blog</label>
                    </div>
                    <div className="botraptong">
                        <div className="blog1">
                            <img className='imgblog' src="https://fighterviet.com/wp-content/uploads/2023/02/nhung-loi-khuyen-de-tap-bjj-hieu-qua.jpg" alt="" /><br/>
                            <label className='titleb'>Những lời khuyên để tập BJJ hiệu quả nhất</label> <br />
                            <span className='dateblog'>08/02/2023</span>
                            <p className='desblog'>Tìm kiếm một giáo viên uy tín và học theo hướng dẫn của họ là một trong những cách tốt nhất để tập BJJ hiệu quả. Bạn có thể tìm kiếm thông tin về các giáo viên BJJ uy tín trong cộng đồng các tay võ và tham gia các hoạt động tập luyện của […]</p>
                        </div>
                        <div className="blog1">
                            <img className='imgblog' src="https://fighterviet.com/wp-content/uploads/2022/12/tdee-la-gi-va-cach-tinh-tdee.jpg" alt="" /><br/>
                            <label className='titleb'>TDEE là gì? Cách tính TDEE chuẩn nhất</label> <br />
                            <span className='dateblog'>01/01/2023</span>
                            <p className='desblog'>Khi muốn kiểm soát cần nặng thì điều bạn nên quan tâm chính là số lượng calo hấp thụ và tiêu thụ trong một ngày, từ đó, muốn kiểm tra lượng calo của bản thân thì công thức tính toán TDEE là thứ cần biết. Vậy TDEE là gì? TDEE được tính như thế nào? […]</p>
                        </div>
                    </div>
                    <div className="paging">
                        <span>1  2  3  ...  7  &gt;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog