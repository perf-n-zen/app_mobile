import { View, Text } from 'react-native'
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function SelectComponent({open, items, value, setOpen, setItems, setValue}) {


  return (
    <>
        <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
  
    />
    </>
  )
}