import styled from "styled-components";
import BackgroundImageFinancialHero from "../../assets/image/koinrobo-image/financial-hero-koin-robo.png";

export const Section = styled.div`
  .kw-koinRoboVisual {
    &__koin-robo-visual-right {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    }
    &__left-content {
      margin-top: 99px;
      h2 {
        font-size: 48px;
        font-weight: normal;
        color: #2b486d;
      }
      p {
        font-size: 20px;
        font-weight: normal;
        text-align: left;
        color: #2d2d2d;
      }
      &__imageLicensedByOjk {
        max-width: 100%;
        height: 50px;
        display: inline-block;
        vertical-align: middle;
      }
    }
    @media screen and (max-width: 850px) {
      &__koin-robo-visual-right {
        width: 100%;
        margin-top: 10px;
      }
      &__left-content {
        margin-top: 0px;
        h2 {
          font-size: 38px;
        }
      }
    }
  @media screen and (min-width:993px) and (max-width:1610px){
      margin-bottom: 50px;
  } 
  }

  .kw-koinRobo-statistik {
    &__left-content {
      padding: 30px;
      min-height: 383px;
      background-color: rgb(55, 141, 244);
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    &__center-content {
      padding: 30px;
      min-height: 383px;
      background-color: rgb(43, 115, 201);
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    &__right-content {
      padding: 30px;
      min-height: 383px;
      background-color: rgb(18, 82, 159);
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    h4 {
      margin-bottom: 0 !important;
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      text-align: center;
      color: #ffffff;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 32px;
      text-align: center;
      color: #ffffff;
    }
  }

  .kw-koinRoboFeatures-wrapper {
    h3 {
      margin-bottom: 50px;
      margin-top: 100px;
      font-weight: 400;
      font-size: 48px;
      color: #071e35;
    }
    h4 {
      font-weight: bold;
      font-size: 20px;
      color: #2b486d;
    }
    p {
      font-weight: normal;
      font-size: 17px;
      color: #566068;
    }
    @media screen and (max-width: 750px) {
      h3 {
        font-size: 28px;
      }
    }
  }

  .kw-koinRobo-makingSocial-wrapper {
    padding-top: 0px;
    padding-bottom: 0px;
    min-height: 673px;
    background-color: rgb(248, 252, 255);
    img {
      width: 555px;
      display: block;
      margin: auto;
      margin-top: 100px;
    }
    h3 {
      font-weight: 400;
      font-size: 48px;
      color: #071e35;
      margin-top: 170px;
    }
    p {
      font-weight: normal;
      font-size: 22px;
      color: #566068;
    }
    @media screen and (max-width: 700px) {
      h3 {
        font-size: 38px;
        margin-top: 70px;
      }
      img {
        width: 100%;
        margin-top: 50px;
      }
    }
  }

  .kw-robo-invest-wrapper {
    padding-top: 30px;
    padding-bottom: 30px;
    min-height: 667px;
    background-color: rgb(248, 252, 255);
    h3 {
      font-style: normal;
      font-weight: normal;
      font-size: 48px;
      text-align: center;
      line-height: 64px;
      color: #071e35;
      margin-bottom: 50px;
    }
    &__card {
      width: 269px;
      height: 420px;
      background: #f2f2f2;
      border-radius: 6px;
      -webkit-border-radius: 6px;
      -moz-border-radius: 6px;
    }
    &__box-text {
      padding: 25px 12px;
    }
    img {
      width: 100%;
    }
    h4 {
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 25px;
      text-align: center;
      color: #071e35;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 22px;
      text-align: center;
      color: #566068;
    }
    @media screen and (min-width: 800px) {
      &__sliderOn {
        display: none;
      }
    }
    @media screen and (max-width: 800px) {
      &__sliderOf {
        display: none;
      }
    }
  }

  .kw-koinRobo-financial-app-wrapper {
    background-image: url(${BackgroundImageFinancialHero});
    background-size: cover;
    h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      color: #071e35;
      margin-top: 100px;
    }
    p {
      font-weight: normal;
      font-size: 22px;
      color: #566068;
    }
    a {
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      color: #378df4;
    }
    img{
      width: 100%;
    }
    @media screen and (max-width: 750px) {
      h3 {
        margin-top: 30px;
      }
    }
  }
`;
