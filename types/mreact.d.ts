declare namespace MReact {
  export interface Element {
    tag: string
    children: ChildrenType
  }

  export type ChildrenType = string|string[]|Element[]
}