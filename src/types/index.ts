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
  href: string
}

export type Certificate = {
  id: number,
  title: string,
  date?: string,
  description: string,
  summary: string,
  thumbnailPath: string,
  imgPaths?: string[],
}

export type Quote = {
  id: number,
  author: string,
  message: string
}