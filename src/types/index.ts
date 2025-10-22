import { Url } from "next/dist/shared/lib/router/router"

export type Project = {
  id: number,
  title: string,
  description: {
    header?: string,
    text: string,
    techStack: string[]
  },
  summary: string,
  thumbnailPath: string,
  imgPaths?: string[],
  href: Url
}

export type Certificate = {
  id: number,
  title: string,
  description: string
  thumbnailPath: string,
  imgPaths?: string[],
}