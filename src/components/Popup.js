import React from 'react'
import styled from '@emotion/styled'

const Popup = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  padding: 1rem;
  border: 1px solid #dddddd;
  z-index: 10;
  background-color: #fafafa;
`

export default (props) => {
  return (
    <Popup style={(props.visible ? {display: 'flex'} : {})}>
      {props.item.name} will permanently deleted. Are you sure?

      <div>
        <button>Yes</button>
        <button>No</button>
      </div>
    </Popup>
  )
}
