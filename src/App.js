import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

  }

  customer = [
    {
      id: 1,
      image: 'https://placeimg.com/32/32/1',
      name: "홍길동",
      birthday: "970219",
      gender: "남자",
      job: "대학생"
    },
    {
      id: 2,
      image: 'https://placeimg.com/64/64/2',
      name: "김아무개",
      birthday: "881219",
      gender: "여자",
      job: "회사원"
    },
    {
      id: 3,
      image: 'https://placeimg.com/64/64/3',
      name: "이순신",
      birthday: "781219",
      gender: "남자",
      job: "디자이너"
    }
  ]

  render () {
    return (
      <div>
        {
          this.customer.map(c => {
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
