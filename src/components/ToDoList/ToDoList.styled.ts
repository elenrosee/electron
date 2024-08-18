import { styled } from 'styled-components'
import { Breakpoints, MQ } from '../../common'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10px;

  ${MQ(Breakpoints.lg)} {
    flex-direction: row;
  }
`

export const ItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const Title = styled.h3`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  font-size: 20px;
  color: #003d74;
`

export const ItemBoard = styled.div`
  border: solid 2px #003d74;
  border-radius: 20px;

  overflow-y: scroll;

  padding: 10px;
  margin-bottom: 10px;

  width: calc(100vw - 20px);
  min-width: 300px;
  min-height: 200px;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  ${MQ(Breakpoints.lg)} {
    width: calc((100vw - 30px) / 2);
    max-width: calc((1100px - 10px) / 2);
    height: calc(100vh - 140px);

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`

export const BoardTitle = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 0 20px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #003d74;
`
