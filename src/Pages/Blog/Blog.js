import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border rounded shadow-sm">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-3 text-gray-400 transition-transform duration-200 ${
                isOpen ? "transform rotate-180" : ""
              }`}
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-400">{children}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center">
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none text-center tracking-tight text-gray-300 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20   lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Here</span>
              </span>{" "}
              is some questions
            </h2>
          </div>
        </div>
        <div className="space-y-4">
          <Item title="What are the different ways to manage a state in a React application?">
            We can use URL to store some data e.g. The id of the current item,
            being viewed Filter parameters Pagination offset and limit Sorting
            data Keeping such data in the URL allows users to share deep links
            with others. It is recommended to avoid storing such information in
            the app’s state to avoid the URL in our app getting out of sync. The
            URL should be used as the system of record, Read from it as needed
            for information related to sorting, pagination, etc. Update the URL
            as required when the settings change React Router is a great tool to
            handle routes and manage the params.
          </Item>

          <Item title="How does prototypical inheritance work?">
            In a class-based model, you have Classes, which are represented by
            the triple “Parents, Variables, Methods”. Where: Parents is the list
            of classes you’re extending. Classes may only extend other classes;
            Variables is the number of variable slots that instances will have.
            For example, a “class Point2d(int x, int y) ” has 2 instance
            variables; Methods is a table of “name → function” that describes
            which services each instance of the class will support; Instances
            (or Objects) in a class-based model are represented with the tuple
            “Class, Values”. Where: Class is a pointer to the class triple that
            defines how many variables this instance supports, and what methods
            you can call on it; Values is a list of the values for each variable
            the instance has. In this model, Classes only describe how instances
            look like, and Instances are the only thing you can interact with.
            Classes cannot be instances, and you can’t inherit from Instances.
          </Item>
          <Item title="What is a unit test? Why should we write unit tests?">
            A unit test is a way of testing a unit - the smallest piece of code
            that can be logically isolated in a system. In most programming
            languages, that is a function, a subroutine, a method or property.
            The isolated part of the definition is important. In his book
            "Working Effectively with Legacy Code", author Michael Feathers
            states that such tests are not unit tests when they rely on external
            systems: “If it talks to the database, it talks across the network,
            it touches the file system, it requires system configuration, or it
            can't be run at the same time as any other test." write unit tests:
            You are forced to split your software up into little chunks that can
            be run on their own. This avoids making a big ball of mud You can
            code more quickly, knowing that things like off-by-one errors and
            ‘put the code in the wrong if statement’ kinds of mistakes will be
            spotted
          </Item>
          <Item title="React vs. Angular vs. Vue?">
            Angular has a steep learning curve, considering it is a complete
            solution, and mastering Angular requires you to learn associated
            concepts like TypeScript and MVC. Even though it takes time to learn
            Angular, the investment pays dividends in terms of understanding how
            the front end works. react React: React offers a Getting Started
            guide that should help one set up React in about an hour. The
            documentation is thorough and complete, with solutions to common
            issues already present on Stack Overflow. React is not a complete
            framework and advanced features require the use of third-party
            libraries. This makes the learning curve of the core framework not
            so steep but depends on the path you take with additional
            functionality. However, learning to use React does not necessarily
            mean that you are using the best practices. vue Vue: Vue provides
            higher customizability and hence is easier to learn than Angular or
            React. Further, Vue has an overlap with Angular and React with
            respect to their functionality like the use of components. Hence,
            the transition to Vue from either of the two is an easy option.
            However, simplicity and flexibility of Vue is a double-edged sword —
            it allows poor code, making it difficult to debug and test.
          </Item>
        </div>
      </div>
    </div>
  );
};

export default Blog;
