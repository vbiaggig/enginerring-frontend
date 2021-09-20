import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LineChart, ProgressCircle } from 'react-native-svg-charts';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { ArrowDownwardIcon, ArrowUpwardIcon } from '../../assets/icons';
import { WATCHLIST_ITEMS, WINDOWS_WIDTH } from '../../constants';

const carouselItems: object = WATCHLIST_ITEMS;

const sliderWidth: number = WINDOWS_WIDTH;

const Watchlist: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const _renderItem = (props: { item: any, index: number, isPicker: boolean }) => {
        const { item, index, } = props;
        return (
            <View style={styles.itemContainer}>
                <View style={styles.itemHeader}>
                    <Image source={item.icon} style={styles.itemIcon} />
                    <View>
                        <Text style={styles.itemNick}>{item.nick}</Text>
                        <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                </View>

                <View>
                    <LineChart
                        style={{ height: 64 }}
                        data={item.data}
                        svg={{ stroke: item.color, strokeWidth: 2 }}
                        contentInset={{ top: 20, bottom: 20 }}
                    />
                    <Text style={styles.itemAmount}>${item.amount} <Text style={styles.itemAmountType}>{item.amountType}</Text></Text>
                    <View style={styles.itemDegree}>
                        <Image source={item.positive ? ArrowUpwardIcon : ArrowDownwardIcon} />
                        <Text style={{ color: item.positive ? "#34B78F" : "#F2827F", fontSize: 12 }}>{" "}${item.degreeAmount} ({item.degreePercentage}%)</Text>
                    </View>
                </View>
                <View style={styles.itemShares}>
                    <View>
                        <ProgressCircle startAngle={item.startAngle} backgroundColor={"#E9E7FE"} style={{ width: 38, height: 38 }} progress={item.sharesPercentage / 100} progressColor={item.color}>
                            <Text
                                style={{
                                    position: 'absolute',
                                    width: 38,
                                    height: 38,
                                    textAlign: 'center',
                                    textAlignVertical: "center",
                                    fontSize: 9,
                                    fontWeight: "bold",
                                }}>{item.sharesPercentage}%</Text>
                        </ProgressCircle>
                    </View>
                    <Text style={{ fontSize: 9, fontWeight: "bold" }}>≈{item.sharesAmount} shares</Text>
                </View>
            </View>
        );
    }

    const getPagination = () => {
        return (
            <Pagination
                dotsLength={carouselItems.length}
                activeDotIndex={activeIndex}
                dotStyle={styles.pagingDotStyle}
                inactiveDotStyle={styles.pagingInactiveDotStyle}
                inactiveDotScale={1}
                inactiveDotOpacity={1}
            />
        );
    }

    return (
        <View>
            <Text style={styles.title}>Watchlist</Text>
            <Carousel
                layout={"default"}
                data={carouselItems}
                sliderWidth={sliderWidth}
                itemWidth={210}
                renderItem={_renderItem}
                onSnapToItem={index => setActiveIndex(index)}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                activeSlideAlignment={"start"}
            />
            {getPagination()}
        </View>

    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        paddingBottom: 12,
        paddingHorizontal: 24
    },
    itemHeader: { flexDirection: "row" },
    itemIcon: { width: 36, height: 36, marginRight: 8 },
    itemNick: {
        fontSize: 16,
        fontWeight: "600",
    },
    itemName: {
        color: "rgba(16, 24, 32, 0.3)",
        fontSize: 12
    },
    itemContainer: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 20,
        marginLeft: 24
    },
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

export default Watchlist;