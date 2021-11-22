import React from "react";

import AllProductsPage from "./AllProductsPage"
import Banner from "./Banner";

class Home extends React.Component {
 
  
  render() {
    return (
      <div>
        <div style={{ marginTop: "20px", marginLeft: "5px" }}>
          <div className="row rm"></div>
        </div>
        <Banner></Banner>
        <AllProductsPage />
      </div>
    );
  }
}

export default Home;
