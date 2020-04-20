import styled from "styled-components";

const UploadButton = () => (
    <StyledUploadButton>Upload</StyledUploadButton>
);

const StyledUploadButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.contrast};
  border: unset;
  cursor: pointer;
  opacity: 0.65;
  position: relative;
  
  &:hover {
      opacity: 1;
    }
    
  &:focus {
      opacity: 1;
  }
  
  &:after {
      position: absolute;
      content: "+";
      height:2px;
      width:2px;
      right: 0;
      color:white;
  }
`;

export default UploadButton;