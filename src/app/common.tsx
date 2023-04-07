import { Text, TextInput, TouchableOpacity } from "react-native"

export const createTextInput = (
    style: any, 
    placeholder: string, 
    value: any,
    onChangeText: any ) => {
    return( 
        <TextInput
          style={style}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}/>
    )
}

export const createTouchableOpacityButton = (
  touchableOpacitySyle: any, 
  textStyle: any, 
  onPress:any,
  buttonText: string) => {
  return(
    <TouchableOpacity style={touchableOpacitySyle} onPress={onPress}>
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export const generateConfirmationCode = (length: number) => {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    code += charset[randomIndex];
  }
  return code;
}