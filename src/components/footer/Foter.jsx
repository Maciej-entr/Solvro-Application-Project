import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import { useNavigate } from 'react-router'
const Foter = () => {

    const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  }

  const handleCocktailsClick = () => {
    navigate('/cocktails');
  }

  const handleContactClick = () => {
    navigate('/contact');
  }

  const handlePrivacyPolicyClick = () => {
    navigate('/privacy-policy');
  }

  return (
    <div> <div className="footer" id="footer">
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={logo} alt="" className='logo' />
            <p>Solvro Cocktails is a vibrant bar that specializes in crafting a wide variety of cocktails, from classic favorites to unique, creative mixes. Whether you're in the mood for a refreshing mojito, a sophisticated martini, or something entirely new, Solvro Cocktails offers a diverse menu to satisfy every taste. With a welcoming atmosphere and skilled bartenders, it's the perfect spot to enjoy expertly made drinks with friends or unwind after a long day.</p>
            <div className="footer-social-icons">
                <img src={facebook} alt="facebook" />
                <img src={github} alt="linkedin" />
                <img src={linkedin} alt="github" />
            </div>

        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
            <li><a href="/" onClick={() => handleHomeClick} className='a'>Home</a></li>
              <li><a href="/cocktails" onClick={() => handleCocktailsClick} className='a'>Cocktails</a></li>
              <li><a href="/contact" onClick={() => handleContactClick} className='a'>Contact</a></li>
              <li><a href="/privacy-policy" onClick={() => handlePrivacyPolicyClick} className='a'>Privacy Policy</a></li>
           </ul>

        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+48 329 239 239</li>
                <li>dummyEmailId@gmail.com</li>
            </ul>

        </div>
    </div>
    <hr />
    <p className="footer-copyright">
        &copy; Solvro Cocktails all rights reserved  | Made by Maciej Waszyński
    </p>


</div>
</div>
  )
}

export default Foter