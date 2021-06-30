
export interface IDataClothe {
    name: string,
    price: string,
    gender: string,
    type: string,
    id: string,
    availableSizes: string
    description: string,
    discount: number,
    images: Array<String>
}

export interface IDataShoppingBag {
    name: string,
    price: string,
    cantItems: number,
    id: string,
    sizeItem: string,
    image: string
}