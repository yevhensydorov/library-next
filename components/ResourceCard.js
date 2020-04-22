import styled from "styled-components";


const ResourceCard = ({ title, description, url, resource_type, num_of_votes }) => {
    return (
        <StyledResourceCard>
            <h4>{ title }</h4>
            <p>Type of resource: { resource_type }</p>
            <p>Description: { description }</p>
            <p>Number of likes: { num_of_votes }</p>
        </StyledResourceCard>
    );
}

const StyledResourceCard = styled.article`
  width: 30%; 
  margin-bottom: 24px;
  padding: 8px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
`;

export default ResourceCard