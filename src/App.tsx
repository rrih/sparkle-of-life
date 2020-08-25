import React from 'react';
import styled from "styled-components";

const Title = styled.div`
  color: red;
  font-size: 5em;
`
const All = styled.div`
  text-align: center;
`

const Button = styled.button`
  font-size: 20px;
  margin: 10px;
  padding: 10px 17px;

`

function App() {
  return (
    <All>
      <Title>sparkle of life</Title>
      <div></div>
      <div>
        <Button type="button" className="btn btn-outline-primary rounded-pill">generate</Button>
      </div>
      <div>
        <Button type="button" className="btn btn-primary rounded-pill"><i className="fab fa-twitter"></i> ツイートする</Button>
      </div>
    </All>
  );
}

export default App;