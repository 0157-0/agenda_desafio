import Main from '../../components/template/Main';
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './Home.css';
import './style.css';
import './responsive.css';
import sliderimg from '../../assets/images/slider-img.png'
import cloud from '../../assets/images/cloud-download.png'
import heart from '../../assets/images/heart.png'
import playstore from '../../assets/images/playstore.png'
import trophy from '../../assets/images/trophy_.png'
import download from '../../assets/images/download-img.png'



const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    
    <Main  icon="book" title="Agenda" subtitle="Ainda em versão web, em breve o lançamento do aplicativo para Android e IOS.">

      <h4>Lista de contatos</h4>
        <button className="btn btn-dark pd">
      <Link className="estilo" to='/users'>
        <i className="fa fa-users"></i> Contatos
      </Link>
    </button>
    
        <button className="btn btn-dark">
      <Link className="estilo" to='/bloco'>
        <i className="fa fa-users"></i> Tarefas
      </Link>
    </button>
    <hr />  
    <div class="hero_area">
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="#">
            <span>
            COMING SOON
            </span>
          </a>
        </nav>
      </div>
    </header>
    
    <section class=" slider_section position-relative">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="detail-box">
              <h2>
                best design
              </h2>
              <h1>
                Mobile <br /></h1>
                <h2>applications </h2>
                
              
              <div>
                <a href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="img-box">
                    <img src={sliderimg} alt="" />
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="img-box">
                    <img src={sliderimg} alt="" />
                  </div>
                </div>
                  
              </div>
              <a class="carousel-control-prev" href="#" role="button" data-slide="prev">
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#" role="button" data-slide="next">
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

 <br />

  

  <section class="download_section layout_padding-bottom">
    <div class="container">
      <div class="heading_container">
        <h2>
          Download Anytime, Anywhere
        </h2>
      </div>
      <div class="layout_padding2-top">
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <div class="head-box">
                <div class="img-box"> 
                  <img src={cloud} alt="" />
                </div>
                <h6>
                  Download The App
                </h6>
              </div>
              <div class="detail-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam
                </p>
              </div>
            </div>
            <div class="box">
              <div class="head-box">
                <div class="img-box">
                  <img src={trophy} alt="" />
                </div>
                <h6>
                  Easy to Customize
                </h6>
              </div>
              <div class="detail-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam
                </p>
              </div>
            </div>
            
          </div>
          <div class="col-md-4">
            <div class="main-img-box">
              <img src={download} alt="" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="head-box">
                <div class="img-box">
                  <img src={playstore} alt="" />
                </div>
                <h6>
                  Connect Your Store
                </h6>
              </div>
              <div class="detail-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam
                </p>
              </div>
            </div>
            <div class="box">
              <div class="head-box">
                <div class="img-box">
                  <img src={heart} alt="" />
                </div>
                <h6>
                  Enjoy Our App
                </h6>
              </div>
              <div class="detail-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>

   

    </Main>
     

      
  );
};

export default Home;

