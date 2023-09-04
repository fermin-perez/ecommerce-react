import './Footer.css';
import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import twitter from '../../assets/img/twitter.png';
import brand from '../../assets/img/brand.png';
import linkedin from '../../assets/img/linkedin.png';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__social'>
        <span>Seguinos en</span>
        <div className='footer__social-icons'>
          <div className='footer__social-icon'>
            <a href='https://www.facebook.com' target='_blank'>
              <img className='footer__icon' src={facebook} alt='Facebook'></img>
            </a>
          </div>
          <div className='footer__social-icon'>
            <a href='https://www.instagram.com' target='_blank'>
              <img
                className='footer__icon'
                src={instagram}
                alt='Instagram'
              ></img>
            </a>
          </div>
          <div className='footer__social-icon'>
            <a href='https://www.twitter.com' target='_blank'>
              <img className='footer__icon' src={twitter} alt='Twitter'></img>
            </a>
          </div>
        </div>
      </div>
      <div className='footer__logo'>
        <div className='footer__logo-container'>
          <img src={brand} alt='Xperiment Brand'></img>
        </div>
      </div>
      <div className='footer__author'>
        <span>Desarrollado por Perez Fermin</span>
        <div className='footer__author-icon'>
          <div className='footer__author-icon-container'>
            <a href='https://www.linkedin.com/in/fermin-perez/' target='_blank'>
              <img className='footer__icon' src={linkedin} alt='LinkedIn'></img>
            </a>
          </div>
        </div>
        <span>©2023 Xperiment. All Rights Reserved.</span>
      </div>
    </div>
  );
};
