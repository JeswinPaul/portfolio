import React from 'react'
import './style.css'

export default function Projects() {
  return (
    <div id='Projects' className='Projects'>
        <span>
            {data?.map((item, index)=>{
              return(
                <a href={item?.url} target='_blank' className='Projects_Con'>
                  <img key={index} src={item?.img}/>
                  <h3>{item?.title}</h3>
                  <p>My Role: {item?.role}</p>
                  <div className='Projects_Con_Badge'>
                    {item?.type || "Website"}
                  </div>
                </a>
              )
            })}
        </span>
        <div className='Projects_Design1'/>
    </div>
  )
}

const data = [
  {img:require('../assets/22.webp'), url:"https://theneofund.com", title:"Neo Funds", role:"Full stack developer", type:"Web App"},
  {img:require('../assets/20.webp'), url:"https://www.mrasaudi.com/", title:"MRA Saudi", role:"Full stack developer", type:"Web App"},
  {img:require('../assets/1.webp'), url:"https://inovadortechsolutions.com", title:"Inovador TechSolutions", role:"Front-End developer"},
  {img:require('../assets/25.webp'), url:"https://uniqbot.vercel.app/", title:"UniqBot (AI App)", role:"Full stack developer", type:"Web App"},
  {img:require('../assets/26.webp'), url:"https://zhacode-taxi.vercel.app/", title:"🚧 Zhacode Taxi 🚧 ", role:"Full stack developer", type:"Web App"},
  {img:require('../assets/23.webp'), url:"https://intent-pro.vercel.app/", title:"Intent health care",role:"Front-End developer"},
  {img:require('../assets/2.webp'), url:"https://www.planbdentalclinic.com", title:"Plan B Dental Clinic",role:"Front-End developer"},
  {img:require('../assets/10.webp'), url:"https://lovellamas.io", title:"Love Llamas", role:"Front-End developer"},
  {img:require('../assets/24.webp'), url:"https://zhacode.com", title:"Zhacode",role:"Front-End developer"},
  {img:require('../assets/5.webp'), url:"https://backgen.io", title:"Backgen.io (personal project)", role:"Full stack developer", type:"Web App"},
  {img:require('../assets/3.webp'), url:"https://pefitness.in/home", title:"🚧 PE Fitness 🚧",role:"Front-End developer"},
  {img:require('../assets/6.webp'), url:"https://mayaprotocol.vercel.app", title:"Maya Mask",role:"Front-End developer"},
  {img:require('../assets/7.webp'), url:"https://zybertone.com", title:"Zybertone",role:"Front-End developer"},
  {img:require('../assets/21.webp'), url:"https://www.donpepe.io", title:"Don pepe",role:"Front-End developer"},
  {img:require('../assets/8.webp'), url:"https://www.rhoxcoin.com/", title:"Rhox Coin",role:"Front-End developer"},
  {img:require('../assets/9.webp'), url:"https://farmingunderdogs.com", title:"Farming Underdogs",role:"Front-End developer"},
  {img:require('../assets/11.webp'), url:"https://zlize.vercel.app", title:"Zlize (personal project)",role:"Full stack developer", type:"Web App"},
  {img:require('../assets/12.webp'), url:"https://finncare-travel.com", title:"Finncare Travel",role:"Full stack developer", type:"Web App"},
  {img:require('../assets/13.webp'), url:"https://ube.app", title:"Unstopable Blue Eagles",role:"Front-End developer"},
  {img:require('../assets/14.webp'), url:"https://xand.app", title:"🚧 Xand 🚧",role:"Full stack developer", type:"Web App"},
  {img:require('../assets/15.webp'), url:"https://steponee.vercel.app/", title:"Zwink",role:"Full stack developer", type:"Web App"},
  {img:require('../assets/4.webp'), url:"https://hds-site.vercel.app/", title:"HDS", role:"Front-End developer"},
  {img:require('../assets/17.webp'), url:"https://play.google.com/store/apps/details?id=org.yfci.connect", title:"YFC Event App (Android/iOS)", role:"Full stack developer", type:"Mobile"},
  {img:require('../assets/18.webp'), url:"https://play.google.com/store/apps/details?id=in.zwink.app", title:"Zwink Education App (Android/iOS)", role:"Full stack developer", type:"Mobile"},
  {img:require('../assets/19.webp'), url:"https://play.google.com/store/apps/details?id=com.mykeystone.yfcsaturate", title:"Saturate (Android/iOS)", role:"Full stack developer", type:"Mobile"},
]