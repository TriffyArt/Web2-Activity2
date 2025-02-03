import React from "react";

function Profile(props) {

    return (
        <>
            <div className="flex flex-col items-center text-center">
                <div className="h-20 mb-5">
                    <img className="border-1 rounded-full" src={props.profilePic} alt="" />    
                </div>
                <h3 className="text-xl font-bold mt-72">{props.name}</h3>
                <p className="text-sm text-gray-600 w-[75%] pt-2">{props.aboutProfile}</p>    
            </div>        
        </>
    )
}

export default Profile