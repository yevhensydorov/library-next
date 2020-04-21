const ResourceCard = ({ title, description, url, resource_type, num_of_votes }) => (
    <article>
        <h5>{ title }</h5>
        <p>Type of resource: { resource_type }</p>
        <p>Description: { description }</p>
        <p>Number of likes: { num_of_votes }</p>
    </article>
);

export default ResourceCard