import React , {useState} from "react";

import PacageContext from "./Context";

const Provider = props  =>{
     const  [mission , setMission] = useState(
         {
             maname :  "Go to Russia",
             agent : "004",
              accept : "Not Active"
         }
     );
     return (
         <PacageContext.Provider
          value={{
              data: mission,
              isMissinAccepted: () => {
                  setMission({...mission, accept: "ACCEPTED"});
              }
          }}
         >
             {props.children}
         </PacageContext.Provider>
     )
}

export default Provider
