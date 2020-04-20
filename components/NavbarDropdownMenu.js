import styled from "styled-components";
import LinkItem from './LinkItem';


const NavbarDropdownMenu = ({ dropDownCategories }) => {
    const categoriesList = dropDownCategories.map((category, index) => {
        return (
            <li key={category.category_name}>
                <LinkItem href={`/${category.category_name}`} linkText={category.category_name} isDropdownItem />
            </li>
        );
    });

    return (
        <StyledDropdownMenu className="dropdown">
            { categoriesList }
        </StyledDropdownMenu>
    );
}

const StyledDropdownMenu = styled.ul`
    position: absolute;
    top: 48px;
    padding: 0;
    list-style: none;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export default NavbarDropdownMenu;