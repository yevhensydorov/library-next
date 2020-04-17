import styled from 'styled-components';

import LinkItem from './LinkItem';
import Navbar from "./Navbar";
import UploadButton from "./UploadButton";

export default function Header() {
    return (
        <StyledHeader>
            <LinkItem href="/" linkText="CYF Library" isLogo={true} />
            <Navbar />
            <UploadButton />
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
`;
