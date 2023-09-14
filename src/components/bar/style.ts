import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled.header`
  
  position: fixed;
  width: 100vw;
  padding: 20px;
  z-index: 100;
`;

export const Nav = styled(motion.nav)`

  height: 100vh;
  width: 25vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  
`;

export const LinkTag = styled(motion.li)`
  color: white;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
  list-style: none;
  margin-left: 40px
 
`;

export const SvgBox = styled(motion.div)``;
