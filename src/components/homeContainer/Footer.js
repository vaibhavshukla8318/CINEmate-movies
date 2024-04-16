// import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={innerDivStyle}>
        <p>© 2024 CINEmate. All rights reserved.</p>
        {/* <ul style={listStyle}>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul> */}
      </div>
    </footer>
  );
};

// Styles
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  // textAlign: 'center',
  display: "flex",
  justifyContent:"center",
  // padding: '1rem',
  // position: 'fixed',
  // bottom: '0',
  width: '100%',
  height: "75px",
  padding: "0 8vw",
  marginTop: "20px",
};

const innerDivStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

export default Footer;
