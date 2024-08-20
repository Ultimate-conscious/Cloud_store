
interface inputboxwithlabel {
    label: string,
    placeholder: string,

}

export function InputBoxWithLabel({label,placeholder}:inputboxwithlabel){
    return (
        <div>
            <div>{label}</div>
            <div>
                <input type="text" placeholder={placeholder}  />
            </div>
        </div>
    )
}