import varients from "./Covid";

function Info() {
  return (
    <>
      <section className="header center">
        <div className="container text-center ">
          <h1>covid variants</h1>
        </div>
      </section>
      <div className="container my-5">
        <div className="row">
          {varients.map((covid) => {
            return (
              <>
                {/* --------card start--------- */}
                <div className="co1-12 col-md-4 col-lg-4">
                  <div className="card bg-light mt-4 ">
                    <div className="row g-2">
                      <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={covid.img} width="150px" alt="" />
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <p className="card-text">WHO label</p>
                          <h5 className="card-title">{covid.who_label}</h5>
                          <hr />
                          <p className="card-text">Pango lineage </p>
                          <h5 className="card-title">{covid.Pango_lineage}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* -------card end---------- */}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Info;
