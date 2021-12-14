import React from 'react';



function Footer() { 
    const currentYear = new Date().getFullYear();

    return ( 
        <footer>
        <p><span>&copy;</span> Doomsday Protocol {currentYear}</p>
        </footer>
    );
}

export default Footer;