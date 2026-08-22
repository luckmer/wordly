import { cva } from 'class-variance-authority'

export const typography = cva('not-italic select-none', {
  variants: {
    text: {
      h3: 'text-[20px] font-[400] leading-[22px]',
      caption: 'text-[14px] font-[400] leading-[16px]',
      captionMedium: 'text-[14px] font-[700] leading-[14px]',
      small: 'text-[12px] font-[400] leading-[14px]',
      custom: '',
    },
    color: {
      white: 'text-text',
      black: 'text-black',
      blue: 'text-background-blue',
    },
    bold: {
      true: 'font-bold',
    },
    uppercase: {
      true: 'uppercase',
    },
    capitalize: {
      true: 'capitalize',
    },
    font: {
      default: 'font-inter',
    },
  },
  defaultVariants: {
    font: 'default',
    text: 'caption',
    color: 'black',
  },
})
