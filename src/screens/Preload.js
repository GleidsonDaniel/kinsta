import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { NavigationAction, StackActions } from "react-navigation";

import { checkLogin, changeName } from "../actions/AuthActions";

export class Preload extends Component {
    static navigationOptions = {
        title: '',
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
        }, 2000)
    }

    componentDidUpdate() {
        switch (this.props.auth.status) {
            case 0:
                this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationAction.navigate({ routerName: 'Login' })
                    ]
                }))
                break;
            case 1:
                this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationAction.navigate({ routerName: 'Home' })
                    ]
                }))
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