import React from "react";

function Skills(props) {

    return (
        <>
        <div className="w-full border-1 p-5 rounded-lg">
            <h1 className="font-bold">My Skills :</h1>

            <div className="flex flex-col gap-1">
                <ul>
                    <h1 className="text-lg">{props.Skills}</h1>
                </ul>
            
            </div>
       
      </div>
        </>
    )
}

export default Skills