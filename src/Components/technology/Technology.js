import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";
// import Footer from "../footer/Footer";

const Technology = () => {

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
      <h1 className="tollyh">Technology</h1><hr className="thhr"/>
      {tolly.filter((render)=>render.id>4 && render.id<9).map((tec) => (
        <div key={tolly.id} className="tolly">
          <Link to={`/technology/${tec.id}`} className="tolly">
          <div className="tollyi"><img src={tec.img} alt="" /></div>
          <h3 className="tollyt">{tec.det}</h3>
          </Link>
          <h5 className="tollyd">{tec.date}</h5>
          <hr/>
        </div>
      ))}
      <div className="adv"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0y_KrL2swxvlBlmu_4isumsTVuqL-5CWZDw&usqp=CAU" className="adv" alt="" /></div><br/>
      <button className="loadmore">LoadMore</button>
      <Bottom/>
    </div>
  );
};

export default Technology;