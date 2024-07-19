import { style } from '@vanilla-extract/css';

export const nav = style({
  height: 80,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 20px',
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
