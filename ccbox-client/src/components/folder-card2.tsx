
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { fileInterface, folderInterface } from "./folderCard"

export function FolderCard2({folder,type}:{folder:folderInterface | fileInterface,
  type: 'Folder'| 'File'
}) {
  return (
    <Card className="w-full max-w-sm group">
      <div className="relative overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-muted to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <img
          src="/placeholder.svg"
          alt="Folder Thumbnail"
          width="200"
          height="200"
          className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-300"
          style={{ aspectRatio: "200/200", objectFit: "cover" }}
        />
      </div>
      <CardContent className="p-4 flex items-center justify-between">
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <FolderIcon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            <h3 className="text-lg font-semibold">{folder.name}</h3>
          </div>
          <div className="text-sm text-muted-foreground">
            <span>{type}</span>
            <span className="mx-2">•</span>
            <span>size</span>
          </div>
        </div>
        <Button onClick={()=> alert("ha bhai")} variant="ghost" className="shrink-0">
          <ChevronRightIcon className="w-5 h-5" />
        </Button>
      </CardContent>
    </Card>
  )
}

function ChevronRightIcon(props:{className:string}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function FolderIcon(props:{className:string}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  )
}
