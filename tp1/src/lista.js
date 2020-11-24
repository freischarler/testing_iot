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
            return false;
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
            return false;
        }    
    }

    add(clave, valor) {
        
        if(this.find_clave(clave)=== true){
            //console.log('BANDERA'+this.find_clave(clave)===clave)
            //console.log('BANDERA');
            return false;
        }
        else{
            if(isNaN(clave)){
                this.#elementos.push({clave,valor});
                return true;
            }
            else{
                return false;
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
            return false;
        }
        
    }

    get_ordenar() {
        let claves = [];
        if (this.#elementos.length===0) {
            return false;
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
        return false;
    }

    update(clave,valor) {
        //console.log(this.#elementos);

        if(!isNaN(this.get_id(clave))){
            this.#elementos[this.get_id(clave)].valor=valor;
            //console.log(this.#elementos);
            return true;
        }
        else{
            return false;
        }
        
        //let resultado = this.#elementos.find(o => o.clave === clave);        
    }
};