import './style.css'

export function Button({children, buttonStyle, ...props }){
    return(
        <button className={buttonStyle} {...props}>
            {children}
        </button>
    )
}