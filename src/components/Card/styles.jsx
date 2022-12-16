import styled from "styled-components";

export const ContainerCard = styled.div`
    min-width: 100%;
    height: 100%;
    white-space:nowrap;
    background-color: #151020;
    overflow: hidden;
    border-radius: 6px;
    padding: 2rem;  
    .image{
        width: 100%;
        border-radius: 8px;
        
       
        object-fit: cover;
        img{
            min-height: 100%;
            min-width: 100%;
            background-size: cover;
            border-radius: 6px; 
            object-fit: cover;
        }
    }
    .info{
        padding-top: 1.5rem;
        text-align: start;
       h3{
        font-size: clamp(1rem,2rem,3rem);
       }
        ul{
            display:flex;   
           li{
            font-size: clamp(1.2rem,80%,3rem);
           }
        }
        li:first-child::after {
            content: '';
            display: inline-block;
            height: 3px;
            width: 3px;
            border: solid 1px white;
            background-color: white;
            vertical-align: middle;
            border-radius: 100%;
            margin:0rem 0.4rem ;
        }
    }

    

`