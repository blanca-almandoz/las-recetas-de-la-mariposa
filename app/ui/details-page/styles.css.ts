import { style } from '@vanilla-extract/css';

export const recipeWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: 24,
})

export const recipeActions = style({
    display: 'flex',
    width: '100%',
    gap: 8
})

export const recipeTitle = style({
    color: '#A0846A',
    height: 24,
    width: '100%'
})

export const recipeContent = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 24
})

export const recipeContentContainer = style({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 40,
    gap: 8,
})

export const recipeContentText = style({
    flexBasis: '50%',
    paddingRight: 8
})

export const recipeContentImage = style({
    width: 590,
    height: 349,
    borderRadius: 4,
   // backgroundImage: 'todo',
    backgroundSize: 'cover',
    backgroundColor: 'yellow'
})

export const listedSteps = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 16
})

export const iconAndLabelWrapper = style({
    display: 'flex',
    alignItems: 'center',
    gap: 8
})

export const recipeContentTextHeaders = style({
    display: 'flex',
    gap: 64,
    marginBottom: 40
})




/* 
const RecipeContentContainer = styled.div`
    @media (max-width: 639px) {
        flex-direction: column-reverse;
        margin-bottom: 24px;
    }
`
const RecipeContentText = styled.div`
    @media (max-width: 639px) {
        padding-right: 0px;
    }
`
const RecipeContentImage = styled.div`
    @media (max-width: 887px) {
        width:100%;
        border-radius: 0px;
        height: 229px;
    }
`
const RecipeContentTextHeaders = styled.div`
    @media (max-width: 887px) {
        gap: 32px;
        margin-top: 16px;
    }
`
*/