"use client"

import { ChakraProvider } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import system from "../../chakra/theme"


export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}> {/* Use your custom system instead of defaultSystem */}
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
