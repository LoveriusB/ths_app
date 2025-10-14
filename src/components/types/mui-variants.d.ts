declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    ascii: true;
    loginTitle: true;
    signUpLink: true;
    loadingText: true;
    fieldLabel: true;
    iconnedText: true;
    copyright: true;
    folders: true;
    h1OPEX: true;
    h1T: true;
    h1H: true;
    h1S: true;
    h12026: true;
    checkbox: true;
  }
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    window: true;
    windowBar: true;
    windowContent: true;
    test: true;
    homePaper: true;
    footer: true;
    header: true;
    playerList: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    register: true;
    discord: true;
    youtube: true;
    instagram: true;
    facebook: true;
  }
}

export default {};
