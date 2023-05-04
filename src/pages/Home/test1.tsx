/*
 * @Author: Chris
 * @Date: 2023-04-26 15:35:05
 * @LastEditors: Chris
 * @LastEditTime: 2023-04-26 15:36:33
 * @Descripttion: **
 */
/*
 * @Author: Chris
 * @Date: 2023-04-26 15:21:15
 * @LastEditors: Chris
 * @LastEditTime: 2023-04-26 15:27:39
 * @Descripttion: **
 */
import React, { useState } from 'react';
import { Input, Button } from 'antd'

const Text = () => {
  const [value, setValue] = useState('')
  const handlerChange =(e: { target: { value: React.SetStateAction<string>; }; }) => {
    setValue(e.target.value)
  }
  const handlerClick = () => {
    alert(value)
  }
  return <div>
    dddd
      <Button onClick={handlerClick}>Button</Button>
      <Input onChange={handlerChange} value={value} />
    </div>
}

export default Text;