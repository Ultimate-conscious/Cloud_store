import { MouseEventHandler } from "react"

interface buttonprops{
    title: string,
    onClick: MouseEventHandler
}

export function ButtonStyled({title,onClick}:buttonprops){

    return (
        <div>
            <button onClick={onClick}>{title}</button>
        </div>
    )
}