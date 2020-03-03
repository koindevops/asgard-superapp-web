import React from 'react';
import Headers from '../../containers/Headers';
import Footers from '../../containers/Footers';
import { useEffect } from 'react';

function MainLayout(props) {
    useEffect(()=>{
        window.scrollTo(0, 0)
    })
    return (
        <React.Fragment>
            <Headers match={props}/>
            {props.children}
            <Footers/>
        </React.Fragment>
    );
}

export default MainLayout;