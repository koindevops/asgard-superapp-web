import styled from "styled-components";
import Background from "../../assets/image/home-cover-background.png";

export const Section = styled.div`
  .kw-home-background {
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    &__image {
      margin-top: 100px;
      &__image-ojk {
        width: 100%;
      }
      h2 {
        width: 50%;
        font-size: 54px;
        margin-top: 70px;
        line-height: 64px;
        font-weight: 400;
        color: #ffffff;
      }
      h4 {
        width: 50%;
        font-size: 22px;
        margin-top: 50px;
        line-height: 32px;
        font-weight: normal;
        color: #ffffff;
      }
      &__box-tkb {
        width: 157px;
        alig-items: center;
        padding: 5px;
        text-align: center;
        margin-left: 22px;
        margin-top: 15px;
        background: #efefef;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
      }
    }

    &__download-mobile {
      display: flex;
      margin-top: 50px;
      margin-bottom: 50px;
      p {
        margin-left: 15px;
        margin-top: 23px;
        font-size: 14px;
        color: #ffffff;
      }
      &__mobile-download-picutre {
        display: flex;
      }
      &__barcode-hidden {
        display: unset;
      }
      &__image-mobile-apps {
        width: 200px;
        height: 50px;
        margin-left: 20px;
      }
      &__barcode-image {
        width: 100px !important;
        margin-left: 20px;
        margin-top: -20px;
      }
    }

    &__section {
      margin-top: 100px;
      padding-left: 3.5rem;
    }

    @media screen and (max-width: 825px) {
      background-size: 100%;
      background-position: bottom;

      &__download-mobile {
        &__text-mobile {
          display: none;
        }
        &__image-mobile-apps {
          margin-top: 10px;
        }
        &__mobile-download-picutre {
          display: flex;
          flex-direction: column;
          img {
            width: 50%;
          }
        }
        &__barcode-image {
          display: none;
        }
        &__text-mobile-barcode {
          display: none;
        }
      }
      &__image {
        margin-top: 0px;
        h2 {
          width: 100%;
          font-size: 34px;
          line-height: 50px;
        }
        h4 {
          width: 80%;
          font-size: 20px;
          margin-top: 0px;
        }
        &__box-tkb {
          width: 120px;
          padding: 3px;
          margin-left: 22px;
          margin-top: 7px;
        }
      }
      &__section {
        margin-top: 100px;
        padding-left: 0rem;
      }
    }
  }

  
  .kw-home-trusted-super-app-wrapper {
    margin-top: 100px;
    img {
      width: 100%;
    }
    @media screen and (max-width: 825px) {
      margin-top: 0px;
    }
  }

  .kw-home-trusted-super-app {
    margin-top: 180px;
    h3 {
      font-size: 48px;
      font-weight: 400;
      color: #071e35;
    }
    p {
      font-size: 22px;
      text-align: justify;
      text-justify: distribute;
      text-align-last: left;
      color: #566068;
    }
    a {
      width: 100%;
      height: 48px;
      max-width: 130px;
      background: #2b486d;
      color: #fff;
      display: inline-block;
      text-align: center;
      border-radius: 3px;
    }
    span {
      font-size: 13px;
      text-align: center;
      font-weight: bold;
      line-height: 48px;
    }
  }

  .home-stastistik-slider-wrapper {
    background-color: rgb(248, 252, 255);
    h3 {
      font-style: normal;
      font-weight: normal;
      font-size: 48px;
      color: #071e35;
    }
    &__slider {
      margin-top: 77px;
    }
  }

  .kw-home-financial-choices {
    background-color: #f6f6f8;
    margin-top: 100px;
    padding: 22px;
    h4 {
      font-size: 22px;
      font-weight: bold;
      color: rgba(45, 45, 45, 0.85);
    }
    h3 {
      width: 85%;
      font-size: 46px;
      font-weight: 400;
      color: #071e35;
    }
    p {
      font-size: 18px;
      font-weight: normal;
      color: #566068;
    }
    &__image-choices-circle-one {
      float: right;
    }
    &__image-choices-circle-two {
      margin-top: 135px;
    }
    &__image-choices {
      width: 100%;
    }

    @media screen and (max-width: 550px) {
      &__image-choices-circle-two {
        display: none;
      }
      &__image-choices {
        display: none;
      }
      h3 {
        font-size: 38px;
        width: 100%;
      }
    }
  }

  .kw-home-product-koinworks {
    margin-top: 100px;
    &__heading-text {
      font-size: 40px !important;
      font-weight: 400;
      color: #071e35;
    }
    &__image-koin-p2p {
      margin-top: 95px;
    }
    h4 {
      width: 50px;
      margin-bottom: 30px;
      font-size: 30px;
      font-weight: 400;
      line-height: 60px;
      color: #2b486d;
      border-bottom: 4px solid #2b486d;
    }
    img {
      margin-bottom: 15px;
    }
    &__heading-label {
      font-size: 22px;
      font-weight: normal;
      color: #566068;
    }
    &__description {
      font-size: 16px;
      font-weight: normal;
      color: #566068;
    }

    @media screen and(max-width:700px) {
      margin-top: 0px;
    }
  }

  

  @media screen and (max-width: 575px) {
    .kw-home-product-koinworks {
      &__image-koin-p2p {
        margin-top: 0px;
      }
    }
  }

  @media screen and (max-width: 1200px) and (min-width: 826px) {
    .kw-home-trusted-super-app {
      margin-top: 0px;
    }
  }

  @media screen and (max-width: 825px) {
    .kw-home-mobile {
      background: #274164;
    }
    .kw-home-trusted-super-app {
      margin-top: 50px;
    }
  }
`;
