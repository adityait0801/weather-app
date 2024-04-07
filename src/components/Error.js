import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    // console.log(err);
 return (
    <div>
        <h1>OOPS !!</h1>
        <div>
            <h3>Something went wrong</h3>
            <div>{err.status} : {err.statusText}</div>
        </div>
    </div>
 );
};

export default Error;