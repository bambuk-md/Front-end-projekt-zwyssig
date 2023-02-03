import React from "react";
import Tasks from "./AppDelete";
import Taskers from "./Add";
import Welcome from "./Welcome";
function Main(){
    return(
        <div>
            <Welcome></Welcome>
        <Tasks></Tasks>
        <Taskers></Taskers>
        </div>
    );
};
export default Main;