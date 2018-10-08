export class Categoria {
    id: number;
    nombre: string;
    IdCategoria: number;

    constructor (arg){
        this.id = arg.id;
        this.nombre = arg.nombre;
        this.IdCategoria = arg.IdCategoria;
    }

    get id_Categoria(): number {
      return this.id;
   }

   get _nombre(): string {
     return this.nombre;
  }


}
