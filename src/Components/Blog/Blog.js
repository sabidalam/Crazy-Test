import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto px-6 md:px-40'>
            <h1 className='text-3xl font-bold bg-blue-500 text-white rounded md:w-1/6 py-3 mx-auto my-5'>Blog</h1>
            <div className='bg-gray-300 text-left pl-12 p-12 rounded mb-8'>
                <h3 className='text-2xl font-bold mb-4'>What is the purpose of react router?</h3>
                <p>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.React Router is a state container for the current location, or URL. It keeps track of the location and renders different Routes as it changes, and it also gives you tools to update the location using Links and the history API. Given the fact that managing this piece of state is the router's main responsibility, you can imagine that a new primitive that lets us compose state is going to enable a few things we couldn't do before!
                </p>
            </div>
            <div className='bg-gray-300 text-left pl-12 p-12 rounded mb-8'>
                <h3 className='text-2xl font-bold mb-4'>How does Context Api works?</h3>
                <p>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br />
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page.
                </p>
            </div>
            <div className='bg-gray-300 text-left pl-12 p-12 rounded mb-8'>
                <h3 className='text-2xl font-bold mb-4'>What is useRef and how it works?</h3>
                <p>
                    useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property 'current'.
                    'reference.current' accesses the reference value, and reference.current = newValue updates the reference value. <br />
                    However, useRef() is useful for more than the ref attribute. It's handy for keeping any mutable value around similar to how you'd use instance fields in classes.

                    This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a 'current: ...'object yourself is that useRef will give you the same ref object on every render.
                </p>
            </div>
        </div>
    );
};

export default Blog;