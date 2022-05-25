import React from "react";

const Blog = () => {
  return (
    <>
      <h2 className=" text-center mt-5 font-bold text-primary text-4xl mb-5 uppercase">
        Question & Answers
      </h2>

      <div className=" flex justify-center">

        <div className=" w-full px-5">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                1. How will you improve the performance of a React Application?
              </h2>
              <p className=" mb-10">
                Answer:<li>Keeping component state local where necessary.</li>
                <li>Memoizing React components to prevent unnecessary re-renders.</li>
                <li>Code-splitting in React using dynamic import()</li>
                <li>Windowing or list virtualization in React.</li>
              </p>
              <h2 className="card-title">
                2. What are the different ways to manage a state in a React
                application?
              </h2>
              <p className=" mb-10">
                Answer: React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. For example, if we update the state of any component like the following the webpage will not re-render itself because React State will not be able to detect the changes made

              </p>
              <h2 className="card-title">
                3. How does prototypical inheritance work?
              </h2>
              <p className=" mb-10">
                Answer: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.

              </p>
              <h2 className="card-title">
                4. Why you do not set the state directly in React. For example,
                if you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts
              </h2>
              <p className=" mb-10"></p>
              <h2 className="card-title">
                5. You have an array of products. Each product has a name,
                price, description, etc. How will you implement a search to find
                products by name?
              </h2>
              <blockquote>
                <pre>
                  <code>
                    {`Answer: 
const products = [
{
  name: "chips",
  price: 40,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nam.",
},
{
  name: "juice",
  price: 10,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nam.",
},
{
  name: "burger",
  price: 20,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nam.",
},
{
  name: "apple",
  price: 50,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nam.",
},
];
const search = "burger";
products.forEach((product) => {
if (product.name.includes(search)) {
  console.log(product);
}
});`}
                  </code>
                </pre>
              </blockquote>

              <h2 className="card-title">
                6. What is a unit test? Why should write unit tests?
              </h2>
              <p className=" mb-10">
                Answer: Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
