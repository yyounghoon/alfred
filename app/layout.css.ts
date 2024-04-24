import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const mainSection = style({
  flex: 1,
  width: '100%',
  maxWidth: '820px',
  margin: '0 auto',
  padding: '24px',
});
