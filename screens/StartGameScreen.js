import {StyleSheet, TextInput, View, Alert} from "react-native";
import {useState} from 'react';
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({onPickNumber}) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
        console.log(enteredText)
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!',
                'Number should be greater than 0 and less than 99',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        onPickNumber(chosenNumber);
    }



    function resetInputHandler() {
        setEnteredNumber('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput maxLength={2}
                       style={styles.numberInput}
                       keyboardType="number-pad"
                       autoCapitalize='none'
                       autoCorrect={false}
                       onChangeText={numberInputHandler}
                       value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>

                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>

        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        padding: 16,
        backgroundColor: '#4e0329',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});
