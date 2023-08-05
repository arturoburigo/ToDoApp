import { Text, Center, Image } from "native-base";
import Clipboard from '../assets/Clipboard.png'

export function EmptyComponent(){
    return (
        <Center py={20}>
            <Image source={Clipboard} alt="Empty Component Item"/>
            <Text color={"#808080"} fontWeight={"bold"} mt={6}>Você ainda não tem tarefas cadastradas</Text>
            <Text color={"#808080"}>Crie tarefas e organize seus itens a fazer</Text>
        </Center>
    )
}