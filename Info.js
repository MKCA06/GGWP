import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Info = ({ info, setInfo, selected }) => {

  const handleClose = () => {
    setInfo(false)
  }

  return (
    <Modal visible={info} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Text style={styles.closeicon}>X</Text>
          </TouchableOpacity>
          <Text style={styles.heading}>Task Detail</Text>
          <View style={{ padding: 20 }}>
            <View>
              <Text style={styles.text}>Title : {selected?.title}</Text>
            </View>
            <View>
              <Text style={styles.text}>Descript : {selected?.description}</Text>
            </View>
          </View>
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
  text: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 17,
  },
})

export default Info
