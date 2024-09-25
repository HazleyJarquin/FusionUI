// chakra.d.ts
import "@chakra-ui/react"; // Solo importa el módulo

// Extiende la interfaz de Chakra UI para incluir tus colores personalizados
declare module "@chakra-ui/react" {
  interface Theme {
    colors: {
      primary: {
        [key: number]: string;
      };
      warning: {
        [key: number]: string;
      };
      hazley: {
        [key: number]: string;
      };
      error: {
        [key: number]: string;
      };
    };
  }
}
