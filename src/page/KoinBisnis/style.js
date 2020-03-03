import styled from "styled-components";
import BackgroundWhyKoinBisnis from "../../assets/image/koinbisnis-image/why-koin-bisnis.png";

export const Section = styled.div`
  .kw-bisnisVisual-wrapper {
    &__licensed-logo {
      width: 209px;
      margin-top: 150px;
    }
    &__arready-account {
      margin-bottom: 0;
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      color: #2d2d2d;
    }
    &__pargraph-top {
      font-size: 20px;
      font-weight: normal;
      text-align: left;
      color: #2d2d2d;
    }
    a {
      font-weight: normal;
      font-size: 20px;
      color: #378df4;
    }
    h3 {
      font-size: 48px;
      font-weight: normal;
      color: #2b486d;
    }
    @media screen and (max-width: 800px) {
      &__licensed-logo {
        margin-top: 20px;
      }
    }
  }

  .kw-koinBisnisPoint-wrapper {
    margin-top: 50px;
    &__left-content {
      padding-top: 30px;
      padding-bottom: 30px;
      min-height: 383px;
      background-color: rgb(67, 110, 164);
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    &__leftTwo-content {
      padding-top: 30px;
      padding-bottom: 30px;
      min-height: 383px;
      background-color: rgb(48, 81, 123);
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    &__right-content {
      padding-top: 30px;
      padding-bottom: 30px;
      min-height: 383px;
      background-color: rgb(31, 57, 89);
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    &__rightTwo-content {
      padding-top: 30px;
      padding-bottom: 30px;
      min-height: 383px;
      background-color: rgb(16, 32, 51);
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    &__paragraph {
      padding: 25px;
    }
    h4 {
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 25px;
      text-align: center;
      color: #ffffff;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 22px;
      text-align: center;
      color: #ffffff;
    }
  }

  .kw-koinBisnis-wrapper {
    margin-bottom: 50px;
    background-image: url(${BackgroundWhyKoinBisnis});
    background-repeat: no-repeat;
    background-size: cover;
    &__noSlider {
    }
    h3 {
      margin: 0 auto;
      padding-top: 100px;
      font-weight: 400;
      font-size: 48px;
      color: #071e35;
      text-align: center;
    }
    p {
      font-weight: normal;
      font-size: 17px;
      color: #566068;
    }
    h4 {
      font-weight: bold;
      font-size: 20px;
      color: #2b486d;
    }
    .slick-slide img {
      margin: auto;
    }
    &__right {
      text-align: right;
    }
    @media screen and (max-width: 800px) {
      h3 {
        font-size: 30px;
        padding-top: 50px;
      }
      &__noSlider {
        display: none;
      }
    }
    @media screen and (min-width: 800px) {
      &__slider {
        display: none;
      }
    }
  }

  .kw-koinBisnisHowWorks-wrapper {
    padding-top: 30px;
    padding-bottom: 30px;
    min-height: 686px;
    background-color: rgb(248, 252, 255);
    ol {
      list-style: none;
      counter-reset: my-awesome-counter;
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
    }
    li {
      counter-increment: my-awesome-counter;
      font-style: normal;
      font-weight: normal;
      line-height: 50px;
      font-size: 17px;
      color: #566068;
    }
    ol li::before {
      margin-right: 5px;
      content: counter(my-awesome-counter);
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      color: #566068;
    }
    h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 46px;
      color: #071e35;
    }
    @media screen and (max-width: 800px) {
      &__noSlider {
        display: none;
      }
      h3 {
        text-align: center;
        font-size: 29px;
      }
    }
    @media screen and (min-width: 800px) {
      &__slider {
        display: none;
      }
    }
  }

  .kw-KoinBisnisLoanInterested-wrapper {
    padding-top: 30px;
    padding-bottom: 30px;
    min-height: 613px;
    background-color: rgb(248, 252, 255);
    &__card-wrapper {
      width: 318px;
      height: 400px;
      background: #60b5df;
      &__heading {
        width: 318px;
        height: 100px;
        background: #35a5dc;
        padding: 15px;
        strong {
          font-family: Source Sans Pro;
          font-style: normal;
          font-weight: 600;
          font-size: 17px;
          line-height: 20px;
          letter-spacing: -0.24px;
          text-transform: uppercase;
          color: #ffffff;
        }
        span {
          font-family: Source Sans Pro;
          font-style: normal;
          font-weight: 300;
          font-size: 32px;
          line-height: 40px;
          letter-spacing: 0.41px;
          color: #ffffff;
        }
      }
    }
    h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 46px;
      color: #071e35;
    }
  }
`;
