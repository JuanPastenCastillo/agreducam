import { COLORS } from "@/assets/colors"
import styled from "styled-components"

export const Nosotros_3Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* height:auto; */
  /* height:calc(100% + 100vh); */
  /* height:200vh; */
  /* border: 2px solid crimson; */
  

  opacity: ${({ shouldShow }) => (shouldShow ? `1` : `0`)};
  
  & > :nth-child(1){
    & > :nth-child(1) {
      border-bottom: 7px solid ${COLORS.ACTIVE};
      border-bottom-right-radius: 4px;
      filter: sepia(20%);
      font-weight: 800;

      & > :nth-child(1) {
        color: ${COLORS.ACTIVE};
        filter: sepia(20%);
        border-bottom: 7px solid white;
        border-bottom-right-radius: 8px;
      }
      
      & > :nth-child(2) {
        font-style: italic;
      }
    }
  }
  
  & > :nth-child(2){
    list-style:none;
    
    /* border: 2px solid crimson; */
    height:100%;
    
    
    
    
    
    & > li{
      & > span{
        display:block;
        color:${COLORS.ACTIVE};
        filter:sepia(20%);
      }
      
      
    }
    
  }
  
  
`
