import styled from "styled-components";

export const Section = styled.div`
  .kw-diversifikasiPortofolio-wrapper {
    h2 {
      font-size: 54px;
      font-style: normal;
      font-weight: 400;
      text-align: left;
      color: #071e35;
      margin-top: 150px;
    }
    p {
      font-size: 20px;
      font-weight: normal;
      color: #566068;
    }
    img {
      width: 100%;
    }
    @media screen and (max-width: 700px) {
      h2 {
        margin-top: 50px;
      }
    }
  }

  .kw-diversifikasiBestPratices-wrapper {
    h3 {
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      color: #378df4;
    }
    h4 {
      font-size: 54px;
      font-style: normal;
      font-weight: 400;
      text-align: left;
      color: #071e35;
    }
    p {
      font-size: 20px;
      font-weight: normal;
      color: #566068;
    }
    img {
      width: 100%;
    }
  }

  .kw-diversifikasiWhat-wrapper {
    h3 {
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      color: #378df4;
    }
    p {
      margin-top: 70px;
      font-size: 18px;
      font-weight: normal;
      color: #566068;
    }
    &__pargraph-one {
      padding-top: 28px;
    }
    @media screen and (max-width: 700px) {
      p {
        margin-top: 10px;
      }
      &__pargraph-one {
        padding-top: 0px;
      }
    }
  }

  .kw-diversifikasiKreditSkoring-wrapper {
    margin-top:50px;  
    h3 {
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      color: #378df4;
    }
    p {
      font-size: 18px;
      font-weight: normal;
      color: #566068;
    }
  }
`;
