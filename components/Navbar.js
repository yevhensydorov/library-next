import styled from 'styled-components';

import { CATEGORIES } from "../constants/dataContants";
import LinkItem from './LinkItem';

const Navbar = () => {
    const categogiesList = CATEGORIES.map(category => {
        return (
            <NavbarItem key={category.category_name}>
                <LinkItem href={`/${category.category_name}`} linkText={category.category_name} />
            </NavbarItem>
        );
    });

    return (
        <StyledNavbar>
            { categogiesList }
        </StyledNavbar>
    );
}

const StyledNavbar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  padding: 0 16px;
`;

const NavbarItem = styled.li`
    padding: 0 8px;
`;

export default Navbar;