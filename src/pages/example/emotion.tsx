import { css } from '@emotion/react';
import type { NextPage } from 'next';
import { themes } from '@/styles/themes';

interface Props {
  width?: string;
}

const styles = ({ width }: Props) => css`
  width: ${width || '100%'};
  color: ${themes.color.white};
  background-color: ${themes.color.black};
`;

const Emotion: NextPage = () => <div css={styles({ width: '100px' })}>Hello World</div>;

export default Emotion;
