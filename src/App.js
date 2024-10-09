import logo from './logo.svg';
import './App.css';
import Info from './components/info';
import React, { Component } from 'react';  

function App() {
  return (
    <div className="App">
      
      <Info  
       className="Card"
       img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
       name="Enes"
       lastname="Sen"
       age="23"
       about="I was born on November 7, 1998 in Balikesir. After
graduating from Vocational High School, I won 2 years of
university and at the end of 2 years, I transferred to the
Department of Electrical and Electronics Engineering.
In addition to the programs I learned in high school
(AutoCAD, Proteus and C), I learned website programming
while at university. Then I learned Unity and published my
first mobile game. I am currently learning the mobile
programming language (Flutter).
In addition to all these, I continue to work to improve myself
by opening an account on various platforms (bionluk,
freelancer, fiver) to work as a freelancer.
I am currently a 3rd year student. I am looking for a place to
do an internship this summer or at the end of the 4th year.
"
      
      />
    </div>
  );
}

export default App;
