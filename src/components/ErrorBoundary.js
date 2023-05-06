import classes from './ErrorBoundary.module.css';
const ErrorBoundary = (props)=>{
    return(
        <div className={classes.error}>
            <h1>Something Went wrong</h1>
            <p>{props.errorMessage}</p>
        </div>
    )
}

export default ErrorBoundary;