import Layout from '../components/page-layout';
import CollectionViewer from '../components/collection-viewer';
import PODsViewer from '../components/pods-viewer';
import fetch from 'isomorphic-unfetch';
import { Row, Col } from 'reactstrap';

const POD_DAYS = 7;

const Index = ({ collection, pods }) => (
    <Layout>
        <Row className="mb-3">
            <Col>
                <PODsViewer pods={pods} />
            </Col>
        </Row>
        <CollectionViewer collection={collection} />
    </Layout>
);

Index.getInitialProps = async () => {
    const dates = [];
    for (let i = 0; i < POD_DAYS; i++) {
        let msThen = Date.now() - i * 1000 * 60 * 60 * 24;
        let dateThen = new Date(msThen);
        let dateFormatted = `${dateThen.getFullYear()}-${dateThen.getMonth() + 1}-${dateThen.getDate()}`;
        dates.push(dateFormatted);
    }
    const podSrcs = dates.map(
        dateFormatted => `https://api.nasa.gov/planetary/apod?api_key=Ih0sK6ILy2N97SaPj1YGsr9caeQH4P0c0IN4lDJ3&date=${dateFormatted}`
    );
    const podPromises = podSrcs.map(podSrc => fetch(podSrc));
    const collectionResponse = await fetch(`https://images-api.nasa.gov/search?q=''&media_type=image`);
    const podsResponses = await Promise.all(podPromises);

    const pods = await Promise.all(podsResponses.map(podResponse => podResponse.json()));
    const collectionJSON = await collectionResponse.json();
    const collection = collectionJSON.collection;

    return { collection, pods };
};

export default Index;