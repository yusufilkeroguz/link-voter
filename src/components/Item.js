import React, { useState } from 'react'
import styled from '@emotion/styled'
import Delete from './Delete'
import Popup from './Popup'

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-grow: 0;
  flex-direction: row;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 5px 0 #585D5F;
  margin-bottom: 1rem;
  width: 90%;
  position: relative;
  
  @media all and (min-width: 992px) {
    width: 50%;
  }
  
  &:hover {
    ${Delete} {
      display: block;
    }
  }
`

const VoteBox = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-direction: column;
  flex-basis: auto;
  background-color: #f5f5f5;
  padding: .75rem 2rem;
  border-radius: 50%;
  font-size: 2rem;
`

const DescriptionBox = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-direction: column;
  flex-basis: 100%;
  padding-left: 2rem;
  
  & .voting {
    margin-top: .5rem;
    display: inline-block;
    font-size: 2rem;
    cursor: pointer;
    
    &.down-vote {
      margin-left: 2rem;
    }
  }
`

const sendToRedux = (event, id, cb) => {
  event.preventDefault()

  return cb(id)
}

export default (props) => {
  const deleteItem = (e) => {
    e.preventDefault()

    sendToRedux(e, props.id, props.remove)
    setPopupVisible(!visible)
  }

  const [ visible, setPopupVisible ] = useState(false)

  return (
    <Item>
      <VoteBox>
        <div>
          {props.link.vote}
        </div>
      </VoteBox>

      <DescriptionBox>
        <div>
          {props.link.name}
        </div>

        <a href={props.link.link}>{props.link.link}</a>

        <div>
          <div className="up-vote voting" onClick={(e) => sendToRedux(e, props.id, props.up_vote)} dangerouslySetInnerHTML={{__html: '&#128077;'}} />
          <div className="down-vote voting" onClick={(e) => sendToRedux(e, props.id, props.down_vote)} dangerouslySetInnerHTML={{__html: '&#128078;'}} />
        </div>
      </DescriptionBox>

      <Delete onClick={() => { setPopupVisible(!visible) }} />

      <Popup item={props.link} visible={visible}>
        {props.item.name} will permanently deleted. Are you sure?

        <div>
          <button onClick={(e) => { deleteItem(e) }}>Yes</button>
          <button onClick={() => { setPopupVisible(!visible) }}>No</button>
        </div>
      </Popup>
    </Item>
  )
}
