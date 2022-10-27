import React from 'react'

// const Avatar = () => {
//   return (
//       <img
//           className="profile-image"
//           src="https://cdn-icons-png.flaticon.com/512/2520/2520864.png"
//           alt="avatar"
//           // style={{width: 100}}
//           />
//   )
// };

const AboutContent = () =>{

  const Txt = [{
    main_txt: "Mail Chap is a new cool way to connect to new friends over a social network.",
    sub_txt: "Click on users, find a profile that matches yourt taste and make new friends."
  }]

  const AboutRender = Txt.map((about) => {

    return(
      <div className='about-container'>
        <div className="about-txt">

        <h2 className='Main-txt'>{about.main_txt} <br></br>  <br></br> <span>{about.sub_txt}</span></h2>
        </div>
        
        
        {/* <  Avatar /> */}
      </div>
    )
  })

  return (
    <section>{AboutRender}</section>
  )
}
const AboutUs = () => {
  return (
    <>
    <AboutContent/>
    </>
  )
}

export default AboutUs;
