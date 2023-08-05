import {Button as NativeBaseButton, Text, IButtonProps} from 'native-base'


export function Button(props: IButtonProps){
    return (
        <NativeBaseButton ml={2} rounded={'md'} px={5} bg={'#1E6F9F'} {...props}>
            <Text color={'white'} fontSize={'lg'}>+</Text>
        </NativeBaseButton>
    )
}