// React types

declare type VirtualElementFunctionType = (props) => any
declare type VirtualElementType = number|string|VirtualElementFunctionType

declare interface VirtualElementComplex {
  type: VirtualElementType
  props: {
    children: Array<string|number|VirtualElement>
  }
}

declare type VirtualElement = VirtualElementComplex|string|number


// React DOM types
// ...............