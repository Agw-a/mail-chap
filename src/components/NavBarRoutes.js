import React  from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../pages/aboutUs';
import Error404 from '../pages/Error404';
import Home from '../pages/home';
import Users from '../pages/users';
import { RenderNavBar } from './modules';

// const ThemeContext = createContext('null')

// const Context = () => {
//   return (
//     <div>NavBarRoutes</div>
//   )
// }


const NavBarRoutes = () => {
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () => {
  //   setTheme(() => {()})
  // };
  return (
    <>
    {/* // <ThemeContext.Provider value={{theme, toggleTheme}}> */}
    <RenderNavBar />
    <section className="container">
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/About' element={<AboutUs/>}/>
        <Route path='Users' element={<Users/>}/>
        <Route path='*' element={<Error404/>}/>
    </Routes>
    </section>
    {/* // </ThemeContext.Provider> */}
    </>
  )
}

export default NavBarRoutes;