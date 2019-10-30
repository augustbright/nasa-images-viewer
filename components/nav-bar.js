import React, { useState } from 'react';

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 justify-content-center">
            <a className="navbar-brand text-monospace font-weight-bold" href="#">
                <i className="fa fa-lg fa-globe mr-2" />
                The pictures of <span className="text-primary">NASA</span>
                <i className="fa fa-lg fa-space-shuttle ml-2" />
            </a>
        </nav>
    );
}