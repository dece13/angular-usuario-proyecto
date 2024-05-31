export class PropiedadesArrendatario{

    constructor(
        public id:number,
        public idArrendador:number,
        public nombre:string,
        public municipio:string, 
        public cantidadPerosnas:number,
        public departamento:string,
        public reservada:boolean,
        public reservadaPor:string
    ){}
}