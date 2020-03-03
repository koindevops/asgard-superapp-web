import React from "react";
import { Section } from "./style";
import { Menu, Dropdown, Icon } from "antd";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import HeadersMobile from "./HeadersMobile";

function Headers(props) {
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

  console.log(props.match.children.props.location.pathname);

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

  const menuNameWealth = (
    <Menu style={{ width: 180 }}>
      <Menu.Item>
        <Link to="/koinp2p">KoinP2P</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/koinrobo">KoinRobo</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/diversification">Diversifikasi</Link>
      </Menu.Item>
    </Menu>
  );

  const menuNameLoans = (
    <Menu style={{ width: 180 }}>
      <Menu.Item>
        <Link to="/koinbisnis">KoinBisnis</Link>
      </Menu.Item>
      <Menu.Item>
        <a
          rel="noopener noreferrer"
          href="https://koinworks.com/id/pinjaman/dana-pendidikan"
          target="_blank"
        >
          KoinPintar
        </a>
      </Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu style={{ width: 180 }}>
      <Menu.Item>
        <Link to="/koinbisnis">KoinBisnis</Link>
      </Menu.Item>
      <Menu.Item>
        <a
          rel="noopener noreferrer"
          href="https://koinworks.com/id/pinjaman/dana-pendidikan"
          target="_blank"
        >
          KoinPintar
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
          <Link to="/">
            <img
              src={require(checkScrollHeader
                ? "../../assets/image/koinworks-white-logo.png"
                : "../../assets/image/koinworks-logo.png")}
              alt="kw-logo-koinworks"
              style={{ maxHeight: checkScrollHeader ? 35 : 27 }}
            />
          </Link>
          <div className="kw-headers-wrapper__main-menu">
            <Dropdown overlay={menuNameWealth}>
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
            <Dropdown overlay={menuNameLoans}>
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

            <a
              className={
                checkScrollHeader ? `ant-dropdown-link` : `ant-dropdown-active`
              }
              rel="noopener noreferrer"
              href="https://koinworks.com/super-app/fitur/"
              target="_blank"
            >
              {t("menuHeaders:nameHeaders.nameFeatures")}
            </a>
            <a
              rel="noopener noreferrer"
              href="https://koinworks.com/blog/"
              className={
                checkScrollHeader ? `ant-dropdown-link` : `ant-dropdown-active`
              }
              target="_blank"
            >
              Blog
            </a>

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
            checkScrollHeader
              ? "kw-headers-wrapper__main-mobile"
              : "kw-headers-wrapper__main-mobile-no-active"
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
