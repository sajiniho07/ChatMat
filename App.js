import React, {Component, Fragment} from 'react';
import socketIOClient from 'socket.io-client';
import {Text, View, StyleSheet } from 'react-native'

class App extends Component {
    constructor() {
        super();
        this.state = {
            response: false,
            endpoint: 'http://localhost:8000',
        };
    }
    componentDidMount() {
        const {endpoint} = this.state;
        const socket = socketIOClient(endpoint);
        socket.on('FromAPI', data => this.setState({response: data}));
    }

    render() {
        const {response} = this.state;
        return (
            <Fragment>
                <View style={styles.container}>
                    {
                        response ? <Text>The temperature in Shiraz is: {response} °C</Text>
                        : <Text>Loading...</Text>
                    }
                </View>
            </Fragment>
        );
    }
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
