import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
font-family: ${theme.fonts.fontRegular};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const heading1 = (theme) => `
    font-size: ${theme.fontSizes.h1};
    font-family: ${theme.fonts.fontBold};
`;
const heading2 = (theme) => `
    font-size: ${theme.fontSizes.h2};
    font-weight:${theme.fontWeights.semiBold};
    line-height:${theme.lineHeights[3]};

`;
const title = (theme) => `
font-size: ${theme.fontSizes.title};
font-weight:${theme.fontWeights.semiBold};
line-height:${theme.lineHeights[2]};

`;
const subHeading = (theme) => `
font-size: ${theme.fontSizes.subhead};
font-weight:${theme.fontWeights.semiBold};

`;

const body = (theme) => `
font-size:${theme.fontSizes.subhead};
font-weight:${theme.fontWeights.regular};

`;
const description = (theme) => `
font-size: ${theme.fontSizes.description};
font-weight:${theme.fontWeights.medium};
line-height:${theme.lineHeights[0]};

`;

const caption = (theme) => `
font-size: ${theme.fontSizes.description};
    font-weight: ${theme.fontWeights.regular};
    line-height:${theme.lineHeights[1]};


`;
const hint = (theme) => `
    font-size: ${theme.fontSizes.helper};
    
`;
const variants = {
  heading1,
  heading2,
  title,
  subHeading,
  body,
  description,
  caption,
  hint,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
