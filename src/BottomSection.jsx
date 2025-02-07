import React, { useState } from 'react';
import quizoImage from './quizo.webp'; // Import the image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'; // Import the send icon

function BottomSection({ isBlurred, handleBlur }) {
  const [isMoved, setIsMoved] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [cycleComplete, setCycleComplete] = useState(false);
  const [userInput, setUserInput] = useState('');

  const messages = [
    "welcome",
    "This is the app properties",
    "This is the user view",
    "Parent space",
    "User guide",
    "Competition section",
    "Class quiz section",
    "how can I help you?",
  ];

  const handleClick = () => {
    if (clickCount < messages.length - 1) {
      setIsMoved(true);
      setClickCount(clickCount + 1);
    } else if (clickCount === messages.length - 1) {
      setIsMoved(false);
      setCycleComplete(true);
    }
    handleBlur();
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    // Handle sending the message (e.g., send to an API or display it)
    console.log('Message sent:', userInput);
    setUserInput(''); // Clear the input after sending
  };

  const bubbleWidth = clickCount === messages.length - 1 ? 500 : Math.min(400, Math.max(200, messages[clickCount].length * 10));

  return (
    <div
      style={{
        position: 'fixed',
        bottom: cycleComplete || clickCount === messages.length - 1 ? '20px' : (isMoved ? 'auto' : '20px'),
        top: cycleComplete || clickCount === messages.length - 1 ? 'auto' : (isMoved ? '50px' : 'auto'),
        left: cycleComplete || clickCount === messages.length - 1 ? 'auto' : (isMoved ? `${20 + (clickCount - 1) * 150}px` : 'auto'),
        right: cycleComplete || clickCount === messages.length - 1 ? '20px' : (isMoved ? 'auto' : '20px'),
        zIndex: 1000,
        transition: 'all 0.5s ease',
      }}
    >
      <div className="d-flex align-items-center">
        {/* Bubble */}
        <div
          className={`bg-primary text-white p-3 rounded-pill d-flex align-items-center justify-content-between me-3 no-blur`}
          style={{ 
            width: `${bubbleWidth}px`,
            height: clickCount === messages.length - 1 ? 'auto' : '100px', 
            position: 'relative', 
            flexDirection: clickCount === messages.length - 1 ? 'column' : 'row',
          }}
        >
          {/* Flex container for text and arrow */}
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            {/* Text */}
            <p className="m-0" style={{ flex: 1, textAlign: 'center' }}>
              {messages[clickCount]}
            </p>
            {/* Arrow button - only show if not the last message */}
            {clickCount < messages.length - 1 && (
              <button
                onClick={handleClick}
                disabled={cycleComplete}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: 'white',
                  cursor: cycleComplete ? 'not-allowed' : 'pointer',
                  fontSize: '24px',
                  opacity: cycleComplete ? 0.5 : 1,
                }}
              >
                ➡️
              </button>
            )}
          </div>
          {/* Input field for the last message */}
          {clickCount === messages.length - 1 && (
            <div style={{ width: '100%', textAlign: 'center', marginTop: '10px', position: 'relative' }}>
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Type your message here..."
                style={{
                  width: '80%',
                  background:'white',
                  color: 'black',
                  padding :'10px 40px 10px 20px', // Add padding for the icon
                  borderRadius: '20px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                }}
              />
              {/* Send icon */}
              <FontAwesomeIcon
                icon={faPaperPlane}
                onClick={handleSendMessage}
                style={{
                  position: 'absolute',
                  right: '15%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: '#007bff',
                  fontSize: '20px',
                }}
              />
            </div>
          )}
        </div>
        {/* Quizo Image */}
        <div className="no-blur">
          <img
            src={quizoImage}
            alt="Quizo"
            className="img-fluid"
            style={{ maxHeight: '150px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default BottomSection;