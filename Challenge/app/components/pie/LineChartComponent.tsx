import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-svg-charts'
import { ArrowDownwardIcon, ArrowUpwardIcon } from '../../assets/icons';
import { WATCHLIST_ITEMS } from '../../constants';

const LineChartComponent: React.FC = (props: { pieInfo: object }) => {
    const { pieInfo } = props;

    const lineData = WATCHLIST_ITEMS
        .map((value: any, index: number) => (value.amount))

    return (
        <>
            <View
                style={{
                    marginTop: 24
                }}>
                <Text style={{ textAlignVertical: "center", textAlign: 'center', fontSize: 12 }}>Total invested</Text>
                <Text style={styles.itemAmount}>${pieInfo.amount} <Text style={styles.itemAmountType}>{pieInfo.amountType}</Text></Text>
                <View style={styles.itemDegree}>
                    <Image source={pieInfo.positive ? ArrowUpwardIcon : ArrowDownwardIcon} />
                    <Text style={{ color: pieInfo.positive ? "#34B78F" : "#F2827F", fontSize: 12 }}>{" "}${pieInfo.degreeAmount} ({pieInfo.degreePercentage}%)</Text>
                </View>
            </View>
            <LineChart
                style={{ height: 100, margin: 24 }}
                data={lineData}
                svg={{ stroke: "#483698", strokeWidth: 2 }}
                contentInset={{ top: 20, bottom: 20 }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    itemAmount: { fontSize: 28, fontWeight: "600", flexDirection: "row", textAlignVertical: "center", textAlign: 'center' },
    itemAmountType: { fontSize: 16, fontWeight: "400", textAlignVertical: "center", textAlign: 'center' },
    itemDegree: { flexDirection: "row", alignSelf: "center", paddingVertical: 4, borderRadius: 50 },
});

export default LineChartComponent;