import React from 'react';

function Header() {
  return (
    <header style={{backgroundColor:'#ffffffff', padding:'20px'}}>
      <nav style={{display:'flex', justifyContent:'space-between'}}>
        <h1 style={{color:'orange'}}>Car Service</h1>
        <div>
          <a href="#home" style={{margin:'0 10px'}}>Home</a>
          <a href="#mission" style={{margin:'0 10px'}}>Mission</a>
          <a href="#news" style={{margin:'0 10px'}}>News</a>
          <a href="#contact" style={{margin:'0 10px'}}>Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
