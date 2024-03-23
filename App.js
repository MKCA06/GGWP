import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native'
import Model from './Model'
import { useState } from 'react'
import { times } from './Data'
import Info from './Info'

export default function App() {
  const [data, setData] = useState(times)
  const [isVisible, setIsVisible] = useState(false)
  const [selected, setSelected] = useState()
  const [info, setInfo] = useState(false)

  const handleTimeClick = (item) => {
    setIsVisible(true)
    setSelected(item)
    // console.log("aAlert")
  }

  const handleBoxClick = (item) => {
    setSelected(item)
    setInfo(true)
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.heading}>Meeting Room Booking</Text>
      </View>
      <View style={{ padding: 30 }}>
        <Text style={styles.subHeading}>Avilable Rooms</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <>
            <TouchableOpacity key={index} onPress={() => handleTimeClick(item)}>
              <Text style={{ fontSize: 20, padding: 5, marginBottom: 5 }}>
                {item?.time}
              </Text>
            </TouchableOpacity>
            <FlatList
              style={{ marginLeft: 30 }}
              horizontal
              data={item.events}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleBoxClick(item)}
                >
                  <View style={{ marginBottom: 20 }}>
                    <View>
                      <ScrollView horizontal>
                        <View style={styles.box}>
                          <Text style={{ color: 'gray', fontSize: 16 }}>
                            {item.title}
                          </Text>
                          <Image
                            source={{
                              uri:
                                'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
                            }}
                            style={styles.image}
                            resizeMode="cover"
                          />
                          <Text style={{ color: 'gray', fontSize: 16 }}>
                            {item.description}
                          </Text>
                        </View>
                      </ScrollView>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Model
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        data={data}
        setData={setData}
        selected={selected}
      ></Model>
      <Info info={info} setInfo={setInfo} selected={selected}></Info>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
    padding: 25,
    marginBottom: 20,
    display: 'flex',
  },
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 25,
  },
  subHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'cyan',
    padding: 10,
    borderRadius: 10,
  },
  box: {
    backgroundColor: 'white',
    marginRight: 15,
    padding: 20,
    borderRadius: 10,
    borderLeftWidth: 10,
    borderLeftColor: '#90EE90',
    borderWidth: 2,
    borderBlockColor: 'gray',
    fontSize: 16,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
})
