import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div>
      <div className='page_container'>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
