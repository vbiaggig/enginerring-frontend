import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ChartFocusedIcon, ChartIcon, HorizontalFilterFocusedIcon, HorizontalFilterIcon, PieDisabledIcon, PieFocusedIcon, PieIcon, VerticalFilterFocusedIcon, VerticalFilterIcon } from '../../assets/icons';
import { PieChartComponent } from '../../components/pie';
import LineChartComponent from '../../components/pie/LineChartComponent';
import Watchlist from '../../components/pie/Watchlist';

const PieScreen: React.FC = (props: { route: object }) => {
    const { route } = props;
    const { pieInfo } = route.params;

    const [isHorizontalActive, setIsHorizontalActive] = useState(false)
    const [isPieActive, setIsPieActive] = useState(true)

    return (
        <ScrollView style={{ flex: 1 }}>
            <View>
                {
                    isPieActive ?
                        <PieChartComponent pieInfo={pieInfo} />
                        :
                        <LineChartComponent pieInfo={pieInfo} />
                }
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={styles.filtersContainer}>
                    <TouchableOpacity onPress={() => setIsHorizontalActive(false)} style={{ marginRight: 8 }}>
                        <Image source={isHorizontalActive ? VerticalFilterIcon : VerticalFilterFocusedIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsHorizontalActive(true)}>
                        <Image source={isHorizontalActive ? HorizontalFilterFocusedIcon : HorizontalFilterIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.filtersContainer}>
                    <TouchableOpacity onPress={() => setIsPieActive(true)} style={{ marginRight: 8 }}>
                        <Image source={isPieActive ? PieFocusedIcon : PieDisabledIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsPieActive(false)}>
                        <Image source={isPieActive ? ChartIcon : ChartFocusedIcon} />
                    </TouchableOpacity>
                </View>
            </View>


            <Watchlist activeTitle={false} horizontal={isHorizontalActive} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingVertical: 32 },
    itemAmount: { fontSize: 28, fontWeight: "600", flexDirection: "row", textAlignVertical: "center", textAlign: 'center' },
    itemAmountType: { fontSize: 16, fontWeight: "400", textAlignVertical: "center", textAlign: 'center' },
    itemDegree: { flexDirection: "row", alignSelf: "center", paddingVertical: 4, borderRadius: 50 },
    filtersContainer: {
        flexDirection: "row",
        marginHorizontal: 24,
        marginVertical: 12
    },
});

export default PieScreen;