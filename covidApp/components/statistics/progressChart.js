import React from "react";
import { Dimensions } from "react-native";
import { ProgressChart } from 'react-native-chart-kit';

const Probability = ({value}) =>{

    const data = {
        data: [value]
    };

    const config = {
        backgroundColor: '#fff',
        backgroundGradientFrom: '#1BA39C',
        backgroundGradientTo: '#049372',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
    };

    return (
            <ProgressChart
                data={data}
                width={Dimensions.get('window').width-1}
                height={150}
                strokeWidth={16}
                radius={64}
                chartConfig={config}
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
                hideLegend={false}
            />
    );
}

export default Probability;
