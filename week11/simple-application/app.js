'use strict';

const main = async() => {
  const response = await fetch('http://localhost:3001/api/exams');
  if(response.ok) {
    const data = await response.text();
    document.querySelector('#result').innerText = data;
  }
    
}

main();
