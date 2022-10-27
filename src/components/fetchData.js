import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import ReactPaginate from "react-paginate";

const url = `https://randomuser.me/api/?results=100`;

const FetchingData = () => {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  // const [loading, setLoading] = useState(false)

  const userPerPage = 10;
  const pagesVisited = pageNumber * userPerPage

  
  // funstion to get users
  const fetchUserData = async () => {
    // setLoading(true)
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users.results);
    // setLoading(false)
    
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const DisplayUsers = users.slice(pagesVisited, pagesVisited + userPerPage).map((user) => {
    const {
        gender,
        name: { title, first, last },
        // location: { city, state, country },
        // email,
        login: { username },
        phone,
        picture: { large },
        dob: { age },
      } = user;

      return (
        <div key={user.login.uuid} className="user-card">
          <div>
          <img className="user-img" src={large} alt={first} />
          </div>
          
          <div className="user-txt">
          <h6>
            Bio:  {title} {first} {last}
          </h6>
          <p> @{username}</p>
          <p> Age: {age}</p>
          <p> Gender: {gender}</p>
          
          {/* <h4>{country}</h4>
          <h4>{city}</h4>
          <h4>{state}</h4> */}
          {/* <h4>{email}</h4> */}
          <p>Phone: {phone}</p>
          </div>
          
        </div>
      );
  })

  const pageCount = Math.ceil(users.length /userPerPage)
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }
  return (
    <section className="user-container">
        {/* {loading ? <div></div> :
         <></> } */}
        
        {DisplayUsers}
        <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagnationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextLinkButton"}
            disabledClassName={"pagnationDisabled"}
            activeClassName={"pagnationactive"}
          />
      {/* {users.map((user) => {
        const {
          gender,
          name: { title, first, last },
          location: { city, state, country },
          email,
          login: { username },
          phone,
          picture: { large },
          dob: { age },
        } = user;
        return (
          <div key={user.login.uuid} className="user-card">
            <img src={large} alt={first} />
            <h3>
              {title} {first} {last}
            </h3>
            <h3>{age}</h3>
            <h3>{gender}</h3>
            <h3>{username}</h3>
            <h4>{country}</h4>
            <h4>{city}</h4>
            <h4>{state}</h4>
            <h4>{email}</h4>
            <h4>{phone}</h4>
          </div>
        );
      })} */}
    </section>
  );
};

const RenderFetchResult = () => {
  return (
    <div>
      <FetchingData />
    </div>
  );
};

export default RenderFetchResult;
