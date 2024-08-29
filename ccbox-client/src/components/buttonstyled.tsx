import { MouseEventHandler } from "react"

interface buttonprops{
    title: string,
    handler: MouseEventHandler<HTMLButtonElement>
}

export function ButtonStyled({title,handler}:buttonprops){

    return (
        <div className="pt-2 flex justify-center">
            <button className="rounded-md px-4 py-1 bg-slate-500 text-cyan-50" onClick={handler}>{title}</button>
        </div>
    )
}