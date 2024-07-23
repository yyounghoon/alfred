import { palette } from '@/styles/palette';
import { css } from '@emotion/react';
import { style } from '@vanilla-extract/css';

export const titleStyle = style({
  color: palette.black,
  fontSize: 30,
  fontWeight: 600,
});

export const descriptionStyle = style({
  color: palette.black,
  fontSize: 20,
  fontWeight: 300,
});

export const dateStyle = style({
  color: palette.grey,
  fontSize: 14,
  fontWeight: 300,
});
