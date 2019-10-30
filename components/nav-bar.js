import React, { useState } from 'react';

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <a className="navbar-brand text-monospace font-weight-bold" href="#">
                <i className="fa fa-lg fa-globe mr-2" />
                The image gallery of <span className="text-primary">NASA</span>
                <i className="fa fa-lg fa-space-shuttle ml-2" />
            </a>
        </nav>
    );
}