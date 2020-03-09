import React from "react";

import "./App.css";
const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "Paul",
      job: "Devloper"
    },
    {
      img: 35,
      name: "Mitch",
      job: "Software Devloper"
    },
    {
      img: 2,
      name: "Alex",
      job: "Handy Man"
    }
  ];
  return (
    <section>
      <Person person={people[0]}>
        Vehicula curabitur mattis malesuada suspendisse est maecenas himenaeos,
        ipsum pellentesque habitant rhoncus morbi sodales phasellus.
      </Person>
      ;
      <Person person={people[1]}>
        Lorem ipsum curabitur aliquam habitant aenean fringilla id aliquam nam
      </Person>
      ;
      <Person person={people[2]}>
        Consequat orci eget aenean et praesent at vitae aliquam ipsum, est
        pellentesque imperdiet habitasse morbi semper quam amet.
      </Person>{" "}
      ;
    </section>
  );
};

const Person = props => {
  const { img, name, job } = props.person;
  const url = `https://randomuser.me/api/portraits/med/men/${img}.jpg`;

  return (
    <div className="person">
      <img src={url} alt="person"></img>

      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {props.children}
      </div>
    </div>
  );
};

export default App;
