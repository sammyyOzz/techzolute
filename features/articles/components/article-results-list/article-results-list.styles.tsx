import styled from 'styled-components'

export const ResultsContainer = styled.div`
    background-color: #30303f;
    box-sizing: border-box;
    box-shadow: 0 0 10px #3d3d3f;
    
    & > .search-container {
        padding: 20px 25px;
        border-bottom: 1px solid gray;

        & .search-input {
            width: 100%;
        }
    }

    & > .results-container {
        padding: 40px 25px;
    }

    & > .paginate-container {
        padding: 0px 25px 30px;
        display: flex;
        justify-content: center;
        border-top: 1px solid gray;
    }
`