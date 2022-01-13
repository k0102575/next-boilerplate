import React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { buttonThemes, getStyle } from './Button.styled';

interface IButton {
  /**
   * 버튼 테마
   */
  theme: buttonThemes;
  /**
   * 버튼 컨텐츠
   */
  content?: React.ReactNode;
  /**
   * 사용자 정의 css
   */
  customCss?: SerializedStyles;
  /**
   * 클릭 이벤트
   */
  onClick?: () => void;
}

export const Button: React.FC<IButton> = ({ theme = 'Default', ...props }) => {
  const { customCss, content } = props;
  console.log(content);
  return (
    <button
      type="button"
      css={css`
        ${getStyle(theme, customCss)};
      `}
    >
      {content}
    </button>
  );
};
Button.defaultProps = {
  customCss: undefined,
  content: 'Button',
  onClick: undefined,
};
