import React from 'react';

export default function TNav() {
  let page = window.location.pathname
  let projects = [
    "/lakeview/index.html",
    "/jamila/index.html",
    "/palmcity/index.html",
  ]
  let services = [
    "/consultant.html",
    "/sale.html",
    "/expertise.html",
  ]

    return (
      <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div class="container">
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
            aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a class="navbar-brand text-brand" href="index.html">BĐS<span class="color-b">Tacodo</span></a>
          <button type="button" class="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse"
            data-target="#navbarTogglerDemo01" aria-expanded="false">
            <span class="fa fa-search" aria-hidden="true"></span>
          </button>
          <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class={page.indexOf('/index') === 0 ? `nav-link active` : `nav-link`} href="/index.html">Trang chủ</a>
              </li>
              <li class="nav-item">
                <a class={page.indexOf('/about') === 0 ? `nav-link active` : `nav-link`} href="/about.html">Giới thiệu</a>
              </li>
              <li class="nav-item">
                <a class={page.indexOf('/property') === 0 ? `nav-link active` : `nav-link`} href="/property.html">BĐS HOT</a>
              </li>
              <li class="nav-item dropdown">
                <a class={projects.indexOf(page) !== -1 ? `nav-link dropdown-toggle active` : `nav-link dropdown-toggle`} href="#" id="projects" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Dự án
                </a>
                <div class="dropdown-menu" aria-labelledby="projects">
                  <a class="dropdown-item" href={projects[0]}>Lake View</a>
                  <a class="dropdown-item" href={projects[1]}>Jamila</a>
                  <a class="dropdown-item" href={projects[2]}>Palm City</a>
                  <a class="dropdown-item" target="_blank" href="https://cattuong.site">Cát Tường</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class={services.indexOf(page) != -1 ? `nav-link dropdown-toggle active` : `nav-link dropdown-toggle`} href="#" id="services" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Dịch vụ
                </a>
                <div class="dropdown-menu" aria-labelledby="services">
                  <a class="dropdown-item" href={services[0]}>Tư vấn</a>
                  <a class="dropdown-item" href={services[1]}>Ký gửi BĐS</a>
                  <a class="dropdown-item" href={services[2]}>Thẩm định</a>
                </div>
              </li>
              <li class="nav-item">
                <a class={(page.indexOf('/contact') == 0) ? `nav-link active` : `nav-link`} href="/contact.html">Liên hệ</a>
              </li>
            </ul>
          </div>
          <button type="button" class="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block" data-toggle="collapse"
            data-target="#navbarTogglerDemo01" aria-expanded="false">
            <span class="fa fa-search" aria-hidden="true"></span>
          </button>
        </div>
      </nav>
    );

}