import  Navbar  from "./container/Navbar";
import   Welcome  from "./container/Welcome";

import   Products  from "./container/Products";

import  Faq  from "./container/Faq";

import  Customer  from "./container/Customer";

import   Footer  from "./container/Footer";


function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Welcome */}
      <Welcome />
      {/* Products */}

      <Products />
      {/* FAQ */}
      <Faq />
      {/* Customer */}

      <Customer />

      {/* Footer */}

      <Footer />
    </div>
  );
}

export default App;
