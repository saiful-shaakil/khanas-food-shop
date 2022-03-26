import React from "react";
import "./Qna.css";

const Qna = () => {
  return (
    <div className="qna">
      <h4>Question 1: How React Works?</h4>
      <p>
        <b>Ans:</b> React is a javascript library for building user
        interface.When we add any data in JSX. React render those data and
        create a virtual DOM(Document Object Model). The Virtual DOM is React's
        lightweight version of the Real DOM.Real DOM manipulation is
        substantially slower than virtual DOM manipulation. When an object's
        state changes, Virtual DOM updates only that object in the real DOM
        rather than all of them.React employs one-way data binding, all
        activities stay modular and quick.React allow us to use React hooks
        which help us to create a website more dynamic with less code.
      </p>
      <h4>Question 2: How useState works?</h4>
      <p>
        <b>Ans:</b> useState is a hook of React js. Which allow us to have state
        variables in functional components. We pass the initial state to this
        function and it returns a variable with the current state value and
        another function to update this value. The useState hook allow us to
        declare only one state variable (of any type) at a time.React re-renders
        the component to the browser whenever the state of an object changes.
      </p>
    </div>
  );
};

export default Qna;
