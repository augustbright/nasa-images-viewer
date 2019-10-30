import {selectNasaId, selectPreviewSrc, selectTitle} from '../selectors';

export default ({item}) => (
    <li key={selectNasaId(item)}>
        <div>
            <h3>{selectTitle(item)}</h3>
            <img src={selectPreviewSrc(item)}/>
        </div>
    </li>
);
