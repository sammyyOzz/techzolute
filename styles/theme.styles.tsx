type Color = {
    main: string;
    light: string;
    dark: string;
};

type Font = {
    regular: string;
    medium: string;
    semibold: string;
};

export type Theme = {   
    color: {
        text: Color;
        background: Color;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        8: string;
        10: string;
        12: string;
        16: string;
        20: string;
        24: string;
    };
    size: {
        headerHeight: string;
    };
    breakpoint: {
        desktop: string;
    };
    zIndex: {
        header: number;
    };
    font: {
        text: {
            xs: Font;
            sm: Font;
            md: Font;
        };
        display: {
            sm: Font;
            md: Font;
        };
    };
};

const theme = {
    space: {
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
    },
    size: {
        headerHeight: "4rem",
    },
    breakpoint: {
        desktop: "64em",
    },
    zIndex: {
        header: 1000,
    },
    font: {
        text: {
            xs: {
                regular: `
                    font-size: 0.75rem;
                    line-height: 1.125rem;
                    font-weight: 400;
                `,
                medium: `
                    font-size: 0.75rem;
                    line-height: 1.125rem;
                    font-weight: 500;
                `,
                semibold: `
                    font-size: 0.75rem;
                    line-height: 1.125rem;
                    font-weight: 600;
                `,
            },
            sm: {
                regular: `
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                    font-weight: 400;
                `,
                medium: `
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                    font-weight: 500;
                `,
                semibold: `
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                    font-weight: 600;
                `,
            },
            md: {
                regular: `
                    font-size: 1rem;
                    line-height: 1.5rem;
                    font-weight: 400;
                `,
                medium: `
                    font-size: 1rem;
                    line-height: 1.5rem;
                    font-weight: 500;
                `,
                semibold: `
                    font-size: 1rem;
                    line-height: 1.5rem;
                    font-weight: 600;
                `,
            },
        },
        display: {
            sm: {
                regular: `
                    font-size: 1.875rem;
                    line-height: 2.375rem;
                    font-weight: 400;
                `,
                medium: `
                    font-size: 1.875rem;
                    line-height: 2.375rem;
                    font-weight: 500;
                `,
                semibold: `
                    font-size: 1.875rem;
                    line-height: 2.375rem;
                    font-weight: 600;
                `,
            },
            md: {
                regular: `
                    font-size: 2.25rem;
                    line-height: 2.75rem;
                    font-weight: 400;
                `,
                medium: `
                    font-size: 2.25rem;
                    line-height: 2.75rem;
                    font-weight: 500;
                `,
                semibold: `
                    font-size: 2.25rem;
                    line-height: 2.75rem;
                    font-weight: 600;
                `,
            },
        },
    },
};


//======================================================================================= 
// themes
//=======================================================================================


export const lightTheme = {
    ...theme,
    color: {
        text: {
            main: 'rgba(0, 0, 0, 0.87)',
            light: 'rgba(0, 0, 0, 0.38)',
            dark: 'rgba(0, 0, 0, 0.6)',
        },
        background: {
            main: '#fff',
            light: '#fff',
            dark: '#fff',
        }
    }
    
    
}

export const darkTheme = {
    ...theme,
    color: {
        text: {
            main: '#fff',
            light: 'rgba(255, 255, 255, 0.7)',
            dark: 'rgba(255, 255, 255, 0.5)'
        },
        background: {
            main: '#121212',
            light: '#121212',
            dark: '#121212',
        }
    }
}


//======================================================================================= 
// theme selectors
//=======================================================================================

export function color(
    name: keyof Theme["color"],
    shade: keyof Theme["color"]["text"]
) {
    return ({ theme }: { theme: Theme }) => theme.color[name][shade];
}

export function space(...names: Array<keyof Theme["space"]>) {
    return ({ theme }: { theme: Theme }) => {
        const spaces = names.map((name) => theme.space[name]);
        return spaces.join(" ");
    };
}

export function breakpoint(name: keyof Theme["breakpoint"]) {
    return ({ theme }: { theme: Theme }) => theme.breakpoint[name];
}

export function zIndex(name: keyof Theme["zIndex"]) {
    return ({ theme }: { theme: Theme }) => theme.zIndex[name];
}

export function textFont(
    size: keyof Theme["font"]["text"],
    weight: keyof Theme["font"]["text"]["sm"]
) {
    return ({ theme }: { theme: Theme }) => theme.font.text[size][weight];
}

export function displayFont(
    size: keyof Theme["font"]["display"],
    weight: keyof Theme["font"]["display"]["sm"]
) {
    return ({ theme }: { theme: Theme }) => theme.font.display[size][weight];
}
