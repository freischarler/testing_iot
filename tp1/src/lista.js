module.exports=class Lista {

    #elementos;

    constructor(){
        this.#elementos=[];
    }

    count(){
        return this.#elementos.length;
    }

    find(clave){
        if(this.#elementos.length==1){
            return this.#elementos[0].valor;
        }
        return NaN;
    }

    find_clave(clave){
        if(this.#elementos.length===1){
            return this.#elementos[0].clave;
        }
        return NaN;
    }

    add(clave, valor) {
        if(this.find_clave(clave)===clave){
            return NaN;
        }
        else{
            this.#elementos.push({clave,valor});
        }    
    }
};