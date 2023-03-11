function Header(props) {
  return (
    <section className="header center">
      <div className="container text-center ">
        {/* <img src="https://flagsapi.com/IN/flat/64.png" alt="" /> */}

        <h1>
          <span>{props.name}</span> <br />
          Covid Status
        </h1>
        {/* ------------ */}
        <div className="row center g-2 mt-4">
          <div className="col-6 col-md-4 col-lg-4">
            <div className="h-card center-col">
              <h6>Total Cases</h6>
              <h5>{props.totalcase}</h5>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <div className="h-card center-col">
              <h6>Total Deaths</h6>
              <h5>{props.deaths}</h5>
            </div>
          </div>
          {/* <div className="col-8 col-md-4 col-lg-4">
            <div className="h-card center-col">
              <h6>Total cases</h6>
              <h5>4534556</h5>
            </div>
          </div> */}
        </div>
        {/* -------------- */}
      </div>
    </section>
  );
}
export default Header;
