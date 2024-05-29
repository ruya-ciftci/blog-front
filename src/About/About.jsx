 import React from 'react';
import './About.css';
import dogusUniImage from '../assets/hakkında/dogus.jpg';
import foto from '../assets/hakkında/ben.jpg';
import tubitak from '../assets/hakkında/tubitak.png';
import Süs from '../assets/hakkında/test-bg.jpg';


const About = () => {
  return (
    <>
      <section id="about-info" className="bg-light py-3">
        <div className="container">
          <div className="info-left">
            <h1 className="l-heading"><span className="text-primary">İşte Ben Kimim</span> & Ne Yapıyorum?</h1>
            <p>Yazılım mühendisi olma yolunda heyecanla ilerleyen bir öğrenciyim. Bu site, benim dijital dünyamdaki izlerimi paylaştığım bir köşe.</p>
            <p>Aramıza hoş geldiniz! Burada sadece kod yazmakla kalmayıp, aynı zamanda deneyimlerimi, fikirlerimi ve yeni öğrendiklerimi projelerle sizlere yansıtacağım. Birlikte öğrenip büyüyeceğiz, bu yolculukta benimle beraber olmaya ne dersiniz?</p>
            <div className="ovals">
              <a href="./projeler.html" className="white-oval">Projelerim</a>
            </div>
          </div>
          <div className="info-right">
            <img src={foto} alt="Benim Fotoğrafım" />
          </div>
        </div>
      </section>
      <div className="clr"></div>
      <section id="testimonials" className="py-3" style={{ backgroundImage: `url(${Süs})` }}>
        <h2 className="l-heading">Benim Dijital Dünyam</h2>
        <div className="testimonial-container">
          <div className="testimonial bg-primary">
            <img src={dogusUniImage} alt="Doğuş Üniversitesi" className="Samantha" />
            <p>Doğuş Üniversitesi'nde 3. sınıf yazılım mühendisliği öğrencisiyim. HTML, CSS, JavaScript, React, C# ve SQL gibi dillerde bilgi edindim ve deneyim kazandım. Yazılım dünyasındaki bu yolculuğumda sürekli kendimi geliştirmeye odaklanıyorum. Yeniliklere açık bir şekilde öğrenmeye devam ediyor ve bu bilgileri paylaşmayı seviyorum.</p>
          </div>
          <div className="testimonial bg-primary">
            <img src={tubitak} alt="TÜBİTAK" className="Jen" />
            <p>TÜBİTAK'ta frontend alanında staj yapma fırsatı buldum ve şu anda hem frontend hem de backend alanlarında kendimi geliştirmeye hevesliyim. Yazılım dünyasında yeni teknolojileri öğrenmeyi ve projelerde aktif olarak yer almayı seviyorum. Burada, deneyimlerimi ve yeni öğrendiklerimi paylaşarak birlikte büyümeyi hedefliyorum.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;