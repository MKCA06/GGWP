import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'

const Model = ({isVisible, setIsVisible, data, setData, selected}) => {
  const [eventTitle, setEventTitle] = useState('')
  const [eventDescription, setEventDescription] = useState('')

  const handleClose = () => {setIsVisible(false)}

  const handleSubmit = () => {
    const newdata = data.map((item,index)=>{
        if(item.time == selected.time){
            const event = {title:eventTitle, description:eventDescription}
            return {...item, events:[...item.events, event]}
        }
        return item
    })
    setData(newdata)
    setEventTitle("")
    setEventDescription("")
    handleClose()
  }

  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Text style={styles.closeicon}>X</Text>
          </TouchableOpacity>
          <Text style={styles.heading}>Add Event Or Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Event Title"
            value={eventTitle}
            onChangeText={text => setEventTitle(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Event Description"
            value={eventDescription}
            onChangeText={text => setEventDescription(text)}
            multiline={true}
            numberOfLines={4}
          />
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: 'white',
    padding: 35,
    borderRadius: 20,
    width: '95%',
    height: 'auto',
    alignItems: 'center',
  },
  closeButton: {
    height: 33,
    width: 33,
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeicon: {
    fontSize: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
})

export default Model
