import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Danh sách",
    to: "/quanlynhahang",
    exact: true,
  },
  {
    name: "about",
    to: "/quanlynhahang/about",
    exact: true,
  },
  {
    name: "Đăng nhập",
    to: "/login",
    exact: true,
  },
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        return (
          <Link className="collapse-item" to={to}>
            {label}
          </Link>
        );
      }}
    />
  );
};

function renderMenu(menus) {
  var result = null;
  if (menus.length > 0) {
    result = menus.map((item, index) => {
      return (
        <MenuLink
          label={item.name}
          to={item.to}
          activeOnlyWhenExact={item.exact}
        />
      );
    });
  }
  return result;
}
function MenuConfig(props) {
  return <>{renderMenu(menus)}</>;
}

export default MenuConfig;
