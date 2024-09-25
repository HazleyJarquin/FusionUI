import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";

interface Props extends ButtonProps {
  title: string;
  mode?: "primary" | "secondary" | "tertiary";
}

export const Button = ({ title, mode = "primary", onClick }: Props) => {
  const styleMode = {
    primary: {
      backgroundColor: "primary.500",
      color: "#FFFFFF",
      border: "none",
    },
    secondary: {
      backgroundColor: "transparent",
      color: "primary.500",
      border: "none",
    },
    tertiary: {
      backgroundColor: "transparent",
      color: "gray.500",
      border: "1px solid #e91e63",
    },
  };
  const bg = styleMode[mode].backgroundColor;
  const color = styleMode[mode].color;
  const border = styleMode[mode].border;
  return (
    <ChakraButton bg={bg} color={color} border={border} onClick={onClick}>
      {title}
    </ChakraButton>
  );
};
