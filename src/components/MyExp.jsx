import React from "react";

function Experience(props) {
    return (
      <>
      <div className="w-full border-1 p-5 rounded-lg">
        <h1 className="font-bold">My Experiences :</h1>

            <div className="flex flex-col gap-1">
            <ul>
                <h1 className="text-lg">{props.Title}</h1>
                <h2 className="text-md">{props.Date}</h2>
                <h4 className="text-lg">{props.Description}</h4>
            </ul>
            
            </div>
       
      </div>
      </>
    )
   
  }
  
 

export default Experience