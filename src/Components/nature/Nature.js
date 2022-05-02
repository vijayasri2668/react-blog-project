import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";
// import Footer from "../footer/Footer";

const Nature = () => {

  const [tolly, setTolly] = useState([]);

  useEffect(() => {
    axios
      .get("https://vijayasri-react-backendapp.herokuapp.com/api/blog")
      .then((res) => {
        setTolly(res.data);
      });
  }, []);
  
    return (
      <div>
        <h1 className="tollyh">Nature</h1><hr className="thhr"/>
        {tolly.filter((render)=>render.id>12&&render.id<17).map((wood) => (
          <div key={tolly.imgt} className="tolly">
            <Link to={`/nature/${wood.id}`} className="tolly">
              <div className="tollyi"><img src={wood.img} alt="" /></div>
              <h3 className="tollyt">{wood.det}</h3>
            </Link>
            <div className="tollyn"><h5>{wood.date}</h5></div>
            <hr/>
          </div>
        ))}
        <div className="adv"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS751G22mmvF_MFp9tWwxOlU__8ztNm0iryw&usqp=CAU" className="adv" alt="" /></div><br/>
        <button className="loadmore">LoadMore</button>
        <Bottom/>
      </div>
    );
  };
  
  export default Nature;