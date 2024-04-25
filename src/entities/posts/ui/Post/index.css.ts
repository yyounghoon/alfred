import { palette } from '@/styles/palette';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',

  height: '165px',
  padding: '32px 24px',
  borderRadius: '12px',

  ':hover': {
    background: `${palette.lightGrey}`,
  },
});

export const titleStyle = style({
  color: `${palette.black}`,
  fontSize: '30px',
  fontWeight: 600,
  marginBottom: '24px',
});

export const descriptionStyle = style({
  color: `${palette.black}`,
  fontSize: '20px',
  fontWeight: 300,
  marginBottom: '12px',
});

export const dateStyle = style({
  color: `${palette.grey}`,
  fontSize: '14px',
  fontWeight: 300,
});
