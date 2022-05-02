import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";
// import Footer from "../footer/Footer";

const Tollywood = () => {

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
      <h1 className="tollyh">TollyWood</h1><hr className="thhr"/>
      {tolly.filter((render)=>render.id<5).map((wood) => (
        <div key={tolly.id} className="tolly">
          <Link to={`/tollywood/${wood.id}`}className="tolly">
            <div className="tollyi"><img src={wood.img} alt="" /></div>
            <h3 className="tollyt">{wood.det}</h3>
          </Link>
          <h5 className="tollyd">{wood.date}</h5>
          <hr/>
        </div>
      ))}
      <div className="adv"><img src="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/226524/Radhe_Shyam-v1.jpg" className="adv" alt="" /></div><br/>
      <button className="loadmore">LoadMore</button>
      <Bottom/>
    </div>
  );
};

export default Tollywood;