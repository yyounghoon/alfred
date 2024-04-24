import { style } from '@vanilla-extract/css';

export const nav = style({
  height: 60,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 32px',
});

export const title = style({
  color: 'black',
  fontSize: 22,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',

  ':hover': {
    color: 'black',
  },
});

export const menu = style({
  display: 'flex',
  alignItems: 'center',
});
