import Link from "next/link";
import styled from 'styled-components';


const LinkItem = ({ href, linkText, isDropdownItem }) => (
    <Link href={href} passHref>
        <StyledLinkItem isDropdownItem={isDropdownItem}>{linkText}</StyledLinkItem>
    </Link>
);

const StyledLinkItem = styled.a`
    display: inline-block;
    padding: ${props => props.isDropdownItem ? "8px 16px" : "16px 0"};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.contrast};
    opacity: .65;
    
    &:hover {
        opacity: 1;
    }
    
    &:focus {
        opacity: 1;
    }
`;

export default LinkItem;