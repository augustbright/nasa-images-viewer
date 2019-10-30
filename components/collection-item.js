import {
    selectPreviewSrc, selectTitle, selectPreviewDescription,
    selectPreviewPhotographer
} from '../selectors';
import { Card, CardTitle, CardText, CardImg, CardBody, CardSubtitle, Collapse, Button } from 'reactstrap';
import { useState } from 'react';

export default ({ item }) => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Card className="mb-3">
            <CardImg top width="100%" src={selectPreviewSrc(item)} alt={selectTitle(item)} />
            <CardBody>
                <CardTitle>
                    <h5 className="text-danger">{selectTitle(item)}</h5>
                </CardTitle>
                <CardSubtitle>
                    <small className="text-muted">{`by: ${selectPreviewPhotographer(item)}`}</small>
                </CardSubtitle>
                {collapsed ? (<Button className="float-right" color="primary" onClick={() => setCollapsed(false)}>
                    Read<i className="fa fa-angle-down ml-1" />
                </Button>) : ''}
                <Collapse isOpen={!collapsed}>
                    <CardText>{selectPreviewDescription(item)}</CardText>
                </Collapse>
            </CardBody>
        </Card>
    );
};
