import CollectionItem from './collection-item';
import { selectNasaId } from '../selectors';
import { Row, Col } from 'reactstrap'

export default ({ collection }) => (
    <Row>
        {collection.items.map(item => (
            <Col key={selectNasaId(item)} xs={12} sm={6} md={4}>
                <CollectionItem {...{ item }} />
            </Col>
        ))}
    </Row>
);
