interface MapFunction {
  (list: any[], fn: Function): any[];
}

const myMap: MapFunction = function (list: any[], fn: Function): any[] {
  return [];
};


//TODO
// Merge function interface
interface Merge {
  (destination: Object, source: Object): Object;
}

// Reduce function interface
interface Reduce {
  (list: any[], iterator: Function): any;
}

// All function interface
interface All {
  (list: any[], test: Function): boolean;
}

// Pluck function interface
interface Pluck {
  (list: Object[], propertyName: string): any[];
}

// GroupBy function interface
interface GroupBy {
  (list: any[], iterator: Function): Object;
}

// EachSlice function interface
interface EachSlice {
  (list: any[], iterator: Function, sliceSize: number): any[][];
}
