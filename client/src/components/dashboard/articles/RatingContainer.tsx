import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

const RatingStar = () => {
	const [rating, setRating] = useState(0)

	const handleRatingPress = selectedRating => {
		setRating(selectedRating)
	}

	const renderStars = () => {
		const stars = []
		const totalStars = 5

		for (let i = 1; i <= totalStars; i++) {
			const starIconName =
				i <= rating ? "star" : i - rating <= 0.5 ? "star-half-o" : "star-o"

			stars.push(
				<TouchableOpacity key={i} onPress={() => handleRatingPress(i)}>
					<Icon name={starIconName} size={30} color='#FFD700' />
				</TouchableOpacity>
			)
		}

		return stars
	}

	return (
		<View style={{ alignItems: "center" }}>
			<Text style={{ fontSize: 20, marginBottom: 10 }}>
				Rating: {rating.toFixed(1)}
			</Text>
			<View style={{ flexDirection: "row" }}>{renderStars()}</View>
		</View>
	)
}

export default RatingStar
