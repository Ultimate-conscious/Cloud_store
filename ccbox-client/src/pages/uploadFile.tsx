import { ChangeEvent, useRef} from "react"


export const UploadFile = ()=>{

    const fileref = useRef<HTMLInputElement>(null)

    function filehandler(e:ChangeEvent){
        e.preventDefault()
        //@ts-ignore
        console.log(e.target.files["0"])
        console.log(fileref.current)
    }

    return (
        <div className="p-5">
            <input ref={fileref} type="file" onChange={filehandler} />
            <button > Submit</button>
        </div>
    )
}