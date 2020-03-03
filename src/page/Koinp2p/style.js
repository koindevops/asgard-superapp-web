import styled from "styled-components";
import BackgroundP2pScaled from "../../assets/image/koin-voucher-scaled.png";
import BackgroundStatistik from "../../assets/image/koinp2p-image/p2p-desktop-scaled.png";

export const Section = styled.div`
  .kw-koin-p2p-wrapper {
    margin-bottom: 30px;
    &__imageLicensedByOjk {
      width: 200px;
      margin-top: 150px;
    }
    &__super-financialApp {
      max-width: 555px;
    }
    &__content-left {
      margin-top: 100px;
    }
    &__paragraphOne {
      font-size: 20px;
      font-weight: normal;
      text-align: left;
      color: #2d2d2d;
    }
    h2 {
      font-size: 48px;
      font-weight: normal;
      color: #2b486d;
    }
    @media screen and (max-width: 725px) {
      &__super-financialApp {
        max-width: unset;
        width: 100%;
      }
      &__imageLicensedByOjk {
        margin-top:0px;
      }
    }
  }

  .kw-koinp2p-futurGift-wrapper {
    background-image: url(${BackgroundP2pScaled});
    background-size: cover;
    background-repeat: no-repeat;
    &__content-futurGift {
      padding: 50px;
      text-align: center;
    }
    i {
      padding: 5px 35px;
      color: #fff !important;
      font-size: 28px;
      font-weight: bold;
      text-transform: uppercase;
      font-style: normal !important;
      background: #9e2c34;
      border-radius: 10px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
    }
    &__content-paragraphOne {
      width: 50%;
      margin: 15px auto;
      font-size: 28px;
      font-weight: normal;
      color: #071e35;
    }
  }

  .kw-koinp2p-how-works-wrapper {
    margin-top: 50px;
    img {
      width: 100%;
    }
    h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      color: #071e35;
    }
    h4 {
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
      color: #566068;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      text-align: center;
      color: #566068;
    }
    @media screen and (max-width: 725px) {
      &__image-hidden-lg {
        display: none;
      }
      h3 {
        font-size: 30px;
        width: 100%;
      }
    }
    @media screen and (min-width: 725px) {
      &__image-hidden-xs {
        display: none;
      }
    }
  }

  .kw-koin-p2p-safe-wrapper {
    padding: 35px;
    background-color: rgb(248, 252, 255);
    h3 {
      width: 70%;
      font-weight: 400;
      font-size: 48px;
      color: #071e35;
    }
    h4 {
      font-weight: bold;
      font-size: 22px;
      color: rgba(45, 45, 45, 0.85);
    }
    p {
      font-weight: normal;
      font-size: 17px;
      color: #566068;
    }
    @media screen and (max-width: 725px) {
      &__content-noSlider {
        display: none;
      }
      h3 {
        font-size: 30px;
        width: 100%;
      }
    }
    @media screen and (min-width: 726px) {
      &__content-slider {
        display: none;
      }
    }
  }

  .kw-koinp2p-statistic-wrapper {
    &__left-content {
      padding-top: 30px;
      padding-bottom: 30px;
      min-height: 383px;
      background-color: rgb(158, 44, 52);
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    h3 {
      margin-bottom: 0 !important;
      font-style: normal;
      font-weight: 600;
      font-size: 48px;
      text-align: center;
      color: #ffffff;
    }
    p {
      height: 50px;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 32px;
      text-align: center;
      color: #ffffff;
    }
    &__center-content {
      padding-top: 30px;
      padding-bottom: 30px;
      min-height: 383px;
      background-color: rgb(128, 33, 40);
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    &__right-content {
      padding-top: 30px;
      padding-bottom: 30px;
      min-height: 383px;
      background-color: rgb(69, 14, 18);
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }

  .kw-koinp2p-getKnow {
    background-image: url(${BackgroundStatistik});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      text-align: center;
      color: #2d2d2d;
      margin-top: 55px;
    }
    p {
      width: 80%;
      margin: 0 auto;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      text-align: center;
      color: #2d2d2d;
      margin-bottom: 10px;
    }
    a {
      font-style: normal;
      font-weight: bold;
      font-size: 17px;
      text-align: center;
      text-decoration-line: underline;
      color: #2d2d2d;
      padding-bottom: 45px;
    }
  }
  
  .kw-koinp2p-they-help {
    img {
      width: 100%;
    }
    h3 {
      width: 75%;
      font-weight: normal;
      color: #071e35;
      font-size: 54px;
      text-align: center;
      margin-top: 80px;
    }
    p {
      font-weight: normal;
      color: #566068;
      font-size: 22px;
      margin-left: 40px;
      text-align: justify;
    }
    &__paragraph {
      width: 90%;
    }
    @media screen and (max-width: 700px) {
      h3 {
        margin-top: 0px;
        font-size: 30px;
        width: 100%;
      }
    }
  }

  .kw-koinp2p-financialApp {
    padding-top: 0px;
    padding-bottom: 0px;
    min-height: 673px;
    background-color: rgb(248, 252, 255);
    h3 {
      width: 70%;
      font-weight: normal;
      font-size: 48px;
      color: #071e35;
      margin-top: 150px;
    }
    p {
      font-weight: normal;
      font-size: 22px;
      color: #071e35;
    }
    img {
      max-width: 777px;
    }
    a {
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      align-items: center;
      color: #378df4;
    }
    @media screen and (max-width: 700px) {
      h3 {
        width: 100%;
        font-size: 33px;
        margin-top: 0px;
      }
    }
    @media screen and (max-width: 1024px) {
      h3 {
        width: 100%;
        font-size: 33px;
        margin-top: 50px;
      }
      img {
        max-width: unset;
        width: 100%;
      }
    }
    @media screen and (max-width: 1300px) {
      img {
        max-width: unset;
        width: 100%;
      }
    }
  }


`;
