import Logo from '../assets/Logo.svg'

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Kasa logo" className='footer_logo' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
