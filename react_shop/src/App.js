import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import data from './data';
import { Link, Route, Routes } from 'react-router-dom';
import Detail from './routes/Detail';


function App() {

  let [shoes] = useState(data);

  return (
    <>
      <div className='App'>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>



      <Link to={'/'}>홈으로</Link>
      <Link to={'/detail'}>detail</Link>


      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i} ></Card>
                })}
              </div>
            </div>
          </>
        } />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
      </Routes>
    </>
  );
}

// 카드 컴포넌트
function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
