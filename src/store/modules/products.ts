import {  Product,ProductsState} from './../../types/types';
import {GetterTree,MutationTree,ActionTree} from 'vuex';
import axios from 'axios';
// import Swal from 'sweetalert2';

type ProductsGetter = GetterTree<ProductsState, any>
const PORT = "3002";
const state: ProductsState = {

    products: [],
    product:{
        id:0,
        name: '',
        precio: 0, 
        status: false,
        categoriaId: 0,
        descripcion: '', 
    }
}

const getters: ProductsGetter={

    getProducts: state=>state.products,
    getProduct: state=>state.product,

}

const mutations: MutationTree<ProductsState>={

    addProducts(state,newProduct){
        state.products=newProduct;
    },

    addProduct(state,newProduct){
        state.product=newProduct;        
    }
}

const actions: ActionTree<ProductsState,any>={

    // async addUsersAsync ({commit}){

    //     let apiUsuarios;
        
    //     try {

    //         apiUsuarios = await axios.get('http://localhost:3000/api/user',{
    //             // headers: {
    //             //   'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6IklzYWJlbEBnbWFpbC5jb20iLCJpYXQiOjE2MjkwNDczNzcsImV4cCI6MTYyOTA1NDU3N30.3Lkth_DB2qk28JDf3fSSLRgGTokssCKwP81hvTqPdk8'
    //             // }
    //         }).then(({data}) => {

    //             commit('addUsers',data.users);
    //         });


    //     } catch (error) {
    //         console.log(error);
    //     }

    // },

    async getProductsAsync ({commit}){
            
        let apiProducts;
        
        try {

            apiProducts = await axios.get(`https://backend-app-store.herokuapp.com/api/producto/`).then(({data}) => {
            //  https://backend-app-store.herokuapp.com/api/producto/
            // http://localhost:3002/api/producto
            
              commit('addProducts',data.producto);
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


    // async RegisterUser ({commit},data){

    //     let apiUsuarios;

    //     try {

    //         apiUsuarios = await axios.post('http://localhost:3000/api/user',
    //         data
    //         ).then((data) => {
    //             console.log(data);
    //             Swal.fire(
    //                 'Registro con exito',
    //                 '',
    //                 'success'
    //               )
    //         }).catch( err=> {
    //             const apiUsuario = err.response;
           
    //             Swal.fire({
    //               icon: 'error',
    //               title: 'Oops...',
    //               text: apiUsuario.data.msg + ", intente nuevamente",
   
    //             })
    //         } );
    //     } catch (error) {
    //         const apiUsuario = error.response;
           
    //          Swal.fire({
    //            icon: 'error',
    //            title: 'Oops...',
    //            text: apiUsuario.data.msg + ", intente nuevamente",

    //          })
    //     }

    // },
    
    // async deleteUsersAsync ({commit},id:string){
            
    //     let apiUsuarios;
        
    //     try {

    //         apiUsuarios = await axios.delete('http://localhost:3000/api/user/'+id).then(({data}) => {
    //             Swal.fire(
    //                 'Elimnacion con exito',
    //                 '',
    //                 'success'
    //             )
    //         });


    //     } catch (error) {
    //         const apiUsuario = error.response;
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: apiUsuario.data.msg + ", intente nuevamente",
 
    //         })
    //     }

    // },

    // async EditUser ({commit},data){

    //     const ids= data.id;
    //     delete data.id;


    //     console.log(data);


    //     let apiUsuarios;
    //     let datos={
    //         "firstname":data.firstname,
    //         "fecha": data.fecha,
    //         "correo": data.correo,
    //         "telefono":data.telefono,
    //         "sueldo": data.sueldo+""
    //     }
    //     try {

    //         apiUsuarios = await axios.put('http://localhost:3000/api/user/'+ids,
    //         datos
            

    //         ).then((data) => {
    //             console.log(data);
    //             Swal.fire(
    //                 'Registro con exito',
    //                 '',
    //                 'success'
    //               )
    //         }).catch( err=> {
    //             const apiUsuario = err.response;
    //                 console.log(apiUsuario)
    //             Swal.fire({
    //               icon: 'error',
    //               title: 'Oops...',
    //               text: apiUsuario + ", intente nuevamente",
   
    //             })
    //         } );
    //     } catch (error) {
    //         const apiUsuario = error.response;
           
    //          Swal.fire({
    //            icon: 'error',
    //            title: 'Oops...',
    //            text: apiUsuario.data.msg + ", intente nuevamente",

    //          })
    //     }

    // },



}


export const products = {
    state,
    getters,
    mutations,
    actions
  }