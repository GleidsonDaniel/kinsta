import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { NavigationAction, StackActions } from "react-navigation";

export class Home extends Component {
    static navigationOptions = {
        title: 'Feed'
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Feed de fotos
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispachToProps = {

}

const HomeConnect = connect(mapStateToProps, mapDispachToProps)(Home);

export default HomeConnect;