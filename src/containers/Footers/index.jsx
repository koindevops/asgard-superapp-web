import React from 'react';
import FooterTop from '../../components/FooterTop';
import { Section } from './style';
import FooterBottom from '../../components/FooterBottom';

function Footers(props) {
    return (
        <Section>
        <React.Fragment>
            <FooterTop/>
            <FooterBottom/>
        </React.Fragment>
        </Section>
    );
}

export default Footers;