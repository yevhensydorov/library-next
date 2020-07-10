import styled from "styled-components";
import Link from "next/link";

import ResourceCard from "./ResourceCard";

const CategorySection = ({ title, resources }) => {
  const renderResourceCard = resources.map((resource) => {
    return (
      <ResourceCard
        title={resource.title}
        description={resource.description}
        url={resource.url}
        resource_type={resource.resource_type}
        num_of_votes={resource.votes_count}
        key={resource.title}
      />
    );
  });

  return (
    <>
      <h3>{title}</h3>
      <StyledResourceCardContainer>
        {renderResourceCard}
      </StyledResourceCardContainer>
      <StyledButtonWrapper>
        <Link href={`/resources/${title}`} passHref>
          <a>More resources from {title} category</a>
        </Link>
      </StyledButtonWrapper>
    </>
  );
};

const StyledResourceCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export default CategorySection;
