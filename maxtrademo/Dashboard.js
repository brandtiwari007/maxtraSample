import axios from 'axios';
const baseUrl =
  'http://182.76.237.238/~teammaxtra/help_application/public/api/drugss';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
const windowHeight = Dimensions.get('window').height;

const DashboardData = () => {
  const [Data, setData] = useState([]);
  let res;
  const fetcData = async () => {
    res = await axios.post(`${baseUrl}`);
    console.log('res of dashboarddddddd>>>', res.data);
    return res.data;
  };
  const renderItem = ({item}) => {
    console.log('calleddddddd');
    console.log('item<<<<<', item);
    // let img = [];
    console.log('item<<in images<<<', item.images);

    // if (item.images) {
      // console.log('item.imindiiiiages>>', item.images);

      // img = item.images.map((item1, index) => {
      //   console.log('itemnjbjbbi.images>>', item1.image);
      //   // return <Image key="uniqueId1" style={{ width: '20%', height: '40%', alignSelf: 'center',borderRadius:30,borderColor:"green",borderWidth:2 }}  source={{ uri: item1.image }}></Image>
      //   return (
      //     <Image
      //       key={index}
      //       style={{
      //         marginLeft: '50%',
      //         marginTop: '-20%',
      //         width: '25%',
      //         height: '40%',
      //         alignSelf: 'center',
      //         borderRadius: 2,
      //         borderColor: 'green',
      //         borderWidth: 2,
      //       }}
      //       source={{uri: item1.image}}
      //     />
      //   );
      // });
    // }

    return (
      <View>
        <View
          style={{
            height: windowHeight * 0.2,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}>
          <Text>{`Company- ${item?.drug_company_name}`}</Text>
          <Text>{`drug name- ${item?.drug_name}`}</Text>
          <Text> {`expiry date- ${item?.expiry_date}`}</Text>
          <Text>{`mfg- ${item?.manufacturing_date}`}</Text>
          <Text>{`MRP- ${item?.price_per_piece}`}</Text>
          <Text>{`notes- ${item?.notes}`}</Text>
          <Image style={{marginLeft:'50%', marginTop:'-20%',width: '20%', height: '40%', alignSelf: 'center',borderRadius:10,borderColor:"green",borderWidth:2 }}  source={{ uri: item?.images?.image }}></Image>
          {/* {img} */}
        </View>
      </View>
    );
  };
  useEffect(() => {
    fetcData().then(res => {
      console.log('res in use effect>>>', res);
      setData(res.data);
    });
  }, []);

  return (
    <View>
      {/* <Text>hellooo</Text> */}
      {/* <Image style={{ width: '20%', height: '10%', alignSelf: 'center',borderRadius:30,borderColor:"green",borderWidth:2 }}  source={{ uri: 'http://182.76.237.238/~teammaxtra/help_application/public/uploads/1619605913.IMG_20210417_214252.jpg' }}></Image> */}
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default DashboardData;
