import CollectionViewer from '../components/collection-viewer';
import fetch from 'isomorphic-unfetch';

const Index = ({collection}) => (
    <div>
        <h1>NASA collection</h1>
        <CollectionViewer collection={collection}/>
    </div>
);

Index.getInitialProps = async () => {
    const collectionResponse = await fetch(`https://images-api.nasa.gov/search?q=''&media_type=image`);
    const collectionJSON = await collectionResponse.json();
    const collection = collectionJSON.collection;

    return {collection};
};

export default Index;