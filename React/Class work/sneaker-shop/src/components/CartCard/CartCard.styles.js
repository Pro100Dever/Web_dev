import styled from '@emotion/styled'

export const Card = styled.div`
  width: 903px;
  height: 134px;
  background-color: #fafafa;
  border-radius: 10px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`

export const Image = styled.img`
  height: 90px;
  margin-right: 36px;
`
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const Title = styled.h3`
  font-size: 24px;
  width: 400px;
  height: 100%;
  padding: 20px 0 20px 36px;
  border-left: 1px solid black;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Price = styled.p`
  color: rgba(0, 0, 0, 0.5);
`

export const Amount = styled.p`
  font-weight: var(--font-bold);
`

export const AddButton = styled.button`
  width: 47px;
  height: 47px;
  padding: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  background-color: #e9e9e9;

  &:hover {
    background-color: #000;
    color: #fff;

    & img {
      filter: invert(1);
    }
  }
`
