import { Image, View } from "native-base";
import Logo from '../assets/Logo.png'

export function Header(){
    return (
        <View background={"#000"} w={"full"} h={"48"} alignItems={"center"} justifyContent={"center"}>
            <Image source={Logo} alt="Logo Image"/>
        </View>      
    )
}