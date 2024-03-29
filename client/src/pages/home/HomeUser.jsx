import React from 'react'
import "./home.css"
import Taskbar from '../../components/taskbar/Taskbar'
import Drag from '../../components/drag/Drag'
import Content from '../../components/content/Content'
import COntent1 from '../../components/content1/COntent1'
import Video from '../../components/video/Video'
import Map from '../../map/Map'
import Hero from '../../components/carousel/Hero'
import Content2 from '../../components/content2/Content2'
import Footer from '../../components/footer/Footer'
import HeaderUser from '../../components/header/HeaderUser'

function HomeUser() {
  return (
    <div className='home'>
      <div className="head">
        <HeaderUser />
        <Taskbar />
      </div>
      <Drag />
      <Content />
      <COntent1 />
      <Video />
      <Map />
      <Hero />
      <Content2 />
      <Footer />
    </div>
  )
}

export default HomeUser