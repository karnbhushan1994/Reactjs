import React, {useState} from "react";

const GrandChild  = props => {
  return (
       <div>
         <Child brand = {props.brand} />
       </div>
  );
};
const Child = props => {
   return (
      <div>
          <h2>child: {props.brand} </h2>
      </div>
   );
};
const  App = () => {
    // const [brand , setBrand] = useState("Amazon");
     const [brandname] = useState("Amazon");
     return (
       <div>
         <h1>Hello</h1>
         <GrandChild  brand ={brandname}/>
       </div>
     );
};

export default App;