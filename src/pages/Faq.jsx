import React from 'react'

export default function Faq() {
    return (
        <div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">1.	What is React.js and Explain the concept of "components" in React in brief?</div>
                <div className="collapse-content">
                    <p>React.js is a JavaScript library used to build dynamic user interfaces, particularly for single-page applications. It allows developers to efficiently manage UI rendering using a virtual DOM, improving performance</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">2.	 What is JSX in React, and how does it work?</div>
                <div className="collapse-content">
                    <p>JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe what the UI should look like. It allows developers to write HTML-like code directly within JavaScript, making the code more readable and expressive.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">3.	What is the Virtual DOM, and how does React use it to optimize performance?</div>
                <div className="collapse-content">
                    <p>The Virtual DOM is a lightweight, in-memory representation of the real DOM in React. It acts as a virtual copy that React uses to efficiently manage updates to the user interface.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">4.	Explain the concept of "props" in React and how they are used.</div>
                <div className="collapse-content">
                    <p>Props (short for "properties") in React are a mechanism for passing data from one component to another, typically from a parent component to a child component. They are used to make components dynamic by allowing them to receive and display varying data.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">5.	What is "state" in React, and how does it differ from props?</div>
                <div className="collapse-content">
                    <p>State in React is an object that holds dynamic data specific to a component. It allows a component to manage and respond to user interactions, updates, or changes over time.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">6.	Explain the useState hook and provide an example of how it is used.</div>
                <div className="collapse-content">
                    <p>The useState hook in React is a function that allows functional components to have state. It enables you to add state to a component and manage changes over time. useState returns an array with two values: the current state and a function to update that state.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">7.	What is the purpose of the useEffect hook in React, and when would you use it?</div>
                <div className="collapse-content">
                    <p>The useEffect hook in React is used to handle side effects in functional components, such as fetching data, updating the DOM, or subscribing to events. It runs after the component renders and can also handle cleanup operations when a component unmounts or dependencies change.</p>
                </div>
            </div>
        </div>
    )
}
