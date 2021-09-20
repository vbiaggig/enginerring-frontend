import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { WATCHLIST_ITEMS } from '../../constants';
import { WatchlistHorizontalView, WatchlistVerticalView } from '.';

const carouselItems: any = WATCHLIST_ITEMS;

const Watchlist: React.FC = (props: { activeTitle: boolean, horizontal: boolean }) => {
    const { activeTitle = true, horizontal = false } = props;

    return (
        <View>
            {activeTitle && <Text style={styles.title}>Watchlist</Text>}
            {
                horizontal ?
                    <WatchlistHorizontalView carouselItems={carouselItems} />
                    :
                    <WatchlistVerticalView carouselItems={carouselItems} />
            }
        </View>

    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        paddingBottom: 12,
        paddingHorizontal: 24
    },
});

export default Watchlist;