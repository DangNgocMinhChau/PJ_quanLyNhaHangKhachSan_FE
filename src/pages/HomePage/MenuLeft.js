import React from "react";

function MenuLeft(props) {
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Quản lý khách sạn</div>
      </a>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li class="nav-item active">
        <a class="nav-link" href="index.html">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div class="sidebar-heading">Hệ thống</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-fw fa-cog"></i>
          <span>Quản lý nhà hàng</span>
        </a>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Chức năng</h6>
            <a class="collapse-item" href="buttons.html">
              Danh sách
            </a>
            <a class="collapse-item" href="cards.html">
              Thêm mới
            </a>
            <a class="collapse-item" href="cards.html">
              Cập nhật
            </a>
            <a class="collapse-item" href="cards.html">
              Xóa
            </a>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i class="fas fa-fw fa-wrench"></i>
          <span>Quản lý khách sạn</span>
        </a>
        <div
          id="collapseUtilities"
          class="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <a class="collapse-item" href="utilities-color.html">
              Colors
            </a>
            <a class="collapse-item" href="utilities-border.html">
              Borders
            </a>
            <a class="collapse-item" href="utilities-animation.html">
              Animations
            </a>
            <a class="collapse-item" href="utilities-other.html">
              Other
            </a>
          </div>
        </div>
      </li>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div class="sidebar-heading">Quản lý người dùng</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i class="fas fa-fw fa-folder"></i>
          <span>Người dùng</span>
        </a>
        <div
          id="collapsePages"
          class="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Đăng nhập tài khoản</h6>
            <a class="collapse-item" href="login.html">
              Đăng nhập
            </a>
            <a class="collapse-item" href="register.html">
              Đăng ký
            </a>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li class="nav-item">
        <a class="nav-link" href="charts.html">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Báo cáo tổng quan</span>
        </a>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li class="nav-item">
        <a class="nav-link" href="tables.html">
          <i class="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default MenuLeft;
