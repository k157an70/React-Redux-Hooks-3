import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux'
import { visibiltyFilters, setVisibleFilterAction } from '../redux';

const generateDataList = filter => {
   let list = [];
   for (let p in visibiltyFilters) list.push({ txt: p, checked: filter === p });
   return list;
}

const FilterTodoScreen = () => {
   const [data, setData] = useState([]);
   const filter = useSelector(state => state.filter);
   const disptach = useDispatch();

   useEffect(() => {
      setData(generateDataList(filter))
   }, [filter]);

   const _renderItem = ({ item }) => (
      <TouchableOpacity
         style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
         onPress={() => disptach(setVisibleFilterAction(item.txt))}
      >
         <Text style={{ fontSize: 20, paddingVertical: 10 }}>
            {item.txt.replace('_', ' ')}
         </Text>
         {item.checked && <Icon name="check" color="green" size={25} />}
      </TouchableOpacity>
   );

   const _itemSeparator = () => <View style={{ height: 0.5, backgroundColor: 'rgba(0,0,0, .5)' }} />
   return (
      <>
      <FlatList
         data={data}
         renderItem={_renderItem}
         ItemSeparatorComponent={_itemSeparator}
         keyExtractor={(item, i) => i.toString()}
      />
      <Text>{filter}</Text>
      </>
   )
}

export default FilterTodoScreen;