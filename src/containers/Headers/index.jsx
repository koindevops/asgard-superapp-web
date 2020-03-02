import React from "react";
import { Section } from "./style";
import { Menu, Dropdown, Icon, Affix, Row } from "antd";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import HeadersMobile from "./HeadersMobile";

function Headers() {
  const language = [
    {
      id: 1,
      language: "id"
    },
    {
      id: 2,
      language: "en"
    }
  ];
  const [languageSelected, setLanguageSelected] = useState("id");
  const [scrollClasses, setScrollClasses] = useState(
    "kw-header-noActiveScroll"
  );
  const [kwHeaderStuck, setKwHeaderStuck] = useState("");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    updateHeaderHeight();
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  });

  function updateHeaderHeight() {
    let bottomHeaderHeight = document.getElementById("bottomHeader")
      .scrollHeight;
    console.log(bottomHeaderHeight);
  }

  function listenScrollEvent() {
    let header = document.getElementById("bottomHeader").offsetTop;
    if (window.pageYOffset > header) {
      setScrollClasses("kw-header-activeScroll");
      setKwHeaderStuck("kw-header-stuck");
    } else {
      setScrollClasses("kw-header-noActiveScroll");
      setKwHeaderStuck();
    }
  }

  const changeLanguage = language => {
    setLanguageSelected(language);
    i18n.changeLanguage(language);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  let checkScrollHeader =
    scrollClasses === "kw-header-noActiveScroll" ? true : false;

  function languageButton() {
    return language.map((lang, index) => {
      return (
        <span
          key={index}
          className={`kw-headers-wrapper__main-menu__button-language ${
            languageSelected === lang.language ? "active" : "notActive"
          }`}
          onClick={() => changeLanguage(lang.language)}
        >
          {lang.language.toUpperCase()}
        </span>
      );
    });
  }

  return (
    <Section>
      <div className={`kw-headers-wrapper ${kwHeaderStuck}`}>
        <div className={`kw-headers-wrapper__main-desktop ${scrollClasses}`}>
          <img
            src={require(checkScrollHeader
              ? "../../assets/image/koinworks-white-logo.png"
              : "../../assets/image/koinworks-logo.png")}
            alt="kw-logo-koinworks"
            style={{ maxHeight: checkScrollHeader ? 35 : 27 }}
          />
          <div className="kw-headers-wrapper__main-menu">
            <Dropdown overlay={menu}>
              <Link
                to="#"
                className={
                  checkScrollHeader
                    ? `ant-dropdown-link`
                    : `ant-dropdown-active`
                }
                onClick={e => e.preventDefault()}
              >
                {t("menuHeaders:nameHeaders.nameWealth")}
                <Icon type="down" />
              </Link>
            </Dropdown>
            <Dropdown overlay={menu}>
              <Link
                to="#"
                className={
                  checkScrollHeader
                    ? `ant-dropdown-link`
                    : `ant-dropdown-active`
                }
                onClick={e => e.preventDefault()}
              >
                {t("menuHeaders:nameHeaders.nameLoans")} <Icon type="down" />
              </Link>
            </Dropdown>

            <Link
              className={
                checkScrollHeader ? `ant-dropdown-link` : `ant-dropdown-active`
              }
              to="#"
              onClick={e => e.preventDefault()}
            >
              {t("menuHeaders:nameHeaders.nameFeatures")}
            </Link>

            <Link
              to="#"
              className={
                checkScrollHeader ? `ant-dropdown-link` : `ant-dropdown-active`
              }
              onClick={e => e.preventDefault()}
            >
              Blog
            </Link>

            <Dropdown overlay={menu}>
              <Link
                to="#"
                className={
                  checkScrollHeader
                    ? `ant-dropdown-link`
                    : `ant-dropdown-active`
                }
                onClick={e => e.preventDefault()}
              >
                {t("menuHeaders:nameHeaders.nameCompany")} <Icon type="down" />
              </Link>
            </Dropdown>
            <Dropdown overlay={menu}>
              <Link
                to="#"
                className={
                  checkScrollHeader
                    ? `ant-dropdown-link`
                    : `ant-dropdown-active`
                }
                onClick={e => e.preventDefault()}
              >
                {t("menuHeaders:nameHeaders.nameLogin")} <Icon type="down" />
              </Link>
            </Dropdown>
            <div className="kw-headers-wrapper__main-menu__button-language-wrapper">
              {languageButton()}
            </div>
          </div>
        </div>
        <div
          id="bottomHeader"
          className={`${
            checkScrollHeader ? 
            "kw-headers-wrapper__main-mobile" : 
            "kw-headers-wrapper__main-mobile-no-active"
          }  ${scrollClasses}`}
        >
          <HeadersMobile
            languageButton={languageButton()}
            checkScrollHeader={checkScrollHeader}
          />
        </div>
      </div>
    </Section>
  );
}

export default Headers;
