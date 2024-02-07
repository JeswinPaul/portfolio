import React from 'react'
import './style.css'

export default function Projects() {
  return (
    <div className='Projects'>
        <span>
            {data?.map((item, index)=>{
              return(
                <div className='Projects_Con'>
                  <img key={index} src={item?.img}/>
                  <h3>{item?.title}</h3>
                  <p>My Role: {item?.role}</p>
                  <div className='Projects_Con_Badge'>
                    {item?.type || "Website"}
                  </div>
                </div>
              )
            })}
        </span>
        <div className='Projects_Design1'/>
    </div>
  )
}

const data = [
  {img:require('../assets/1.webp'), url:"", title:"Inovador TechSolutions", role:"Front-End developer"},
  {img:require('../assets/2.webp'), url:"", title:"Plan B Dental Clinic",role:"Front-End developer"},
  {img:require('../assets/3.webp'), url:"", title:"PE Fitness",role:"Front-End developer"},
  {img:require('../assets/5.webp'), url:"", title:"Backgen.io", role:"Full stack developer", type:"Web App"},
  {img:require('../assets/6.webp'), url:"", title:"Maya Mask",role:"Front-End developer"},
  {img:require('../assets/7.webp'), url:"", title:"Zybertone",role:"Front-End developer"},
  {img:require('../assets/8.webp'), url:"", title:"Evermore",role:"Front-End developer"},
  {img:require('../assets/9.webp'), url:"", title:"Farming Underdogs",role:"Front-End developer"},
  {img:require('../assets/10.webp'), url:"", title:"Love Llamas", role:"Front-End developer"},
  {img:require('../assets/11.webp'), url:"", title:"Zlize",role:"Full stack developer", type:"Web App"},
  {img:require('../assets/12.webp'), url:"", title:"Finncare Travel",role:"Full stack developer", type:"Web App"},
  {img:require('../assets/13.webp'), url:"", title:"Unstopable Blue Eagles",role:"Front-End developer"},
  {img:require('../assets/14.webp'), url:"", title:"Xand",role:"Full stack developer", type:"Web App"},
  {img:require('../assets/15.webp'), url:"", title:"Zwink",role:"Full stack developer", type:"Web App"},
  {img:require('../assets/4.webp'), url:"", title:"HDS", role:"Front-End developer"},
  {img:require('../assets/17.webp'), url:"", title:"YFC Event App", role:"Full stack developer", type:"Mobile"},
  {img:require('../assets/18.webp'), url:"", title:"Zwink Education App", role:"Full stack developer", type:"Mobile"},
  {img:require('../assets/19.webp'), url:"", title:"Saturate", role:"Full stack developer", type:"Mobile"},
]