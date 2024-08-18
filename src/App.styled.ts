import { styled } from 'styled-components'
import { Breakpoints, MQ } from './common'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  width: max-content;

  ${MQ(Breakpoints.md)} {
    margin-top: 40px;
  }
`
