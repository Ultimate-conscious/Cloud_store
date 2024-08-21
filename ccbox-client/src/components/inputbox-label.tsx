import { ChangeEventHandler } from "react"

interface inputboxwithlabel {
    label: string,
    placeholder: string,
    handler: ChangeEventHandler<HTMLInputElement>
}

export function InputBoxWithLabel({label,placeholder,handler}:inputboxwithlabel){
    return (
        <div>
            <div>{label}</div>
            <div>
                <input type="text" placeholder={placeholder} onChange={handler}  />
            </div>
        </div>
    )
}