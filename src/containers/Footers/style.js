import styled from "styled-components";
import BackgroundFooterTop from "../../assets/image/footer-bg-scaled.png";

export const Section = styled.div`
  .kw-footer-top-wrapper {
    padding-top: 45px;
    padding-bottom: 15px;
    background-image: url(${BackgroundFooterTop});
    background-size: cover;
    background-color: #f6f6f8;
    background-position: right;
    &__heading-footer-top {
      font-style: normal;
      font-weight: bold;
      font-size: 17px;
      left: 5px;
      line-height: 25px;
      text-align: center;
      color: #566068;
    }
    &__barcode-footer {
      height: 80px;
      width: 90px;
      max-height: 90px;
      max-width: 90px;
    }
    ul {
      margin: 0;
    }
    a {
      font-size: 18px;
      font-weight: normal;
      color: #566068;
    }
    li {
      list-style: none;
      margin-bottom: 0.3em;
      text-align: left;
      line-height: 35px;
      margin: 0;
    }
    &__widget-title {
      margin-bottom: 5px;
      font-size: 17px;
      font-weight: 600;
      text-transform: capitalize;
      color: #2b486d;
    }
    &__left-content {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 40px;
      color: #071e35;
    }
    h5 {
      margin-bottom: 0 !important;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 30px;
      color: #071e35;
    }

    @media screen and (max-width: 500px) {
      &__heading-footer-top {
        display: none;
      }

      &__barcode-footer {
        display: none;
      }
    }
  }

  .kw-footer-bottom-wrapper {
    background-color: #f6f6f8;
    padding: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    &__paragraph-one {
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 53px;
      color: #566068;
    }
    li {
      list-style: decimal !important;
      font-weight: normal;
      font-size: 12px;
      line-height: 20px;
      color: #566068;
      margin: 10px;
    }
    &__paragraph-two {
      list-style: decimal;
      font-weight: normal;
      font-size: 12px;
      line-height: 20px;
      color: #566068;
      text-align: justify;
    }
    &__paragraph-wrapper-right {
      padding: 20px;
      margin-top: 20px;
    }
    @media screen and (max-width: 825px) {
      &__paragraph-wrapper-right {
        padding: 0px;
        margin-top: 0px;
      }
    }
  }
`;
