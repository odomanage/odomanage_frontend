import type { IconButtonProps } from "@chakra-ui/react"
import type { ThemeProviderProps } from "next-themes"

export type ColorMode = "light" | "dark"

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

// export interface ColorModeProviderProps extends ThemeProviderProps {}
export type ColorModeProviderProps = ThemeProviderProps

// export interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}
export type ColorModeButtonProps = Omit<IconButtonProps, "aria-label">