import styled from 'styled-components';

import { CATEGORIES } from "../constants/dataContants";
import LinkItem from './LinkItem';
import DropdownButton from "./DropdownButton";

const Navbar = () => {
    const dropDownCategories = [];

    const categoriesList = CATEGORIES.map((category, index) => {
        if (index < 6) {
            return (
                <NavbarItem key={category.category_name}>
                    <LinkItem href={`/${category.category_name}`} linkText={category.category_name} />
                </NavbarItem>
            );
        } else {
            dropDownCategories.push(category);
        }
    });

    return (
        <StyledNavbar>
            { categoriesList }
            <NavbarItem isDropdown>
                <DropdownButton
                    dropdownText="More"
                    dropDownCategories={dropDownCategories}
                />
            </NavbarItem>
        </StyledNavbar>
    );
}

const StyledNavbar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  height: 48px;
  padding: 0 16px;
  margin: 0;
`;

const NavbarItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 8px;
  position: ${props => props.isDropdown && "relative"};
`;

export default Navbar;