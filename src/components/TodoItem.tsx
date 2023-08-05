import { HStack, Icon, Image, Text, View } from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import trash from '../assets/trash.png'
import { useState } from "react";

type Props = {
    name: string
    onRemove?: () => void
    onConclude?: () => void
}

export function TodoItem({ name, onRemove, onConclude }: Props) {
    const [isClicked, setIsClicked] = useState(false);

    const handlePress = () => {
        setIsClicked(prev => !prev);
        if (onConclude) {
            onConclude(); // Call the onConclude function if it's provided
        }
    };

    return (
        <View px={8}>
            <HStack
                px={3}
                mb={3}
                bg={"gray.700"}
                py={3}
                rounded={"md"}
            >
                <TouchableOpacity
                    style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
                    onPress={handlePress}
                >
                    <View
                        h={4}
                        w={4}
                        mr={3}
                        alignItems={"center"}
                        justifyContent={"center"}
                        borderWidth={2}
                        borderColor={isClicked ? "#5E60CE" : "#4EA8DE"}
                        rounded={"full"}
                        background={isClicked ? "#5E60CE" : "gray.700"}
                    >
                        {isClicked && (
                            <MaterialIcons name="check" size={10} color={"white"} style={{fontWeight: "bold"}} />
                        )}
                    </View>

                    <Text
                        color={ isClicked? "gray.300" : "white"}
                        numberOfLines={2}
                        flex={1}
                        mr={3}
                        style={{
                            textDecorationLine: isClicked ? "line-through" : "none",
                        }}
                    >
                        {name}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onRemove}>
                    <Image source={trash} alt="trash logo" px={5} />
                </TouchableOpacity>
            </HStack>
        </View>
    );
}
