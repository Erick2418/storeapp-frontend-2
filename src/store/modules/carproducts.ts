import {  CarProduct,CarProductsState} from './../../types/types';
import {GetterTree,MutationTree,ActionTree} from 'vuex';
import axios from 'axios';
// import Swal from 'sweetalert2';

type CarproductsGetter = GetterTree<CarProductsState, any>

const state: CarProductsState = {

    carproducts: [],
    carproduct:{
        id:0,
        nombre: '',
        precio: 0, 
        status: false,
        categoriaId: 0,
        descripcion: '', 
        cantidad:0,
    }
}

const getters: CarproductsGetter={

    getCarproducts: state=>state.carproducts,
    getCarproductsLength: state=>state.carproducts.length,
    getCarproduct: state=>state.carproduct,
    
}

const mutations: MutationTree<CarProductsState>={

    addCarproducts(state,newProduct){ 
        let resultado = state.carproducts.find(producto=>producto.id==state.carproduct.id);
        if(resultado){ // en caso exista algun producto con el mismo id. se le aumenta 1 a la cantidad existente    
            let valor:number = Number(resultado?.cantidad);
            resultado.cantidad=(valor+1);
            state.carproducts=[ 
                ...state.carproducts.map(
                    producto=>producto.id == resultado?.id ? resultado : producto
                )
            ];
        }else{// caso contrario solo se agregara el producto
            state.carproducts=[ ...state.carproducts, state.carproduct];
        }
    },

    operacionesProductoCar(state,newProduct){ //Esta funcion es usada en los Actions y en ProductModal
        let operacion = newProduct.operacion; //Si es resta o suma se le asigna.
        let resultado = state.carproducts.find(producto=>producto.id==newProduct.id);
        if(resultado){ // en caso exista algun producto con el mismo id. se le aumenta 1 a la cantidad existente
            
            let valor:number = Number(resultado?.cantidad);
            if(operacion == "Resta"){
                resultado.cantidad=(valor-1);
            }else{
                resultado.cantidad=(valor+1);
            }
            if( resultado.cantidad < 1 ){ // si la cantidad es menor a 1 entonces se borrara el producto
                state.carproducts=[ 
                    ...state.carproducts.filter( // retorna todos los productos menos el que es igual al ID
                        producto=>producto.id != resultado?.id
                    )
                ];
                return true;
            }
            state.carproducts=[ 
                ...state.carproducts.map(
                    producto=>producto.id == resultado?.id ? resultado : producto
                )
            ];

        }else{// caso contrario solo se agregara el producto
            state.carproducts=[ ...state.carproducts, state.carproduct];
        }
    },


    addCarproduct(state,newProduct){
        state.carproduct=newProduct;        
    }
}

const actions: ActionTree<CarProductsState,any>={

    async addProductCar ({commit},product:CarProduct){

        let apiUsuarios;

        try {
            commit('addCarproducts',product);
        } catch (error) {
            console.log(error);
        }

    },

    async getCarproductAsync ({commit},idProducto:number){

        let apiProducts;
        let productoCarrito:CarProduct;
        try {
            apiProducts = await axios.get(`https://backend-app-store.herokuapp.com/api/producto//${idProducto}`).then(({data}) => {
            //  https://backend-app-store.herokuapp.com/api/producto/
            // http://localhost:3002/api/producto/
                // console.log(data.producto);
                productoCarrito={
                    id: data.producto.id,
                    nombre: data.producto.nombre,
                    precio: data.producto.precio,
                    status: data.producto.status,
                    categoriaId: data.producto.categoriaId,
                    descripcion: data.producto.descripcion,
                    cantidad: 1,
                }
                commit('addCarproduct',productoCarrito);
            });

        } catch (error) {
            // const apiUsuario = error.response;
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: apiUsuario.data.msg + ", intente nuevamente",
 
            // })
        }

    },

}


export const carproducts = {
    state,
    getters,
    mutations,
    actions
  }