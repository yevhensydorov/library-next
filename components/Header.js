import styled from "styled-components";

import Logo from "./Logo";
import Navbar from "./Navbar";
import UploadButton from "./UploadButton";

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
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
  padding: 0 48px;
`;
