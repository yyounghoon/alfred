import { palette } from '@/styles/palette';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '20px',
  padding: '24px',
  margin: '80px 0',
  border: `1px solid ${palette.lightGrey}`,
  borderRadius: '12px',
});

export const titleStyle = style({
  color: '#7c7c7c',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
});

export const descriptionStyle = style({
  color: '#7c7c7c',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: '150%',
});
