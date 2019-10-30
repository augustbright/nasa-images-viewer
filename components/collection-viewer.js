import CollectionItem from './collection-item';
import {selectNasaId} from '../selectors';

export default ({collection}) => (
    <ul>
        {collection.items.map(item => <CollectionItem key={selectNasaId(item)} {...{item}}/>)}
    </ul>
);
