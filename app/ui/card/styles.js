import styled from 'styled-components';

const CardWrapper = styled.div`
    min-width: 387px;
    min-height: 330px;
    background-color:#EFEAE6;
    border-radius:4px;
    margin: 16px;
    box-shadow: 8px 8px 90px 1px #A6A6A6;
`

const CardImage = styled.div`
    background-image: url(test.jpg);
    background-size: cover;
    border-radius: 4px 4px 0px 0px;
    width: 100%;
    height: 229px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 8px 16px;
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    min-height: 101px;
`
const CardTitle = styled.div`

`
const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
`
const CardTimer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`


export { CardWrapper, CardContent, CardImage, CardTitle, CardInfo, CardTimer }