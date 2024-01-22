import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	FlatList,
} from "react-native";

export default function App() {
	//States:

	const [item, setItem] = useState("");
	const [items, setItems] = useState([]);

	//Functions:

	const handleAdd = () => {
		setItems([...items, item]);
		setItem(""); //empty text input field
		//console.log(items);
	};

	const clearAll = () => {
		setItems([]);
		//console.log(items);
	};

	//Components:

	const listHeader = () => {
		return (
			<View>
				<Text>Shopping List</Text>
			</View>
		);
	};

	//Rendering:
	return (
		<View style={styles.container}>
			<View
				style={{
					flex: 1,
				}}
			>
				<TextInput
					placeholder="Type Item"
					value={item}
					onChangeText={(text) => setItem(text)}
				/>

				<View style={styles.buttons}>
					<Button title="Add Item" onPress={handleAdd} />
					<Button title="Clear" onPress={clearAll} />
				</View>
			</View>

			<View style={{ flex: 3 }}>
				<FlatList
					data={items}
					ListHeaderComponent={listHeader}
					renderItem={({ item }) => (
						<View style={styles.listItem}>
							<Text style={{ fontSize: 14 }}>{item}</Text>
						</View>
					)}
				/>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 100,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	buttons: {
		flexDirection: "row",
	},
	listItem: {
		padding: 5,
		width: 300,
		alignItems: "center",
	},
});
