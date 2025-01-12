import { useState } from 'react';
import PropTypes from 'prop-types';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='collapse'>
            <div className='collapse_header' onClick={toggleCollapse}>
                <h2>{title}</h2>
                <span className="material-symbols-outlined">
                    {isOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
                </span>
            </div>
            {isOpen ? 
                (<div className="collapse_content open">
                    {children}
                </div>) : null
            }
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  
  export default Collapse;