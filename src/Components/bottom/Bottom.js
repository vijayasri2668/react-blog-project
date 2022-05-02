import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Bottom from "../bottom/Bottom";
// import Footer from "../footer/Footer";

const Bottom = () => {

  const [tolly, setTolly] = useState([]);

  useEffect(() => {
    axios
      .get("https://vijayasri-react-backendapp.herokuapp.com/api/blog")
      .then((res) => {
        setTolly(res.data);
      });
  }, []);
  
  return (
    <div className="h1">
      <div>
        <div style={{margin:"2% 2% 2% 0%",color:"red"}}>You May Also Like</div><hr className="thhr" style={{marginLeft:"15px"}}/>
        <div className="flex2">
            <div className="hc1">
            {tolly.filter(data=>data.id==="3").map((latest)=>(
            <Link to={`/tollywood/${latest.id}`} key={tolly.id} className="hcc1">
              <div className="himg"><img src={latest.img} alt="" /></div>
              <div className="c1h3"><h3>{latest.det}</h3></div>
              <div className="c1h5"><h5>{latest.date}</h5></div>
              <div className="c1h4"><h4>tolly: {latest.tolly}</h4></div>
            </Link>
          ))}
          </div>
          <div className="hc1">
          {tolly.filter(data=>data.id==="6").map((latest)=>(
          <Link to={`/technology/${latest.id}`} key={tolly.id} className="hcc1">
            <div className="himg"><img src={latest.img} alt="" /></div>
            <div className="c1h3"><h3>{latest.det}</h3></div>
            <div className="c1h5"><h5>{latest.date}</h5></div>
            <div className="c1h4"><h4>tolly: {latest.tolly}</h4></div>
          </Link>
          ))}
            </div>
            <div className="hc1">
            {tolly.filter(data=>data.id==="10").map((latest)=>(
            <Link to={`/jobs/${latest.id}`} key={tolly.id} className="hcc1">
              <div className="himg"><img src={latest.img} alt="" /></div>
              <div className="c1h3"><h3>{latest.det}</h3></div>
              <div className="c1h5"><h5>{latest.date}</h5></div>
              <div className="c1h4"><h4>tolly: {latest.tolly}</h4></div>
            </Link>
          ))}
          </div><br/>
        </div>
      </div>
    </div>
  );
};

export default Bottom;