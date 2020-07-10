import styled from "styled-components";
import LinkItem from "./LinkItem";

const NavbarDropdownMenu = ({ dropDownCategories }) => {
  const categoriesList = dropDownCategories.map((category, index) => {
    return (
      <li key={category.category_name}>
        <LinkItem
          href={`resources/${category.category_name}`}
          linkText={category.category_name}
          isDropdownItem
        />
      </li>
    );
  });

  return (
    <StyledDropdownMenu className="dropdown">
      {categoriesList}
    </StyledDropdownMenu>
  );
};

const StyledDropdownMenu = styled.ul`
  position: absolute;
  top: 48px;
  z-index: 10;
  padding: 0;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default NavbarDropdownMenu;
