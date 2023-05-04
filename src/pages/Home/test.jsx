/*
 * @Author: Chris
 * @Date: 2023-04-26 15:21:15
 * @LastEditors: Chris
 * @LastEditTime: 2023-04-26 18:27:37
 * @Descripttion: **
 */
import React, { useRef, useState } from 'react';
import { Input, Button, message } from 'antd'

const Text = () => {
  const [value, setValue] = useState('')
  const handlerChange =(e) => {
    setValue(e.target.value)
  }
  const handlerClick = () => {
    message.success('dddd')
    alert(value)
  }
  return <div>
    dddd
      <Button onClick={handlerClick}>Button</Button>
      <Input onChange={handlerChange} value={value} />
    </div>
}

export default Text;