import { React, useState } from 'react'
import ProgressCircle from 'react-native-progress-circle';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Bars3CenterLeftIcon, BellIcon } from 'react-native-heroicons/solid'
const HomeScreen = () => {

    const [hoveredBlock, setHoveredBlock] = useState(null);

    const handleBlockPressIn = (blockNumber) => {
        setHoveredBlock(blockNumber);
        console.log("Block entered", blockNumber)
    };

    const handleBlockPressOut = () => {
        setHoveredBlock(null);
    };

    return (
        <KeyboardAvoidingView className="w-full flex:1">
            <View style={styles.header}>
                <Bars3CenterLeftIcon color="black" size={30} style={{ marginRight: 10 }} />
                <BellIcon color="black" size={30} />
            </View>
            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.content}>

                    <View style={styles.admin}>
                        <Text style={styles.addtext}> Admin Dashboard</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.block, hoveredBlock === 1 ? styles.hoveredBlock : styles.block1]}
                        onPressIn={() => handleBlockPressIn(1)}
                        onPressOut={handleBlockPressOut}
                    >

                        <View style={styles.spinnerContainer}>
                            <ProgressCircle
                                percent={100}
                                radius={30}
                                borderWidth={8}
                                color="#3399FF"
                                shadowColor="#d9edf7"
                                bgColor="#FFB6C1"
                            >
                                <Text style={styles.spinnerText}>2</Text>
                            </ProgressCircle>
                        </View>
                        <Text style={styles.texts}>Total Buildings</Text>
                        <Text style={styles.texts}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.block, hoveredBlock === 2 ? styles.hoveredBlock : styles.block2]}
                        onPressIn={() => handleBlockPressIn(2)}
                        onPressOut={handleBlockPressOut}
                    >
                         <View style={styles.spinnerContainer}>
              <ProgressCircle
                percent={100}
                radius={30}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#d9edf7"
                bgColor="#FFB6C1"
              >
                <Text style={styles.spinnerText}>2</Text>
              </ProgressCircle>
            </View>
                        <Text style={styles.texts}>Total Flat/Rooms</Text>
                        <Text style={styles.texts}>167</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.block, hoveredBlock === 3 ? styles.hoveredBlock : styles.block3]}
                        onPressIn={() => handleBlockPressIn(3)}
                        onPressOut={handleBlockPressOut}
                    >
                         <View style={styles.spinnerContainer}>
              <ProgressCircle
                percent={100}
                radius={30}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#d9edf7"
                bgColor="#FFB6C1"
              >
                <Text style={styles.spinnerText}>2</Text>
              </ProgressCircle>
            </View>
                        <Text style={styles.texts}>Flat On Rent</Text>
                        <Text style={styles.texts}>129</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.block, hoveredBlock === 4 ? styles.hoveredBlock : styles.block4]}
                        onPressIn={() => handleBlockPressIn(4)}
                        onPressOut={handleBlockPressOut}
                    >
                         <View style={styles.spinnerContainer}>
              <ProgressCircle
                percent={100}
                radius={30}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#d9edf7"
                bgColor="#FFB6C1"
              >
                <Text style={styles.spinnerText}>2</Text>
              </ProgressCircle>
            </View>
                        <Text style={styles.texts}>Empty Flat</Text>
                        <Text style={styles.texts}>38</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.block, hoveredBlock === 5 ? styles.hoveredBlock : styles.block5]}
                        onPressIn={() => handleBlockPressIn(5)}
                        onPressOut={handleBlockPressOut}
                    >
                        <Text style={styles.texts}>Pending Status</Text>
                        <Text style={styles.texts}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.block, hoveredBlock === 6 ? styles.hoveredBlock : styles.block6]}
                        onPressIn={() => handleBlockPressIn(6)}
                        onPressOut={handleBlockPressOut}
                    >
                         <View style={styles.spinnerContainer}>
              <ProgressCircle
                percent={100}
                radius={30}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#d9edf7"
                bgColor="#FFB6C1"
              >
                <Text style={styles.spinnerText}>2</Text>
              </ProgressCircle>
            </View>
                        <ActivityIndicator size="50" color="#ffffff" style={styles.spinner} />
                        <Text style={styles.texts}>Month Rent Received</Text>
                        <Text style={styles.texts}>0</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: "#FFB6C1",
        padding: 10
    },
    content: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        alignItems: "center",
        flexGrow: 1,
        justifyContent: 'flex-start', // Align items at the start of the ScrollView
        gap: 15,
        marginBottom: 90
    },

    texts: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,

    },

    addtext: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    container: {
        backgroundColor: "#FFFFFF",
        padding: 0,
        alignItems: "center"
    },
    block: {
        height: 170,
        width: "90%",
        backgroundColor: "#7F00FF",
        alignItems: "center",
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30,
        elevation: 20, // Android shadow
        alignItems: "flex-end",
        shadowOpacity: 1.3,
        shadowRadius: 2,
    },
    block1: {

        backgroundColor: "#E0B0FF",

    },
    block2: {

        backgroundColor: "#FF69B4",


    },
    block3: {

        backgroundColor: "#FFAC1C",

    },
    block4: {

        backgroundColor: "#86c5da",

    },
    block5: {

        backgroundColor: "#e6d8ad",

    },
    block6: {

        backgroundColor: "#ade6d8"

    },
    spinnerContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
      },
      spinnerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      }
})
