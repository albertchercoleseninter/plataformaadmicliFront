export class Tree {
  constructor(public data: Data) {}
}

export class Data {
  constructor(public itemList: Item[] ) {
  }

}


export class Item {
  constructor(public param0: string, public param1: string, public param2: string,  public param3: string, public leaf: boolean) {
  }

}
