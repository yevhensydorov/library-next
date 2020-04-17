import Link from "next/link";
import styled from 'styled-components';


const LinkItem = ({ href, linkText, isLogo }) => (
    <StyledLinkItemContainer>
        <Link href={href} passHref>
            <StyledLinkItem isLogo={isLogo}>{linkText}</StyledLinkItem>
        </Link>
    </StyledLinkItemContainer>
);

const StyledLinkItemContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLinkItem = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.contrast};
    opacity: ${props => props.isLogo ? 1 : .65};
    
    &:hover {
        opacity: 1;
    }
`;

export default LinkItem;