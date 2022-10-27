import React from 'react'
import '../styles/navbar.css'

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

const HomeList = () => {
  const homeContent = [{
    hero_txt:"Mail chap make new friends on the go, Look at profiles and find a match that speaks to you!",
    sub_text: "A friend is a click away",
    sub_sub_txt: "find contacts on the go!"
    
  }]
  const HomeRender = homeContent.map((content) => {
    return(
      <div className='homepage-container'>
        <div className='hero-card'>
        <h2 className='main-txt'>{content.hero_txt}</h2>
        <p className='sub-txt'>{content.sub_text}</p>
        
        <p className='sub-txt'>{content.sub_sub_txt}</p>
        </div>
        {/* <Avatar/> */}
      </div>
    )
  })
  return(
    <div>{HomeRender}</div>
  )
}


const Home = () => {
  

  
  return (
    <section>
      
      <HomeList/>
    </section>
  )
}

export default Home;
