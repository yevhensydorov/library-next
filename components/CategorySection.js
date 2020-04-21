import styled from "styled-components";
import ResourceCard from "./ResourceCard";

const CategorySection = ({ title, resources }) => {
    const renderResourceCard = resources.map(resource => {
        return (
            <ResourceCard
                title={resource.title}
                description={resource.description}
                url={resource.url}
                resource_type={resource.resource_type}
                num_of_votes={resource.num_of_votes}
                key={resource.title}
            />
        )
    });

    return (
        <>
            <h3>{title}</h3>
            <StyledResourceCardContainer>
                {renderResourceCard}
            </StyledResourceCardContainer>
        </>
    );
}

const StyledResourceCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default CategorySection;