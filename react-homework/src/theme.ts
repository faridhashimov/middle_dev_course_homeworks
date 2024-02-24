import { createTheme } from '@mui/material'

// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
    interface Palette {
        note: Palette['primary']
    }

    interface PaletteOptions {
        note?: PaletteOptions['primary']
    }
}

// Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        note: true
    }
}

export const theme = createTheme({
    palette: {
        note: {
            main: '#F3B900',
        },
    },
})
