export enum RolUsuario {
    ADMIN = 'Administrador',
    EDITOR = 'Editor',
    COLABORADOR = 'Colaborador'
  }
  
  export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    rol: RolUsuario;
    foto: string;
  }