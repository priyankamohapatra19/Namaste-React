// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello from React"
// );

// console.log(heading); React.createElement is nothing but an object.

/* 
<div>
  <div>
    <h1>I'm an h1 tag!</h1>
    <h2>I'm an h2 tag!</h2>
  </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag!"),
    React.createElement("h2", {}, "I'm an h2 tag!")
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag!"),
    React.createElement("h2", {}, "I'm an h2 tag!")
  ])
]);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(parent);
//once the code reaches line 30, React replaces the already h1 tag in the div 'app' with the div 'parent'

//root.render() function task is to take the object, convert it into a heading tag and put it in the DOM.
