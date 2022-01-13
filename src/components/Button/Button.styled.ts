import { css, SerializedStyles } from '@emotion/react';

export type buttonThemes = 'Default' | 'Next';
// React.HTMLProps<HTMLButtonElement>

export const defaultStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 300px;
  height: 46px;
  background-color: #ffeb03;
  color: #212529;
  font-size: 18px;
  font-weight: normal;
  &:hover {
    filter: brightness(105%);
    color: white;
  }
`;

export const nextStyles = css`
  background-color: blue;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export const getStyle = (theme: buttonThemes, style?: SerializedStyles): SerializedStyles => {
  const resCss: SerializedStyles | undefined = { Default: defaultStyles, Next: nextStyles }[theme];
  return css`
    ${defaultStyles}
    ${defaultStyles !== resCss ? resCss : ''}
    ${style}
  `;
};
