import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { NavigationActions, StackActions } from "react-navigation";

import { checkLogin, changeName } from "../actions/AuthActions";

export class Preload extends Component {
    static navigationOptions = {
        title: 'Preload',
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.checkLogin()
        }, 500)
    }

    resetTo(route) {
        const actionToDispatch = StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: route })],
        });
        this.props.navigation.dispatch(actionToDispatch);
    }

    componentDidUpdate() {
        switch (this.props.auth.status) {
            case 0:
                this.resetTo("Login")
                break;
            case 1:
                this.resetTo("Home")
                break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    {this.props.auth.status}
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
        auth: state.auth
    };
};

const mapDispachToProps = {
    checkLogin,
    changeName
}

const PreloadConnect = connect(mapStateToProps, mapDispachToProps)(Preload);

export default PreloadConnect;