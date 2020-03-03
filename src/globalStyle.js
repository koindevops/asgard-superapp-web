import { createGlobalStyle } from "styled-components";
import BackgroundHowToUse from "./assets/image/background-blue-red-scaled.png";

export const GlobalStyle = createGlobalStyle`

  /*------------------------------------*\
    # Global
  \*------------------------------------*/

  .kw-koinp2p-profil-wrapper {
    margin-bottom: 35px;
    &__heading-text {
      margin-top: 55px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      &__image {
        display: block;
        margin: auto;
      }
      h3 {
        font-weight: 400;
        font-size: 48px;
        color: #071e35;
        text-align: center;
      }
      p {
        width: 60%;
        margin: 0 auto;
        font-weight: normal;
        font-size: 22px;
        text-align: center;
        margin-bottom: 45px;
        color: #566068;
      }
      @media screen and (max-width: 725px) {
        h3 {
          font-size: 30px;
        }
        p {
          width: 100%;
          font-size: 20px;
        }
        &__image {
          display: none;
        }
      }
      @media screen and (min-width: 726px) {
        &__slider {
          display: none;
        }
      }
    }
  }

  .modal-video-slider .ant-modal-content {
    background-color: unset !important;
    box-shadow: unset !important;
  }
  
  .modal-video-slider .ant-modal-close {
    color: #ffffff !important;
    font-weight: bolder !important;
  }
  .modal-video-slider .ant-modal-close-x {
    font-size: 25px !important;
  }
  .modal-video-slider .ant-modal-header {
    background: unset !important;
    border-bottom: unset !important;
  }
  .modal-video-slider .ant-modal {
    width: 70% !important;
  }
  .modal-video-slider .ant-modal-footer {
    display: none;
  }

  .video-wrapper {
    position: relative;
    padding: 33.35% 0px;
    height: 0px;
    transform: translate(0%, 1%);
  }
  .video-wrapper iframe {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }

  .kw-home-slider-media {
    &__statistik-heading {
      text-align: center;
      margin-bottom: 0;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      color: #2b486d;
    }
    &__statistik-pargraph {
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      color: #566068;
      text-align: center;
    }
    &__home-slider-media {
      text-align: center;
      margin-bottom: 0px;
      font-size: 20px;
      font-style: italic;
      color: #2d2d2d;
    }
    &__wrapper {
      display: flex;
      justify-content: space-around;
      margin-top: 33px;
      img {
        width: 150px;
      }
    }
  }

  .kw-koinP2p-trusted {
    h3 {
      font-weight: 400;
      font-size: 48px;
      text-align: center;
      color: #2b486d;
    }
    p {
      text-align: center;
      font-weight: normal;
      font-size: 22px;
      color: #566068;
    }
  }

  .kw-home-how-to-use-koinworks-wrapper {
    background-color: rgb(43, 72, 109);
  }

  .kw-home-how-to-use-koinworks {
    background-image: url(${BackgroundHowToUse});
    background-size: contain;
    background-repeat: no-repeat;
    padding: 30px;
    image {
      width: 100%;
    }
    &__slider-image {
      margin-top: 100px;
    }
    p {
      font-weight: normal;
      font-size: 20px;
      color: #ffffff;
    }
    h4 {
      font-weight: 400;
      font-size: 28px;
      color: #ffffff;
    }
    &__label-text {
      font-weight: 400;
      font-size: 35px;
      color: #ffffff;
      text-align: center;
    }
    &__slider-image .slick-dots {
      bottom: 99px;
    }
    &__slider-image .slick-dots li button:before {
      font-size: 26px;
      color: #ffffff;
    }
    &__slider-image .slick-next {
      right: 37%;
      top: 80%;
      z-index: 30;
    }
    &__slider-image .slick-prev {
      left: 40%;
      top: 80%;
      z-index: 30;
    }
    &__slider-image .slick-prev:before,
    .slick-next:before {
      font-size: 35px;
    }
    
    @media screen and (min-width: 992px) and (max-width: 1199px) {
      &__slider-image .slick-dots {
        bottom: 78px;
      }
    }

    @media screen and (min-width: 726px) and (max-width: 991px) {
      &__slider-image .slick-next {
        right: 0%;
        top: 35%;
      }
      &__slider-image .slick-prev {
        top: 35%;
        left: 0%;
      }
      &__slider-image .slick-dots {
        bottom: 0px;
      }
    }

    @media screen and (max-width: 725px) {
      &__slider-image .slick-dots {
        display: none;
      }
      h3 {
        margin-top: 0px;
      }
      &__slider-image {
        margin-top: 0px;
      }
      &__slider-image .slick-next {
        right: 20px;
        top: 20%;
        z-index: 30
      }
      &__slider-image .slick-prev {
        left: 20px;
        top: 20%;
        z-index:30
      }
    }

  }
    
    .container-fluid {
        width: 100%;
        padding-right: 1.5rem;
        padding-left: 1.5rem;
        margin-right: auto;
        margin-left: auto;
    }    

    .container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }    

    @media  (min-width: 1200px){
        .container {
            width: 1200px;
        }    
    }
    @media (min-width: 992px) and (max-width: 1199px){
        .container{
            max-width: 960px  
        }    
    }
    @media (min-width: 768px) and (max-width: 991px){
        .container{
            max-width: 720px      
        }    
    }
    @media (min-width: 576px) and (max-width: 767px){
        .container {
            max-width: 540px
        }    
    }
`;
