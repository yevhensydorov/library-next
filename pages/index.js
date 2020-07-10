import CategoriesContext from "../contexts/CategoriesContext";

import Layout from "../components/Layout";
import MainContentContainer from "../components/MainContentContainer";
import SectionLayout from "../components/SectionLayout";
import CategorySection from "../components/CategorySection";

import { API_SERVER_URL } from "../constants/urls";
import { backgroundColorGenerator } from "../helpers/utils";

const Index = ({ categories, featuredResources }) => {
  let renderCategoriesSections = null;
  if (featuredResources.length > 0) {
    renderCategoriesSections = featuredResources.map((category, index) => {
      return (
        <SectionLayout
          bcg={backgroundColorGenerator(index)}
          key={category.category_name}
        >
          <CategorySection
            title={category.category_name}
            resources={category.resources}
          />
        </SectionLayout>
      );
    });
  } else return null;

  return (
    <CategoriesContext.Provider value={{ categories }}>
      <Layout>
        <MainContentContainer>
          <SectionLayout bcg="aquamarine">
            <h1>Welcome to Code Your Future Library of content</h1>
          </SectionLayout>
          {renderCategoriesSections}
        </MainContentContainer>
      </Layout>
    </CategoriesContext.Provider>
  );
};

export async function getServerSideProps() {
  const categoriesRes = await fetch(`${API_SERVER_URL}/api/categories`);
  const featuredRes = await fetch(
    `${API_SERVER_URL}/api/resources/feautured-resources`
  );

  const categories = await categoriesRes.json();
  const featuredResources = await featuredRes.json();
  return { props: { categories, featuredResources } };
}

export default Index;
