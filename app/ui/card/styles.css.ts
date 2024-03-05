import { style } from '@vanilla-extract/css';


export const cardWrapper = style({
    minWidth: 387,
    minHeight: 330,
    backgroundColor: '#EFEAE6',
    borderRadius: 4,
    margin: 16,
    boxShadow: '8px 8px 90px 1px #A6A6A6'
})

export const cardImage = style({
    position:'relative',
    borderRadius: '4px 4px 0px 0px',
    backgroundColor: 'pink',
    width: '100%',
    height: 229,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
})

export const cardContent = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
    minHeight: 101
})

export const cardInfo = style({
    display: 'flex',
    justifyContent: 'space-between',
})

export const cardTimer = style({
    display: 'flex',
    alignItems: 'center',
    gap: 8
})

export const cardTag = style({
    position: 'absolute',
    bottom: 8,
    right: 16
})

