import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { ArrowDownwardIcon, ArrowUpwardIcon } from '../../assets/icons';
import { WINDOWS_WIDTH, YOURPIES_ITEMS } from '../../constants';

const carouselItems: object = YOURPIES_ITEMS;
const sliderWidth: number = WINDOWS_WIDTH;

const YourPies: React.FC = (props: { navigation: any }) => {
    const { navigation } = props;
    const [activeIndex, setActiveIndex] = useState(0);

    const _renderItem = (props: { item: any, index: number, isPicker: boolean }) => {
        const { item, index, } = props;
        const handleOnPress = async () => {
            navigation.navigate('PieInfo', { pieInfo: item, })
        }

        return (
            <TouchableOpacity onPress={handleOnPress}>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
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
                    <Text style={{ fontSize: 12, color: "#FF63AF" }}>{item.stock} stock{item.stock > 1 && "s"}</Text>
                </View>
            </TouchableOpacity>

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
            <Text style={styles.title}>Your Pies</Text>
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
        color: "#fff",
        fontSize: 20,
        paddingBottom: 12,
        paddingHorizontal: 24
    },
    itemContainer: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 20,
        marginLeft: 24
    },
    itemTitle: { fontSize: 14 },
    itemAmount: { fontSize: 20, fontWeight: "600", flexDirection: "row" },
    itemAmountType: { fontSize: 12, fontWeight: "400" },
    itemDegree: { flexDirection: "row", alignSelf: "flex-start", paddingVertical: 4, borderRadius: 50 },
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

export default YourPies;