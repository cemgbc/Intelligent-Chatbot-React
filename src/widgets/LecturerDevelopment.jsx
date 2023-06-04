import React from "react";

const data = [
  "FREDERICK :JAVA Monday : 08.00-10.00am",
  "John : PYTHON   Monday : 08.00-11.00am",
  "John : DATA-STRUCTURE & ALGORITHM Tuesday : 1.00-5.00pm",
  "Maria: SECURITY  Tuesday   : 2.00-4.30pm",
  "Maria: TESTING   Wednesday : 3.00-6.00pm",
  "FREDERICK: ANDROID/IOS SDK   Wednesday : 3.00-6.00pm",
  "Taylor : DATA ANALYSIS Friday : 4.00-6.00pm",
  "Taylor : API & JSON  Wednesday : 9.00-11.30am",
  "Micheal: C#  Thursday : 9.00-11.30am",
  "Micheal: C++ Friday : 4.00-6.00pm",
];

//defination  of LecturerDevelopment widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const LecturerDevelopment = (props) => {
  return (
    <>
      <ol>
        {data.map((val, index) => {
          return <li>{val}</li>;
        })}
      </ol>
    </>
  );
};

export default LecturerDevelopment;
