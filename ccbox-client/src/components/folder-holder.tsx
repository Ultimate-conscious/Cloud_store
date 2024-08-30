
import { FolderCard2 } from "./folder-card2"
import { fileInterface, folderInterface } from "./folderCard"

export function FolderHolder({things}:{things: fileInterface[] | folderInterface[]}) {

  return (
    <div className="container grid gap-6 px-4 py-12 md:grid-cols-2 lg:grid-cols-3 md:px-6 lg:px-0">
      {things.map(thing=> <FolderCard2 type="Folder" key={thing.id} folder={thing} />)}
    </div>
  )
}


