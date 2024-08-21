

export function Appbar(){
    return (
        <div className="grid grid-cols-3 border-b-2 py-3">
            <div className="flex justify-center cursor-pointer">
                Upload    
            </div >
            <div className="flex justify-center cursor-pointer">
                Download   
            </div>
            <div className="flex justify-center cursor-pointer">
                Create Folder   
            </div>
        </div>
    )
}