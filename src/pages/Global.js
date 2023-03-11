import { useState, useEffect } from "react";
import axios from "axios";
import Main from "../components/Main";
import React from "react";

const URL = "https://coronavirus.m.pipedream.net/";
function Global() {
  const [gdata, setGdata] = useState([]);
  const [galldata, setGalldata] = useState([]);

  useEffect(() => {
    Godata();
    Goalldata();
  }, []);

  const Godata = () => {
    axios.get(URL).then((response) => {
      setGdata(response.data.summaryStats.global);
    });
  };

  const Goalldata = () => {
    axios.get(URL).then((response) => {
      setGalldata(response.data.rawData);
    });
  };

  return (
    <>
      <section>
        <Main name="Global" totalcase={gdata.confirmed} deaths={gdata.deaths} />
      </section>
      <div className="container text-center my-5">
        <h3> Country and Province Data</h3>
        <div className="row mt-5">
          {galldata.map((item) => {
            return (
              <>
                <div className="co1-12 col-md-4 col-lg-3 my-3">
                  <div class="card bg-light text-center py-3">
                    <div className="row g-2">
                      <h4 className="card-title">{item.Country_Region}</h4>
                      <h6 className="card-title">{item.Province_State}</h6>
                      <hr />
                      <div class="col-md-6">
                        <p>Confirmed</p>
                        <h6 className="card-title">{item.Confirmed}</h6>
                      </div>
                      <div className="col-md-6">
                        <p>Deaths</p>
                        <h6 className="card-title">{item.Deaths}</h6>
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
export default Global;
