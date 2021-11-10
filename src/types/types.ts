export interface ProductsState{ //state
    products:Product[],
    product: Product
}
export interface Product{ //model
    id:number,
    name: string,
    precio: number,
    status: boolean,
    categoriaId: number,
    descripcion: string,
}

export interface CarProductsState{ //state
    carproducts:CarProduct[],
    carproduct: CarProduct,
}
export interface CarProduct{ //model
    id:number,
    nombre: string,
    precio: number,
    status: boolean,
    categoriaId: number,
    descripcion: string,
    cantidad: number,
}