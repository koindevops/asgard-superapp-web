import React from 'react';
import { Section } from './style';
import DiversifikasiPortofolio from '../../components/DiversifikasiPortofolio';
import DiversifikasiBestPratices from '../../components/DiversifikasiBestPratices';
import DiversifikasiWhat from '../../components/DiversifikasiWhat';
import KoinP2pProfil from "../../components/KoinP2pProfil";

function Diversifikasi(props) {
    return (
        <Section>
            <DiversifikasiPortofolio/>
            <DiversifikasiBestPratices/>
            <DiversifikasiWhat/>
            <KoinP2pProfil diversifikasi={true}/>
        </Section>
    );
}

export default Diversifikasi;