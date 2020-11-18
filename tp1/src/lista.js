module.exports=class Lista {

    #elementos;

    constructor(){
        this.#elementos=[];
    }

    count(){
        return this.#elementos.length;
    }

    find(clave){
        if(this.#elementos.length>0){
            for (var i=0; i < this.#elementos.length; i++) {
                if (this.#elementos[i].clave === clave) {
                    return this.#elementos[i].valor;
                }
            }
        }
        else{
            return NaN;
        }    
    }

    find_clave(clave){
        //console.log(this.#elementos);
        if(this.#elementos.length>0){
            for (var i=0; i < this.#elementos.length; i++) {
                if (this.#elementos[i].clave === clave) { 
                    return true;
                }
            }
        }
        else{
            return NaN;
        }    
    }

    add(clave, valor) {
        
        if(this.find_clave(clave)=== true){
            //console.log('BANDERA'+this.find_clave(clave)===clave)
            //console.log('BANDERA');
            return NaN;
        }
        else{
            if(isNaN(clave)){
                this.#elementos.push({clave,valor});
                return 1;
            }
            else{
                return NaN;
            }
        }    
    }

    get_id(clave){
        if(this.#elementos.length>0){
            for (var i=0; i < this.#elementos.length; i++) {
                if (this.#elementos[i].clave === clave) {
                    return i;
                }
            }
        }
        else{
            return NaN;
        }
        
    }

    get_ordenar() {
        let claves = [];
        if (this.#elementos.length===0) {
            return NaN;
        } else {
            for (let i = 0; i < this.#elementos.length; i++) {
                claves.push(this.#elementos[i].clave);
            }
            return claves.sort();
        }
    }

    delete(clave) {
        for (let i = 0; i < this.#elementos.length; i++) {
            if (this.#elementos[i].clave == clave) {
                this.#elementos.splice(i);
                return true;
            }
        }
        return NaN;
    }

    update(clave,valor) {
        //console.log(this.#elementos);

        if(!isNaN(this.get_id(clave))){
            this.#elementos[this.get_id(clave)].valor=valor;
            //console.log(this.#elementos);
            return 1;
        }
        else{
            return NaN;
        }
        
        //let resultado = this.#elementos.find(o => o.clave === clave);        
    }
};