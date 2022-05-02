import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";

const Jobs = () => {

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
        <h1 className="tollyh">Jobs</h1><hr className="thhr"/>
        {tolly.filter((render)=>render.id>8 && render.id<13).map((wood) => (
          <div key={tolly.imgt} className="tolly">
            <Link to={`/jobs/${wood.id}`} className="tolly">
              <div className="tollyi"><img src={wood.img} alt="" /></div>
              <h3 className="tollyt">{wood.det}</h3>
            </Link>
            <h5 className="tollyd">{wood.date}</h5>
            <hr/>
          </div>
        ))}
        <div className="adv"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCHrMBPS-EJXKFtjWcZpehIoYFJW--STILw&usqp=CAU" className="adv" alt="" /></div><br/>
        <button className="loadmore">LoadMore</button>
        <Bottom/>
      </div>
    );
  };
  
  export default Jobs;