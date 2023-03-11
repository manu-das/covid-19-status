import { useState, useEffect } from "react";
import axios from "axios";
import Main from "../components/Main";

const URL2 = "https://data.covid19india.org/data.json";

function India(props) {
  const [idata, setIdata] = useState([]);
  const [ialldata, setIalldata] = useState([]);

  useEffect(() => {
    One();
    Alldata();
  }, []);

  function One() {
    axios.get(URL2).then((response) => {
      setIdata(response.data.statewise[0]);
    });
  }

  function Alldata() {
    axios.get(URL2).then((response) => {
      setIalldata(response.data.statewise);
    });
  }

  return (
    <>
      <section>
        <Main name="India" totalcase={idata.confirmed} deaths={idata.deaths} />
      </section>
      <div className="container text-center my-5">
        <h3> Statewise Data</h3>
        <div className="row mt-5">
          {ialldata.slice(1).map((item) => {
            return (
              <>
                <div className="co1-12 col-md-4 col-lg-3 my-3">
                  <div class="card bg-light text-center py-3">
                    <div className="row g-2">
                      <h4 className="card-title">{item.state}</h4>
                      <hr />
                      <div class="col-md-6">
                        <p>Active</p>
                        <h6 className="card-title">{item.active}</h6>
                        <p>Confirmed</p>
                        <h6 className="card-title">{item.confirmed}</h6>
                      </div>
                      <div className="col-md-6">
                        <p>Recovered</p>
                        <h6 className="card-title">{item.recovered}</h6>
                        <p>Deaths</p>
                        <h6 className="card-title">{item.deaths}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default India;
