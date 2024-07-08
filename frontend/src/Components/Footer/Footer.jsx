import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftfooter">
          <div>
          <h3 className="bold-text"><u>Get to know us</u></h3>
          </div>
            
            <h4>Careers</h4>
            <h4>Press Releases</h4>
            <h4>Make in India</h4>
            <h4>Go green</h4>
            </div>
            <div className="midfooter">
                <h3><u>Connect with us</u></h3>
                <h4>Facebook</h4>
                <h4>Instagram</h4>
                <h4>Twitter</h4>
            </div>
            <div className="rightfooter">
                <h3><u>Let us help you</u></h3>
                <h4>Covid and Ro-Deez</h4>
                <h4>Returns centre</h4>
                <h4>Help</h4>
            </div>

    </footer>
  )
}

export default Footer
