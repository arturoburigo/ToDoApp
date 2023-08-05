import { FlatList, HStack, Text, VStack, View } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { EmptyComponent } from "../components/EmptyComponent";
import { TodoItem } from "../components/TodoItem";

export function Home(){
    const [items, setItems] = useState<{name: string, completed: boolean}[]>([])
    const [completedItems, setCompletedItems] = useState<string[]>([])
    const [inputText, setInputText] = useState<string>("")

    function handleRemoveItem(lastItem: string){
        setItems((prevState) => prevState.filter(item => item.name !== lastItem))
    }


    function handleAddItem() {
        const newItem = {name: inputText, completed: false };
        setItems([...items, newItem]);
        setInputText("");
    }
    

    function handleConclude(itemId: string) {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.name === itemId ? { ...item, completed: true } : item
            )
        );
    }
    
    

    return (
        <VStack flex={1} background={"gray.900"}>
            <Header/>
            <HStack px={6} mt={-10} direction="row">
                <Input onChangeText={setInputText} value={inputText} onSubmitEditing={handleAddItem}/>
                <Button onPress={handleAddItem}/>
            </HStack>
            <HStack justifyContent={"space-between"} px={6} mt={6} mb={8}>
                <HStack>
                    <Text color={"#4EA8DE"} fontWeight={"bold"}>Criadas</Text>
                    <View bg={"gray.600"} px={2} rounded={"full"} ml={2}>
                        <Text  color={"white"}>{items.length}</Text>
                    </View>
                </HStack>
                <HStack>
                    <Text color={"#8284FA"} fontWeight={"bold"}>Concluidas</Text>
                    <View bg={"gray.600"} px={2} rounded={"full"} ml={2}>
                        <Text  color={"white"}>{items.filter(item => item.completed).length}</Text>
                    </View>
                </HStack>
            </HStack>
            <FlatList 
                data={items}
                keyExtractor={items => items.name}
                contentContainerStyle={items.length == 0 && { flex: 1 }}
                ListEmptyComponent={EmptyComponent}
                renderItem={({ item }) => (
                    <TodoItem 
                        name={item.name}
                        onRemove={() => handleRemoveItem(item.name)}
                        onConclude={() => handleConclude(item.name)}
                    />
                )}
            />
        </VStack>
    )
}