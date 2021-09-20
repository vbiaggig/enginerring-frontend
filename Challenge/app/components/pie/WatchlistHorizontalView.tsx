import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LineChart, ProgressCircle } from 'react-native-svg-charts';

import { ArrowDownwardIcon, ArrowUpwardIcon } from '../../assets/icons';

const WatchlistHorizontalView: React.FC = (props: { carouselItems: object }) => {
    const { carouselItems } = props;
    return (
        <ScrollView>
            {carouselItems.map((item: object, index: number) => (
                <View key={index} style={styles.container}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={styles.itemHeader}>
                            <Image source={item?.icon} style={styles.itemIcon} />
                            <View>
                                <Text style={styles.itemNick}>{item?.nick}</Text>
                                <Text style={styles.itemName}>{item?.name}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <Text style={styles.itemAmount}>${item?.amount} <Text style={styles.itemAmountType}>{item?.amountType}</Text></Text>
                                <View style={styles.itemDegree}>
                                    <Image source={item?.positive ? ArrowUpwardIcon : ArrowDownwardIcon} />
                                    <Text style={{ color: item?.positive ? "#34B78F" : "#F2827F", fontSize: 12 }}>{" "}${item?.degreeAmount} ({item?.degreePercentage}%)</Text>
                                </View>
                            </View>
                            <View style={styles.itemShares}>
                                <View>
                                    <ProgressCircle startAngle={item?.startAngle} backgroundColor={"#E9E7FE"} style={{ width: 38, height: 38 }} progress={item?.sharesPercentage / 100} progressColor={item?.color}>
                                        <Text
                                            style={{
                                                position: 'absolute',
                                                width: 38,
                                                height: 38,
                                                textAlign: 'center',
                                                textAlignVertical: "center",
                                                fontSize: 9,
                                                fontWeight: "bold",
                                            }}>{item?.sharesPercentage}%</Text>
                                    </ProgressCircle>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 9, fontWeight: "bold" }}>≈{item?.sharesAmount} shares</Text>
                        <LineChart
                            style={{ height: 35 }}
                            data={item?.data}
                            svg={{ stroke: item?.color, strokeWidth: 2 }}
                            contentInset={{ top: 20, bottom: 20 }}
                        />
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    itemHeader: { flex: 1, flexDirection: "row" },
    itemIcon: { width: 36, height: 36, marginRight: 8 },
    itemNick: {
        fontSize: 16,
        fontWeight: "600",
    },
    itemName: {
        color: "rgba(16, 24, 32, 0.3)",
        fontSize: 12
    },
    container: { backgroundColor: "#fff", marginHorizontal: 24, marginVertical: 8, borderRadius: 16, padding: 16 },
    itemAmount: { fontSize: 20, fontWeight: "600", flexDirection: "row" },
    itemAmountType: { fontSize: 12, fontWeight: "400" },
    itemDegree: { flexDirection: "row", alignSelf: "flex-start", paddingVertical: 4, borderRadius: 50 },
    itemShares: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    pagingDotStyle: {
        width: 18,
        height: 4,
        borderRadius: 20,
        backgroundColor: '#6A6DCD',
    },
    pagingInactiveDotStyle: {
        backgroundColor: '#CBD3EA'
    }
});

export default WatchlistHorizontalView;