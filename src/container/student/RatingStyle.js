import styled from 'styled-components';

/**
 * Start Rating Search Styling
 */
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items:center;
    margin-left : 30px;
    margin-right:30px;
`;

export const Rating = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    margin: 0 12px 10px 10px;
`;

export const Search = styled.div`
    display: flex;
    flex-direction: row;
    flex: 10%;
    margin-left: 30px;
    justify-content: space-around;
    justify-items: flex-start;
    input {
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #ccc;
        font-size: 14px;
        margin-bottom: 5px;
        margin-right: 3px;
        height: 35px;
        box-shadow: insert 0 1px rgba(0,0,.75);
    }
    select{
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #ccc;
        font-size: 14px;
        margin-bottom: 5px;
        margin-right: 3px;
        height: 38px;
        box-shadow: insert 0 1px rgba(0,0,.75);
    }
`; 

/* End Rating Search Styling */

/* Start Card RatingSearch Styling */
export const Card = styled.div`
 display: flex;
 flex-direction: column;
 width: 210px;
 height: 350px;
 background-color: #fff;
 box-shadow: 0 2px 5px #777;
 margin: 0 3px 10px 5px;
 transition: all 0.2s ease-in-out;
 :hover{
    box-shadow: 0 5px 6px #777;
    transform: translate(0,0.1%);
    cursor: pointer;
 }
 }
 :active{
     box-shadow:none;
     
`

export const BoxPoster = styled.div`
    flex: 45%;
    width: 100%;
    margin:0;
    padding: 0.2rem;
    position: relative;
    padding: 0.15em;
    img{
        height: 90%;
        width: 98%;
    }
`;


export const BoxGenre = styled.div`
    flex: 55%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
`;

export const Genre = styled.div`
    flex: 10%;
    margin: 0;
    p{
        font-size:0.80em;
        margin-left: 5px;
        line-height: 1;
        color: #008080;
        font-weight: 400;
        text-decoration:none;
    }
`;

export const IconGroup = styled.div`
    flex: 90%;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    margin-bottom: 3px;
`;




/* End Card RatingSearch Styling */