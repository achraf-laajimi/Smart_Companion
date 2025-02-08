import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import {
  FaCog,
  FaUser,
  FaHome,
  FaBook,
  FaTrophy,
  FaGlobe,
  FaGraduationCap,
} from 'react-icons/fa';
import './Navbar.css'; // Import custom CSS for additional styling

const CustomNavbar = () => {
  return (
    <Navbar bg="primary" expand="lg" fixed="top" className="w-100">
      <Navbar.Brand href="#home" className="text-white">
        My App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#app-properties" className="text-white" id="app properties">
            <FaCog className="me-2" />
            App Properties
          </Nav.Link>
          <Nav.Link href="#user-views" className="text-white" id="user views">
            <FaUser className="me-2" />
            User Views
          </Nav.Link>
          <Nav.Link href="#parent-space" className="text-white" id="parent space">
            <FaHome className="me-2" />
            Parent Space
          </Nav.Link>
          <Nav.Link href="#user-guide" className="text-white" id="user guide">
            <FaBook className="me-2" />
            User Guide
          </Nav.Link>
          <Nav.Link href="#competition" className="text-white" id="competition section">
            <FaTrophy className="me-2" />
            Competition Section
          </Nav.Link>
          <Nav.Link href="#class-quiz-stories" className="text-white" id="class quiz stories">
            <FaGraduationCap className="me-2" />
            Class Quiz Stories
          </Nav.Link>
        </Nav>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-language">
            <FaGlobe className="me-2" />
            Select Language
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#english">English</Dropdown.Item>
            <Dropdown.Item href="#french">French</Dropdown.Item>
            <Dropdown.Item href="#spanish">Spanish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;