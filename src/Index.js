import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../Config";
import firebase from "firebase/compat/app";

export default function Otp() {
  const [phonenumber, setPhonenumber] = useState("");
  const [code, setCode] = useState("");
  const [verifyId, setVerifyID] = useState("");

  const recaptchaverify = useRef(null);
  const sendverification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phonenumber, recaptchaverify.current)
      .then(setVerifyID);
    setPhonenumber("");
  };
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verifyId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCode("");
      })
      .catch((error) => {
        alert(error);
      });
    Alert.alert("Login successful. Welcome To Dashboard");
  };
  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaverify}
        firebaseConfig={firebaseConfig}
      />
      <Text style={styles.otptext}>Login Using OTP</Text>
      <TextInput
        placeholder="Phone Number With Country Code"
        onChangeText={setPhonenumber}
        keyboardType="phone-pad"
        autoCompleteType="tel"
        style={styles.textinput}
      />
      <TouchableOpacity style={styles.sendv} onPress={sendverification}>
        <Text style={styles.btntext}>Send Verification</Text>
      </TouchableOpacity>
      <TextInput
        placeholder=" Confirm Code"
        onChangeText={setCode}
        keyboardType="number-pad"
        style={styles.textinput}
      />
      <TouchableOpacity style={styles.sendcode} onPress={confirmCode}>
        <Text style={styles.btntext}>Confirm Verification</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  textinput: {
    paddingBottom: 20,
    paddingTop: 40,
    paddingHorizontal: 20,
    fontSize: 24,
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  sendv: {
    padding: 20,
    backgroundColor: "#3498db",
    borderRadius: 10,
  },
  sendcode: {
    padding: 20,
    backgroundColor: "#9b596b",
    borderRadius: 10,
  },
  btntext: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  otptext: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    margin: 20,
  },
});
