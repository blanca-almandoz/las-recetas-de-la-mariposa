import styled from 'styled-components';

const RecipeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
`
const RecipeActions = styled.div`
    display: flex;
    width: 100%;
    gap: 8px;
`
const RecipeTitle = styled.div`
    color: #A0846A;
    height: 24px;
    width: 100%;
`
const RecipeContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
const RecipeContentContainer = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom: 40px;
    gap: 8px;
    @media (max-width: 639px) {
        flex-direction: column-reverse;
        margin-bottom: 24px;
    }
`
const RecipeContentText = styled.div`
    flex-basis: 50%;
    padding-right: 8px;
    @media (max-width: 639px) {
        padding-right: 0px;
    }
`
const RecipeContentImage = styled.div`
    width: 590px;
    height: 349px;
    border-radius:4px;
    background-image: url(guacamole.jpg);
    background-size: cover;
    background-color:pink;
    @media (max-width: 887px) {
        width:100%;
        border-radius: 0px;
        height: 229px;
    }
`
const ListedSteps = styled.div`
    display:flex;
    flex-direction: column;
    gap: 16px;
`
const ListedStepsTitle = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
`
const IconAndLabelWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
const RecipeContentTextHeaders = styled.div`
    display: flex;
    gap: 64px;
    margin-bottom: 40px;
    @media (max-width: 887px) {
        gap: 32px;
        margin-top: 16px;
    }
`



export { RecipeWrapper, RecipeActions, RecipeTitle, RecipeContent, ListedSteps, ListedStepsTitle,
    RecipeContentContainer, RecipeContentText, RecipeContentImage, IconAndLabelWrapper, RecipeContentTextHeaders }