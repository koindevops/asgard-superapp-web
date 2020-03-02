import styled from "styled-components";

export const Section = styled.div`
  .kw-header-stuck {
    position: fixed;
    -webkit-transform: translateZ(0);
    -webkit-transform: none !important;
    transform: none !important;
    top: 0;
    width: 100%;
    z-index: 30;
    animation: stuckMoveDown 0.6s;
  }

  .kw-header-activeScroll {
    background-color: #ffffff;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
  }

  .kw-header-noActiveScroll {
    background-color: #274164;
  }

  .kw-headers-wrapper {
    box-shadow: none;
    background-color: transparent;
    background-image: none;
    z-index: 30;
    transition: background-color 0.3s, opacity 0.3s;
    &__main-desktop {
      z-index: 30;
      position: relative;
      padding: 15px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    &__main-mobile {
      padding: 15px;
      width: 100%;
      display: flex;
      z-index: 30;
      position: relative;
      justify-content: space-between;
    }
    &__main-mobile-no-active {
      padding: 15px;
      width: 100%;
      display: flex;
      z-index: 30;
      position: relative;
      justify-content: space-between;
    }
    &__main-mobile .ant-btn-primary {
      color: #fff;
      background-color: transparent;
      border-color: unset;
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
      -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
      box-shadow: unset;
      font-size: 20px;
      border: unset;
    }
    &__main-mobile-no-active .ant-btn-primary {
      color: black;
      background-color: transparent;
      border-color: unset;
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
      -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
      box-shadow: unset;
      font-size: 20px;
      border: unset;
      top: 7px;
    }

    &__main-menu {
      a.ant-dropdown-link.ant-dropdown-trigger {
        margin: 10px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 16px;
      }
      a.ant-dropdown-link {
        margin: 10px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 16px;
      }
      a.ant-dropdown-active.ant-dropdown-trigger {
        margin: 10px;
        color: #2b486d !important;
        font-size: 16px;
      }
      a.ant-dropdown-active {
        margin: 10px;
        color: #2b486d !important;
        font-size: 16px;
      }
      &__button-language {
        width: 40px;
        min-height: 27px !important;
        padding: 10px !important;
        margin-left: 10px;
        margin-right: 10px;
        color: #ffffff;
        background: #2b486d;
        font-size: 17px;
        font-weight: bold;
        cursor: pointer;
        line-height: 0 !important;
      }
      .active {
        color: red;
        border: 1px solid #dddddd;
        border-radius: 4px;
        cursor: pointer;
      }
      &__button-language-wrapper {
        display: unset;
        margin-top: 22px;
      }
    }

    @media screen and (max-width: 825px) {
      &__main-desktop {
        display: none;
      }
    }
    @media screen and (min-width: 826px) {
      &__main-mobile {
        display: none;
      }
      &__main-mobile-no-active {
        display: none;
      }
    }
  }
`;
