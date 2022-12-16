import styled from "styled-components";

export const ContainerApp = styled.div`
    width: 100%;
    max-width:1246px;
    margin: 0 auto;
    padding: 3.2rem 6.4rem;
   

`

export const HeaderApp = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0px;
    border-bottom: solid 0.2rem rgba(255,255,255,0.5) ;
    padding-bottom: 1rem;
    
    
    h1{
    
        font-size: 2rem;

    }
    span{

        font-size: 1rem;
        opacity: 0.8;

    }

`

export const MainApp = styled.main`
  display: block;
  text-align: center;
  

  & > div{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1.6rem;
   
  }
 
  & > div>:hover {
    transition: 0.3s all ease;
    transform:scale(1.05)
}
  
  & > button{
    transition: 0.3s all ease;
    border-radius: 10px;
    border: transparent;
    padding: 0.8rem 1.6rem;
    margin-top: 3.2rem ;
    background-color: #202030;
    font-size: 1.6rem;
    font-weight: 600;
  
  }
  & > button:hover{

    transform: scale(1.1);
  }
       
`