import React from 'react';
import { Container, Separator, Header, Title, Accordion, ListItem, Content, Footer, Card, CardItem, FooterTab, Button, Left, Right, Body, Badge, H1, H2, H3, Item, Input, Icon} from 'native-base';
import { FlatList, StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import Globals from '../../../GlobalDefinitions'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class TeamCell extends React.Component {

    static propTypes = {
        number: PropTypes.number.isRequired,
        isBlue: PropTypes.bool.isRequired,
        scouterDescription: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
    };


    handlePress = () => {
        this.props.onPress(this.props.number);
    };

    render () {
        return (
            
            <TouchableOpacity onPress={this.handlePress}>
                <ListItem style={styles.cell}>
                    <View backgroundColor={this.props.isBlue ? Globals.colors.blue : Globals.colors.red} style={styles.ribbon}/>
                    <View width={10}/>
                    <View style={styles.scouter}>
                        <View>
                            <Text style={styles.team}>{"Team "+this.props.number}</Text>
                        </View>
                        <Text style={styles.scouter}>{this.props.scouterDescription ? "Covered by "+this.props.scouterDescription : "Open"}</Text>
                    </View>
               </ListItem>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    ribbon: {
        width: 15,
        height: 40,
    },
    team: {
      color: 'black',
      fontSize: 18,
      flex: 1,
    },
    type: {
      color: 'black',
      fontSize: 16,
      flex: 1,
    },
    scouter: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cell: {
        flexDirection: 'row'
    }
});
