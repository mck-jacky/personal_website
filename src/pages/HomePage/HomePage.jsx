import React from 'react';
import './index.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />

      <div className='container'>
        
        <div class="waviy">
          <span className="--i:1">H</span>
          <span className="--i:2">i</span>
          <span className="--i:3">,</span>
          <span className="--i:4">&emsp;</span>
          <span className="--i:5">I</span>
          <span className="--i:6">'</span>
          <span className="--i:7">m</span>
          <span className="--i:8">&emsp;</span>
          <span className="--i:9">J</span>
          <span className="--i:10">a</span>
          <span className="--i:11">c</span>
          <span className="--i:12">k</span>
          <span className="--i:13">y</span>
          <span className="--i:14">&emsp;</span>
          <span className="--i:15">M</span>
          <span className="--i:16">a</span>

        </div>
        <div className='info'>second year Computer Science student in UNSW</div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage