const CardContenedor=document.querySelector('.contenedorCard');
const ModalCerrar=document.querySelector('.modalContenedorCerrar');

initApp();
function initApp(){
    CardContenedor.addEventListener('click', accionesCard)
}

function accionesCard(e){
    if(e.target.classList.contains('card-icono-imgCerrar')){
        let card=e.target.parentElement.parentElement
        ModalCerrar.classList.remove('ocultarModalCerrar')
        accionesModelCerrar(card)
                   }
                }   
            

function accionesModelCerrar(card){
   
    ModalCerrar.addEventListener('click', (e)=>{
        if(e.target.classList.contains('modalCerrar-btn--Cancelar')||
            e.target.classList.contains('modalCerrar-imgX')||
            e.target.classList.contains('modalContenedorCerrar')){
            cerrarModal();
                    }   
        if(e.target.classList.contains('modalCerrar-btn--Aceptar')){
                    card.remove();
                    cerrarModal();
                        }
    })

    
                        } 

function cerrarModal(){
    const modal=document.querySelector('.modalContenedorCerrar')
    modal.classList.add('ocultarModalCerrar')
        }
/*
const activarModal=document.querySelector('#activarModal');
const contenedorModal=document.querySelector('.modalContenedor');

initApp();
function initApp(){
    activarModal.addEventListener('click', abriModal)
    contenedorModal.addEventListener('click', accionesModal)


}
function abriModal(){
    const modal=document.querySelector('.modalContenedor')
    modal.classList.remove('ocultar')
        }  
function accionesModal(e){
    e.preventDefault();
    if(e.target.classList.contains('modal-btn--Close')||
    e.target.classList.contains('modal-imgX')||
    e.target.classList.contains('modalContenedor')){
        cerrarModal();
                }    
    if(e.target.classList.contains('modal-btn--Save')){
        guardarModal(e)
        }
            }   

function cerrarModal(){
    const modal=document.querySelector('.modalContenedor')
    modal.classList.add('ocultar')
}
function guardarModal(elemento){
   let valorIngresado=elemento.target.parentElement.parentElement
   
   const info = {
    valor : valorIngresado.querySelector('.modal-input').value
    }
    if(info.valor==""){
        valorIngresado.querySelector('.modal-input').classList.add("advertencia")
    }else{
    const textoCambiar=document.querySelector('#texto')
    textoCambiar.innerHTML=info.valor
    valorIngresado.querySelector('.modal-input').value=""
    valorIngresado.querySelector('.modal-input').classList.remove("advertencia")

    cerrarModal()
}

function agregarLista(e){
    const listaNoCompletado=document.querySelector('#NoCompletado')
    
    const input=document.querySelector('#input')

    if(!(input.value=='')){

        const info={
            descripcion:input.value,
            }

        const nuevaLista=document.createElement('li')
        nuevaLista.innerHTML=`<li class="TareaLista-item TareaLista-item--NoCompletado">${info.descripcion}
                <button class="TareaLista-Boton agregarACompletado" >agregar</button>
                <button class="TareaLista-Boton eliminarlista">eliminar</button>
            </li>
            `
        listaNoCompletado.appendChild(nuevaLista)
    }
}
}*/
