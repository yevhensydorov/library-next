import Link from "next/link";
import styled from "styled-components";

const Logo = () => (
    <StyledLogoItemContainer>
        <Link href="/" passHref>
            <StyledLogo>CYF Library</StyledLogo>
        </Link>
    </StyledLogoItemContainer>
);

const StyledLogoItemContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLogo = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.contrast};
`;

export default Logo;