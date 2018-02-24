import React from 'react';

export default () => (
  <div className="wrapper-page">
    <div className="text-center">
      <a href="index.html" className="logo"><span>React<span>Community</span></span></a>
      <h5 className="text-muted mt-0 font-600">ReactJS Salesforce Community</h5>
    </div>
    <div className="m-t-40 card-box">
      <div className="text-center">
        <h4 className="text-uppercase font-bold mb-0">Sign In</h4>
      </div>
      <div className="p-20">
        <form className="form-horizontal m-t-20" action="index.html">
          <div className="form-group">
            <div className="col-xs-12">
              <input className="form-control" type="text" required="" placeholder="Username" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-12">
              <input className="form-control" type="password" required="" placeholder="Password" />
            </div>
          </div>
          <div className="form-group text-center m-t-30">
            <div className="col-xs-12">
              <button className="btn btn-custom btn-bordred btn-block waves-effect waves-light" type="submit">Log In</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
)
