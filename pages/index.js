import CategoriesContext from "../contexts/CategoriesContext";

import Layout from "../components/Layout";
import MainContentContainer from "../components/MainContentContainer";
import SectionLayout from "../components/SectionLayout";
import CategorySection from "../components/CategorySection";

import { MOST_POPULAR_RESOURCES_BY_CATEGORY } from "../constants/dataContants";
import { HOST_URL } from "../constants/urls";
import { backgroundColorGenerator } from "../helpers/utils";

const Index = ({ categories }) => {
  const renderCategoriesSections = MOST_POPULAR_RESOURCES_BY_CATEGORY.map(
    (category, index) => {
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
    }
  );

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
  const res = await fetch(`${HOST_URL}/api/categories`);
  const categories = await res.json();
  return { props: { categories } };
}

export default Index;
