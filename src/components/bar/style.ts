import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled.header`
  background: green;
  position: fixed;
  width: 100vw;

  padding: 1rem;

  z-index: 7;
`;

export const Nav = styled(motion.nav)`
  background-color: red;
  z-index: 5;
  height: 90vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LinkTag = styled(motion.li)`
  color: white;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
  list-style: none;
`;

export const SvgBox = styled(motion.div)``;
