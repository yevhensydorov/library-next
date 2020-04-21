import styled from 'styled-components';


const MainContentContainer = props => (
    <StyledMainContentContainer>
        {props.children}
    </StyledMainContentContainer>
);

const StyledMainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainContentContainer;