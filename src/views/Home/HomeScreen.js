import React, { Component } from 'react';
import { View, Text, Slider, Button } from 'react-native';
import ColourSlider from '../../components/ColourSlider';
import Recents from '../../components/Recents';
import axios from 'axios';

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			red: 192,
			green: 255,
			blue: 238,
			lightness: 224,
			saturation: 36,
			hue: 116
		};
	}

	updateRed = red => {
		this.setState({ red });
		this.calculateHSL();
	};
	updateGreen = green => {
		this.setState({ green });
		this.calculateHSL();
	};
	updateBlue = blue => {
		this.setState({ blue });
		this.calculateHSL();
	};
	calculateHSL = () => {
		let { red, green, blue } = this.state;
		let min = Math.min(red / 255, green / 255, blue / 255);
		let max = Math.max(red / 255, green / 255, blue / 255);
		let lightness = ~~((min + max) * 127.5 + 0.5);
		this.setState({ lightness });
		if (min === max) {
			this.setState({ saturation: 0 });
			this.setState({ hue: 0 });
		} else {
			if (this.state.lightness > 127.5) {
				this.setState({ saturation: (max - min) / (max + min) * 255 });
			} else {
				this.setState({
					saturation: (max - min) / (2.0 - max - min) * 255
				});
			}
			let t = 0;
			let hue = 0;
			switch (max) {
				case red / 255:
					t = (green / 255 - blue / 255) / (max - min) * 60;
					hue = t < 0 ? t + 360 : t;
					this.setState({
						hue
					});
					break;
				case green / 255:
					t = (2.0 + (blue / 255 - red / 255) / (max - min)) * 60;
					hue = t < 0 ? t + 360 : t;
					this.setState({
						hue
					});
					break;
				case blue / 255:
					t = (4.0 + (red / 255 - green / 255) / (max - min)) * 60;

					hue = t < 0 ? t + 360 : t;
					this.setState({
						hue
					});
					break;
			}
		}
	};
	updateHue = hue => {
		this.setState({ hue });
		this.calculateRGB();
	};
	updateSaturation = saturation => {
		this.setState({ saturation });
		this.calculateRGB();
	};
	updateLightness = lightness => {
		this.setState({ lightness });
		this.calculateRGB();
	};
	calculateRGB = () => {
		let { red, green, blue, saturation, lightness, hue } = this.state;
		if (hue === 0 && saturation === 0) {
			this.setState({
				red: (lightness + 0.5) | 0,
				green: (lightness + 0.5) | 0,
				blue: (lightness + 0.5) | 0
			});
		} else {
			let temp1, temp2;
			lightness /= 255;
			saturation /= 255;

			if (lightness < 0.5) {
				temp1 = lightness * (1 + saturation);
			} else {
				temp1 = lightness + saturation - lightness * saturation;
			}
			temp2 = 2 * lightness - temp1;
			hue /= 360;
			// console.log('HUE ' + hue);
			let tempR = hue + 0.333;
			tempR = tempR < 0 ? tempR + 1 : tempR > 1 ? tempR - 1 : tempR;
			let tempG = hue;
			tempG = tempG < 0 ? tempG + 1 : tempG > 1 ? tempG - 1 : tempG;
			let tempB = hue - 0.333;
			tempB = tempB < 0 ? tempB + 1 : tempB > 1 ? tempB - 1 : tempB;

			if (6 * tempR < 1) {
				this.setState({
					red: ((temp2 + (temp1 - temp2) * 6 * tempR) * 255 + 0.5) | 0
				});
			} else if (2 * tempR < 1) {
				this.setState({ red: (temp1 * 255 + 0.5) | 0 });
			} else if (3 * tempR < 2) {
				this.setState({
					red:
						((temp2 + (temp1 - temp2) * (0.666 - tempR) * 6) * 255 +
							0.5) |
						0
				});
			} else {
				this.setState({ red: (temp2 * 255 + 0.5) | 0 });
			}

			if (6 * tempG < 1) {
				this.setState({
					green:
						((temp2 + (temp1 - temp2) * 6 * tempG) * 255 + 0.5) | 0
				});
			} else if (2 * tempG < 1) {
				this.setState({ green: (temp1 * 255 + 0.5) | 0 });
			} else if (3 * tempG < 2) {
				this.setState({
					green:
						((temp2 + (temp1 - temp2) * (0.666 - tempG) * 6) * 255 +
							0.5) |
						0
				});
			} else {
				this.setState({ green: (temp2 * 255 + 0.5) | 0 });
			}

			if (6 * tempB < 1) {
				this.setState({
					blue:
						((temp2 + (temp1 - temp2) * 6 * tempB) * 255 + 0.5) | 0
				});
			} else if (2 * tempB < 1) {
				this.setState({ blue: (temp1 * 255 + 0.5) | 0 });
			} else if (3 * tempB < 2) {
				this.setState({
					blue:
						((temp2 + (temp1 - temp2) * (0.666 - tempB) * 6) * 255 +
							0.5) |
						0
				});
			} else {
				this.setState({ blue: (temp2 * 255 + 0.5) | 0 });
			}
		}
	};
	updateAll = colours => {
		let red = parseInt(colours.substring(1, 3), 16);
		let green = parseInt(colours.substring(3, 5), 16);
		let blue = parseInt(colours.substring(5, 7), 16);
		this.setState({ red });
		this.setState({ green });
		this.setState({ blue });
		setTimeout(() => this.calculateHSL(), 0);
		red = (red / (255 / 1023)) | 0;
		green = (green / (255 / 1023)) | 0;
		blue = (blue / (255 / 1023)) | 0;
		console.log('red ' + red + ' blue ' + blue + ' green ' + green);
		axios.get(
			'http://10.0.0.142/gpio?r=' + red + '&g=' + green + '&b=' + blue
		);
	};
	saveFav = () => {
		this.props.actions.addToFavourites(this.backgroundColour());
	};
	deleteFav = fav => {
		this.props.actions.removeFromFavourites(fav);
	};
	backgroundColour = () => {
		return (
			'#' +
			this.pad(this.state.red.toString(16)) +
			this.pad(this.state.green.toString(16)) +
			this.pad(this.state.blue.toString(16))
		);
	};
	forgroundColour = () => {
		return (
			'#' +
			this.pad((255 - this.state.red).toString(16)) +
			this.pad((255 - this.state.green).toString(16)) +
			this.pad((255 - this.state.blue).toString(16))
		);
	};
	pad = (n, width = 2, z = '0') => {
		n = n + '';
		return n.length >= width
			? n
			: new Array(width - n.length + 1).join(z) + n;
	};
	sendRequest = () => {
		let { red, green, blue } = this.state;
		red = (red / (255 / 1023)) | 0;
		green = (green / (255 / 1023)) | 0;
		blue = (blue / (255 / 1023)) | 0;
		console.log('red ' + red + ' blue ' + blue + ' green ' + green);
		axios.get(
			'http://10.0.0.142/gpio?r=' + red + '&g=' + green + '&b=' + blue
		);
	};
	render() {
		return (
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'space-between',
					height: '100%',
					backgroundColor: this.backgroundColour()
				}}
			>
				<Text
					style={{
						fontSize: 40,
						fontWeight: '900',
						marginTop: '5%',
						color: this.forgroundColour()
					}}
				>
					Colour: {this.backgroundColour()}
				</Text>
				<View style={{ width: '100%', flex: 1 }}>
					<ColourSlider
						text="R"
						onValueChange={this.updateRed}
						onSlidingComplete={this.sendRequest}
						value={this.state.red}
					/>
					<ColourSlider
						text="G"
						onValueChange={this.updateGreen}
						onSlidingComplete={this.sendRequest}
						value={this.state.green}
					/>
					<ColourSlider
						text="B"
						onValueChange={this.updateBlue}
						onSlidingComplete={this.sendRequest}
						value={this.state.blue}
					/>
					<ColourSlider
						text="H"
						onValueChange={this.updateHue}
						onSlidingComplete={this.sendRequest}
						max={360}
						value={this.state.hue}
					/>
					<ColourSlider
						text="S"
						onValueChange={this.updateSaturation}
						onSlidingComplete={this.sendRequest}
						value={this.state.saturation}
					/>
					<ColourSlider
						text="L"
						onValueChange={this.updateLightness}
						onSlidingComplete={this.sendRequest}
						value={this.state.lightness}
					/>
				</View>
				<View style={{ margin: 5, width: '100%' }}>
					<Recents
						onSelect={e => this.updateAll(e)}
						onSave={this.saveFav}
						onDelete={this.deleteFav}
						favourites={this.props.favourites}
					/>
				</View>
			</View>
		);
	}
}
