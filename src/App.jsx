import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './image.png'; // Import the main image
import CustomNavbar from './NavBar/NavBar';
import BottomSection from './BottomSection'; // Import the new component
import axios from 'axios'; // For making API requests

function App() {
  const [sectionMap, setSectionMap] = useState({});
  const [pointingElementId, setPointingElementId] = useState(null); // Track the element to point to
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 }); // Track cursor position
  const [showCursor, setShowCursor] = useState(false); // Control visibility of the cursor

  // Extract section IDs on component mount
  useEffect(() => {
    const extractSectionIds = () => {
      const sections = document.querySelectorAll('[id]'); // Select all elements with an ID
      const map = {};

      sections.forEach((section) => {
        // Extract only the text of the section (e.g., button text, link text, or heading text)
        const text = section.textContent
          .trim() // Remove leading/trailing whitespace
          .toLowerCase() // Convert to lowercase
          .replace(/[^a-z0-9\s]/g, '') // Remove special characters
          .replace(/\s+/g, ' '); // Replace multiple spaces with a single space

        const id = section.id;

        // Only add the section if the text is meaningful
        if (text && !text.includes('\n')) { // Avoid concatenated text
          map[text] = id;
        }
      });

      return map;
    };

    const sections = extractSectionIds();
    setSectionMap(sections);

    // Send the mapping to the Flask backend
    axios.post('http://localhost:5000/update-elements', { elements: sections })
      .then(response => {
        console.log('Elements updated in Flask backend:', response.data);
      })
      .catch(error => {
        console.error('Error updating elements in Flask backend:', error);
      });
  }, []);

  // Function to handle pointing to an element
  const handlePointToElement = (elementId) => {
    setPointingElementId(elementId); // Set the element to point to

    // Calculate the position of the target element
    const sectionElement = document.getElementById(elementId);
    if (sectionElement) {
      const rect = sectionElement.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      // Position the cursor next to the element
      setCursorPosition({
        top: rect.top + scrollTop + rect.height / 2, // Center vertically
        left: rect.left + scrollLeft + rect.width - 120, // Place to the right of the element
      });

      // Show the cursor and set a timeout to hide it after 2 seconds
      setShowCursor(true);
      setTimeout(() => {
        setShowCursor(false);
      }, 2000); // Hide after 2 seconds

      // Scroll to the element
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Custom Navbar */}
      <CustomNavbar />

      {/* Main Content */}
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
            <button className="btn btn-primary btn-lg" id="subscribe">
              Subscribe Now
            </button>
          </div>
          {/* Right Side: Image */}
          <div className="col-md-6">
            <img src={image} alt="Educational App" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Bottom Section: Bubble and Quizo Image */}
      <BottomSection sectionMap={sectionMap} onPointToElement={handlePointToElement} />

      {/* Pointing Cursor */}
      {showCursor && (
        <div
          style={{
            position: 'absolute',
            top: `${cursorPosition.top}px`,
            left: `${cursorPosition.left}px`,
            fontSize: '48px',
            animation: "pointingAnimation 0.5s ease-in-out infinite, fadeOut 15s forwards",
            zIndex: 10000,
          }}
        >
          👆
        </div>
      )}

      {/* CSS for animations */}
      <style>
        {`
          @keyframes pointingAnimation {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}

export default App;