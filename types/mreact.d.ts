declare namespace MReact {
  export type ChildrenType = string|string[]|Element|Element[]|null
}

declare type PrimitiveElement = string

declare interface VirtualElement {
  type: string
  props: {
    children?: MReact.ChildrenType
  }
}

declare type AllowedElement = VirtualElement|PrimitiveElement