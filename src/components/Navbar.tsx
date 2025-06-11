import React from 'react';
import styled from 'styled-components'

export const NavbarWrapper = styled.div`
    background-color: #D5E8D4;
    display: flex;
    height: 8%;
`;

const Navbar: React.FC = () => {
    return(
        <NavbarWrapper><p>Hello</p></NavbarWrapper>
    );
};

export default Navbar;