import React, { Fragment } from "react";
import ProfilePic from "../assets/images/profile_pic.jpg";
import {Row, Col, Image } from "react-bootstrap"

const Header = () => {
  return (
    <div
      id="header-info"
      class="row px-4 bg-white"
      style={{ paddingTop: "70px" }}
    >
      <div class="col-12 col-md-4 text-center" style={{ height: "180px" }}>
        <div class="row sm-height d-none d-md-block"></div>
        <img
          src={ProfilePic}
          id="profile-pic"
          width="165"
          height="165"
          alt="profile_pic"
          class="rounded-circle shadow"
        />
        <div class="row lg-height d-sm-none d-md-block">
          <div class="col-11 d-flex align-items-end h-100 float-right">
            <blockquote class="blockquote text-right d-none d-md-block header-info">
              <p class="mb-0 text-muted handwriting">
                If I had asked people what they wanted, they would have said
                faster horses.
              </p>
              <footer class="blockquote-footer font-italic">
                <small>
                  <cite title="Source Title">Henry Ford</cite>
                </small>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 bg-white header-deatils">
        <div class="row sm-height d-sm-none d-md-block"></div>
        <div class="row">
          <div class="col-12 text-center text-md-left">
            <h1 class="text-center text-md-left">
              <span class="media font-weight-light text-muted">Keith</span>
              <span class="media text-uppercase text-theme sharpie">
                Curbelo
              </span>
            </h1>
          </div>
        </div>
        <div class="row mb-3 text-center">
          <div class="col-12 col-md-6 font-weight-light text-md-left text-muted">
            <div class="media manuscript">
              Web & Mobile Application Developer
            </div>
          </div>
          <div
            id="header-icons"
            class="col-12 col-md-6 mt-3 mt-md-0 text-md-right"
          >
            <span class="mr-3 d-inline-block d-md-block">
              <a
                href="https://www.linkedin.com/in/keithcurbelo"
                target="_blank"
                class="media-icon"
              >
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
            </span>
            <span class="mr-3 d-inline-block d-md-block">
              <a
                href="https://www.facebook.com/keith.curbelo"
                target="_blank"
                class="media-icon"
              >
                <i class="fab fa-facebook fa-2x"></i>
              </a>
            </span>
            <span class="mr-0 mr-md-3 d-inline-block d-md-block">
              <a
                href="https://drive.google.com/file/d/1jgcC__spBqBppKc6cX3PDpK8fS2CN7ud/view?usp=sharing"
                target="_blank"
                class="media-icon"
              >
                <i class="far fa-file-alt fa-2x"></i>
              </a>
            </span>
          </div>
        </div>
        <div class="row md-height d-sm-none d-md-block"></div>
        <div id="header-box" class="row border-top text-center pt-3 text-muted">
          <div class="col-12 col-md-4 mb-3 header-info">
            {/* <h6 class="text-dark-blue">Location</h6>  */}
            <i class="fas fa-map-marker-alt fa-1x text-dark-blue"></i>
            <span class="font-weight-light">Miami, FL</span>
          </div>
          <div class="col-12 col-md-4 mb-3 header-info">
            {/* <h6 class="text-dark-blue">Phone</h6>  */}
            <i class="fas fa-mobile-alt fa-1x text-dark-blue"></i>
            <span class="font-weight-light">786.210.1141</span>
          </div>
          {/* <div class="col-12 col-md-3 mb-3">
                    <h6 class="">Website</h6>
                    <span class="font-weight-light">www.keithcurbelo.com</span>
                </div> */}
          <div class="col-12 col-md-4 mb-3 header-info px-md-2">
            {/* <h6 class="text-dark-blue">E-Mail</h6> */}
            <i class="fas fa-envelope fa-1x text-dark-blue"></i>
            <span class="font-weight-light">contact@keithcurbelo.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
