import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { ArrowDownwardIcon, ArrowUpwardIcon, ChartFocusedIcon, ChartIcon, HorizontalFilterFocusedIcon, HorizontalFilterIcon, PieDisabledIcon, PieFocusedIcon, PieIcon, VerticalFilterFocusedIcon, VerticalFilterIcon } from '../../assets/icons';
import { WATCHLIST_ITEMS } from '../../constants';

const PieChartComponent: React.FC = (props: { pieInfo: object }) => {
    const { pieInfo } = props;
    const pieData = WATCHLIST_ITEMS
        .map((value: any, index: number) => ({
            value: value.amount,
            svg: {
                fill: value.color,
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

    return (
        <PieChart innerRadius={"80%"} padAngle={0} style={{ height: 200, margin: 24 }} data={pieData}>
            <View
                style={{
                    position: 'absolute',
                    width: 200,
                    height: 200,
                    justifyContent: "center"
                }}>
                <Text style={{ textAlignVertical: "center", textAlign: 'center', fontSize: 12 }}>Total invested</Text>
                <Text style={styles.itemAmount}>${pieInfo.amount} <Text style={styles.itemAmountType}>{pieInfo.amountType}</Text></Text>
                <View style={styles.itemDegree}>
                    <Image source={pieInfo.positive ? ArrowUpwardIcon : ArrowDownwardIcon} />
                    <Text style={{ color: pieInfo.positive ? "#34B78F" : "#F2827F", fontSize: 12 }}>{" "}${pieInfo.degreeAmount} ({pieInfo.degreePercentage}%)</Text>
                </View>
            </View>
        </PieChart>
    )
}

const styles = StyleSheet.create({
    itemAmount: { fontSize: 28, fontWeight: "600", flexDirection: "row", textAlignVertical: "center", textAlign: 'center' },
    itemAmountType: { fontSize: 16, fontWeight: "400", textAlignVertical: "center", textAlign: 'center' },
    itemDegree: { flexDirection: "row", alignSelf: "center", paddingVertical: 4, borderRadius: 50 },
    filtersContainer: {
        flexDirection: "row",
        marginHorizontal: 24,
        marginVertical: 12
    },
});

export default PieChartComponent;