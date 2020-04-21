import Layout from "../components/Layout";
import MainContentContainer from "../components/MainContentContainer";
import SectionLayout from "../components/SectionLayout";
import CategorySection from "../components/CategorySection";

import { MOST_POPULAR_RESOURCES_BY_CATEGORY } from '../constants/dataContants';
import { backgroundColorGenerator } from '../helpers/utils';

const Index = () => {
    const renderCategoriesSections = MOST_POPULAR_RESOURCES_BY_CATEGORY.map((category, index) => {
        return (
            <SectionLayout bcg={backgroundColorGenerator(index)} key={category.category_name}>
                <CategorySection title={category.category_name} resources={category.resources}/>
            </SectionLayout>
        );
    });

    return (
        <Layout>
            <MainContentContainer>
                <SectionLayout bcg="green">
                    <h1>Welcome to Code Your Future Library of content</h1>
                </SectionLayout>
                { renderCategoriesSections }
            </MainContentContainer>
        </Layout>
    );
}

export default Index;