import {StyleSheet, TextInput, View, Alert} from "react-native";
import {useState} from 'react';
import PrimaryButton from "../components/game/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/game/ui/Title";
import Card from "../components/game/ui/Card";
import InstructionText from "../components/game/ui/InstructionText";

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
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
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

            </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',

    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
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
