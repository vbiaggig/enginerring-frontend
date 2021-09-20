import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ArrowDownwardIcon, ArrowUpwardIcon } from '../../assets/icons';
import { BALANCE_ITEMS, WINDOWS_WIDTH } from '../../constants';

const carouselItems = BALANCE_ITEMS;
const sliderWidth:number = WINDOWS_WIDTH - 40;

const Balance: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const _renderItem = (props: { item: any, index: number, isPicker: boolean }) => {
        const { item, index, } = props;
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemAmount}>${item.amount} <Text style={styles.itemAmountType}>{item.amountType}</Text></Text>
                {item?.flag && (<View style={styles.itemFlag}>
                    <Image source={item.flag?.positive ? ArrowUpwardIcon : ArrowDownwardIcon} />
                    <Text style={{ color: item.flag?.positive ? "#34B78F" : "#F2827F", fontSize: 12 }}>{" "}${item.flag?.amount} ({item.flag?.percentage}%)</Text>
                    <Text style={{ fontSize: 12 }}>{" "}{item.flag?.date}</Text>
                </View>)}
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
                containerStyle={{ paddingTop: 20, paddingBottom: 4 }}
            />
        );
    }

    return (
        <View style={styles.container}>
            <Carousel
                layout={"default"}
                data={carouselItems}
                sliderWidth={sliderWidth}
                itemWidth={sliderWidth}
                renderItem={_renderItem}
                onSnapToItem={index => setActiveIndex(index)} />
            {getPagination()}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24
    },
    itemContainer: {
        paddingTop: 30
    },
    itemTitle: { color: "#fff", fontSize: 16 },
    itemAmount: { fontSize: 36, fontWeight: "600", flexDirection: "row", color: "#fff", paddingVertical: 14 },
    itemAmountType: { fontSize: 16, fontWeight: "400", color: "#fff" },
    itemFlag: { flexDirection: "row", alignSelf: "flex-start", backgroundColor: "#E9E7FE", paddingVertical: 4, paddingHorizontal: 14, borderRadius: 50 },
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

export default Balance;