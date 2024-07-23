import { style } from '@vanilla-extract/css';

export const nav = style({
  minHeight: 80,
  display: 'flex',
  alignItems: 'center',
  padding: '12px 20px',

  '@media': {
    '(max-width: 960px)': {
      justifyContent: 'space-between',
    },
  },
});

export const title = style({
  minWidth: 160,
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
  marginLeft: 32,
  gap: 32,
});

export const menuItem = style({
  padding: '12px 10px',
  fontSize: 16,
  fontWeight: 500,
  transition: 'border-bottom 0.25s',

  ':hover': {
    fontWeight: 700,
    borderBottom: '4px solid red',
  },
});
