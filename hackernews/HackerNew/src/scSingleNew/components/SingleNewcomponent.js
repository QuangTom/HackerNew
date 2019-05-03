import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

class SingleNew extends Component {
    
    
    Title = () => {

    }
    Content = () => {

    }
    render(){
        return(
        <View style={styles.container}>
          <View style= {styles.top}>
            {this.Title()}
          </View>
          <ScrollView style = {{flex:1}}>
            {this.Content()}
          </ScrollView>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      top: {
    },
});
export default SingleNew;