import {useState,createContext,useContext} from "react";

function App1():any {
    const [count,setCount] =useState<string>("Hello Context");
    //setCount("Heelo App")
    return (
        <>
            <h1>App1</h1>
            <Component1 count={count} />
        </>
    )
}
function Component1({count}:{count:string}):any{
    return (
        <>
            <h1>Component1</h1>
            <Component2 count={count} />
        </>
    )
}
function Component2({count}:{count:string}):any{
    return (
        <>
            <h1>Component2</h1>
            <h3>{count}</h3>
        </>
    )
}
function Component3():void{

}
function Component4():void{

}
function Component5():void{

}
export default App1;