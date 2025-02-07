// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './image.png'; // Import the main image
import CustomNavbar from './NavBar/NavBar';
import BottomSection from './BottomSection'; // Import the new component

  function App() {
    return (
    <div>
      <CustomNavbar />
      <div className="container mt-5 pt-5">
        <div className="row align-items-center">
          {/* Left Side: Text and Button */}
          <div className="col-md-6">
            <h1 className="mb-4">
              To enjoy the first chapter for free, leave us your phone number and we will call you
            </h1>
            <p className="mb-4">
              An educational application that offers interactive exercises in all core subjects for
              elementary school, fully aligned with the official ministry curriculum.
            </p>
            <button className="btn btn-primary btn-lg">Subscribe Now</button>
          </div>
          {/* Right Side: Image */}
          <div className="col-md-6">
            <img
              src={image}
              alt="Educational App"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section: Bubble and Quizo Image */}
      <BottomSection />
    </div>
  );
}

export default App;