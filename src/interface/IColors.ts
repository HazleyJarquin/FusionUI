// interface.ts o donde declares tus interfaces
export interface IColors {
  primary: {
    [key: number]: string;
  };
  warning: {
    [key: number]: string;
  };
  accent: {
    [key: number]: string;
  };
  error: {
    [key: number]: string;
  };
  success: {
    [key: number]: string;
  };
  info: {
    [key: number]: string;
  };
  neutral: {
    [key: number]: string;
  };
  secondary: {
    [key: number]: string;
  };
  text: {
    [key: string]: string;
  };
  shadows: {
    [key: string]: string;
  };
}
