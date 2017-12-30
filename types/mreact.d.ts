// React types

declare type VirtualElementFunctionType = (props) => any
declare type VirtualElementType = string|VirtualElementFunctionType

declare interface VirtualElementComplex {
  type: VirtualElementType
  props: {
    children: Array<VirtualElement>
  }
}

declare type VirtualElement = VirtualElementComplex|string|number

declare interface VirtualNodeComplex {
  tag: string   // any valid html tag
  attributes: any  // object of html attributes
  children: Array<VirtualNode>
}
declare type VirtualNode = string|number|VirtualNodeComplex


// React DOM types
// ...............