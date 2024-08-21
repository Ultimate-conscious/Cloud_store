import { MouseEventHandler } from "react"

interface buttonprops{
    title: string,
    handler: MouseEventHandler<HTMLButtonElement>
}

export function ButtonStyled({title,handler}:buttonprops){

    return (
        <div>
            <button onClick={handler}>{title}</button>
        </div>
    )
}