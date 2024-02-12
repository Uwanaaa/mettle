import axios from "axios";


export default function Test(){
    const test = () => {
        axios.get('http://127.0.0.1:3000/home').then((data) => {console.log(data)})
    }
    return(
        <>
        <button onClick={test}>Click me</button>
        </>
    )
}