import React from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit';

const Line = ({data, labels}) =>{
    const line = {
        labels: labels,
        datasets: [
          {
            data: data,
            strokeWidth: 3, // optional
          },
        ],
      };

    return (
        <View>
            <View>
            <LineChart
                data={line}
                width={Dimensions.get('window').width} // from react-native
                height={220}
                yAxisLabel={'$'}
                chartConfig={{
                    backgroundColor: '#E5E5E5',
                    backgroundGradientFrom: '#66CC99',
                    backgroundGradientTo: '#65C6BB',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
        </View> 
    );
}

export default Line;