import { ChangeEventHandler } from "react"

interface inputboxwithlabel {
    label: string,
    placeholder: string,
    handler: ChangeEventHandler<HTMLInputElement>
}

export function InputBoxWithLabel({label,placeholder,handler}:inputboxwithlabel){
    return (
        <div className="py-1">
            <div>{label}</div>
            <div >
                <input className="py-1 px-2 border-2" type="text" placeholder={placeholder} onChange={handler}  />
            </div>
        </div>
    )
}