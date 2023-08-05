import { Input as NativeBaseInput, IInputProps } from "native-base";

export function Input(props: IInputProps){
    return (
        <NativeBaseInput 
            flex={1}
            bg={'gray.700'}
            px={4}
            h={"12"}
            borderWidth={0}
            fontSize={'md'}
            color={'white'}
            fontFamily={'body'}
            placeholderTextColor="gray.300"
            _focus={{
                bg: 'gray.800',
                borderWidth: 1,
                borderColor: '#5E60CE'
            }}
            {...props}
        />
    )
}