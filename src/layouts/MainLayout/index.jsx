import React from 'react';
import Headers from '../../containers/Headers';

function MainLayout(props) {
    return (
        <React.Fragment>
            <Headers/>
            {props.children}
        </React.Fragment>
    );
}

export default MainLayout;