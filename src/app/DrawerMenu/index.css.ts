import { palette } from '@/styles/palette';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

export const wrapper = style({
  width: '500px',
  height: '100%',
  background: '#fff',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '16px 18px',
});
