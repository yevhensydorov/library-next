import styled from "styled-components";

const SectionLayout = props => (
    <StyledSectionLayout bcg={props.bcg}>
        {props.children}
    </StyledSectionLayout>
);

const StyledSectionLayout = styled.section`
    padding: 0 48px;
    background-color: ${props => props.bcg};
`;

export default SectionLayout;