import React, { useState } from "react";
import { Drawer, Button, Icon, Row, Col, Menu } from "antd";
import "./HeadersMobile.css";
import { useTranslation } from "react-i18next";

const { SubMenu } = Menu;

function HeadersMobile(props) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("left");
  function onClose() {
    setVisible(false);
  }

  function showDrawer() {
    setVisible(true);
  }
  return (
    <React.Fragment>
      <div className="kw-headers-wrapper-mobile">
        <Row>
          <Col xs={5}>
            <Button type="primary" onClick={showDrawer}>
              <Icon type="menu" />
            </Button>
          </Col>
          <Col xs={19}>
            <img
              src={require(props.checkScrollHeader
                ? "../../assets/image/koinworks-white-logo.png"
                : "../../assets/image/koinworks-logo.png")}
              alt="kw-logo-koinworks"
              style={{
                maxHeight: props.checkScrollHeader ? 35 : 27,
                marginTop: props.checkScrollHeader ? 0 : 15
              }}
            />
          </Col>
        </Row>
      </div>
      <Drawer
        title=""
        placement={placement}
        className="kw-headers-drawer-mobile"
        onClose={onClose}
        visible={visible}
      >
        <Menu
          // onClick={this.handleClick}
          style={{ width: 256, marginTop: 30 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={<span> {t("menuHeaders:nameHeaders.nameWealth")}</span>}
          >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span> {t("menuHeaders:nameHeaders.nameLoans")}</span>}
          >
            <Menu.Item key="3">Option 9</Menu.Item>
            <Menu.Item key="4">Option 10</Menu.Item>
            <Menu.Item key="5">Option 11</Menu.Item>
            <Menu.Item key="6">Option 12</Menu.Item>
          </SubMenu>
          <Menu.Item key="7">{t("menuHeaders:nameHeaders.nameFeatures")}</Menu.Item>
          <Menu.Item key="8">Blog</Menu.Item>
          <SubMenu
            key="sub3"
            title={<span> {t("menuHeaders:nameHeaders.nameCompany")} </span>}
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={<span>{t("menuHeaders:nameHeaders.nameLogin")} </span>}
          >
            <Menu.Item key="13">Option 9</Menu.Item>
            <Menu.Item key="14">Option 10</Menu.Item>
            <Menu.Item key="15">Option 11</Menu.Item>
            <Menu.Item key="16">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
        {props.languageButton}
      </Drawer>
    </React.Fragment>
  );
}

export default HeadersMobile;
