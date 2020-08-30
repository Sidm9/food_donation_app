import React, { useState } from 'react'
import { View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const items = [
    // this is the parent or 'item'
    {
        // these are the children or 'sub items'
        children: [
            {
                name: 'Dal',
                id: 10,
            },
            {
                name: 'Eggs',
                id: 11,
            },
            {
                name: 'Rice',
                id: 12,
            },
            {
                name: 'Chapati',
                id: 13,
            },
            {
                name: 'Fruits',
                id: 14,
            },
            {
                name: 'Vegetables',
                id: 15,
            },
            {
                name: 'Lentils',
                id: 16,
            },
            {
                name: 'Fish',
                id: 17,
            },
            {
                name: 'Chicken',
                id: 18,
            },
        ],
    },
];

export default function DonorScreen() {
    const [selectedItems, setselectedItems] = useState('')

    const onSelectedItemsChange = (selectedItems) => {
        setselectedItems(selectedItems)
    };

    return (
        <View>
            <SectionedMultiSelect
                items={items}
                uniqueKey="id"
                subKey="children"
                selectText="Choose some things..."
                showDropDowns={false}
                readOnlyHeadings={true}
                onSelectedItemsChange={onSelectedItemsChange}
                selectedItems={selectedItems}
            />
        </View>
    );
}
