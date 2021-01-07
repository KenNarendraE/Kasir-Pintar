/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  CheckBox,
  Alert,
  Modal,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SQLite from 'react-native-sqlite-storage';

const Drawer = createDrawerNavigator();

const Modall = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Image
                style={styles.iconpro}
                source={require('./img/roko.png')}
              />
              <Text style={styles.modalText}>Upgrade Kasir Pintar Pro!</Text>
            </View>
            <View
              style={{
                flex: 2,
                padding: 5,
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 14,
                }}>
                Beralih ke Kasir Pintar Pro, dan dapatkan fitur-fitur
                terlengkap.
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Image
                  style={styles.iconp}
                  source={require('./img/tick.png')}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: 'grey',
                  }}>
                  Bisa untuk 6 user atau lebih
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Image
                  style={styles.iconp}
                  source={require('./img/tick.png')}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: 'grey',
                  }}>
                  Struk tanpa watermark
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Image
                  style={styles.iconp}
                  source={require('./img/tick.png')}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: 'grey',
                  }}>
                  PPOB lebih murah dan beragam
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Image
                  style={styles.iconp}
                  source={require('./img/tick.png')}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: 'grey',
                  }}>
                  Manajemen hutang piutang
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Image
                  style={styles.iconp}
                  source={require('./img/tick.png')}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: 'grey',
                  }}>
                  10+ Jenis Laporan
                </Text>
              </View>
            </View>

            <View
              style={{
                width: '100%',
              }}>
              <TouchableHighlight
                style={styles.cobabutton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Coba Gratis 30 Hari</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Upgrade Pro!</Text>
      </TouchableHighlight>
      <Text style={styles.jumbo}>UPGRADE SEKARANG ! DAN DAPATKAN BONUS</Text>
    </View>
  );
};

function StackScreen({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Management"
        component={HomeScreen}
        options={{
          headerTitleStyle: {textAlign: 'center', marginRight: 60},
          // headerTitle: (props) => <LogoTitle {...props} />,
          headerLeft: () => (
            <View>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image
                  style={styles.iconm}
                  source={require('./img/list.png')}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function NotificationsScreen({}) {
  const ExecuteQuery = (sql, callback) => {
    db.transaction(
      (tx) => {
        tx.executeSql(sql, [], (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          callback(temp);
        });
      },
      (error) => {
        console.log('execute sql error :' + error.message);
      },
    );
  };

  const GetAllPelanggan = () => {
    ExecuteQuery('SELECT * FROM tblpelanggan', (e) => console.log(e));
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={GetAllPelanggan} title="Go back home" />
    </View>
  );
}

function SalesTransaction({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="New Transaction"
        component={Combine}
        options={{
          headerTitleStyle: {textAlign: 'center'},
          // headerTitle: (props) => <LogoTitle {...props} />,
          headerLeft: () => (
            <View>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image
                  style={styles.iconm}
                  source={require('./img/list.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View>
              <TouchableOpacity>
                <Image
                  style={styles.iconm}
                  source={require('./img/more.png')}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Atas() {
  const [people, setPeople] = useState([
    {src: require('./img/loupe.png'), key: '1'},
    {src: require('./img/plus.png'), key: '2'},
    {src: require('./img/barcode.png'), key: '3'},
    {src: require('./img/scan.png'), key: '4'},
    {src: require('./img/hand.png'), key: '5'},
    {name: 'All Item', key: '6'},
  ]);
  return (
    <View style={styles.navbar}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={people}
        renderItem={Render1}
      />
    </View>
  );
}

function Render1({item}) {
  return (
    <View>
      <TouchableOpacity style={styles.wrap}>
        <Text>{item.name}</Text>
        <Image source={item.src} style={styles.icon}></Image>
      </TouchableOpacity>
    </View>
  );
}

function Barang() {
  const [people] = useState([
    {
      ket: 'Rp 12,000',
      name: 'Besuki',
      src: require('./img/b.png'),
      key: '1',
    },
    {
      ket: 'Rp 14,000',
      name: 'Pandan Wangi',
      src: require('./img/p.png'),
      key: '2',
    },
  ]);
  return (
    <View>
      <FlatList
        vertical={true}
        showsHorizontalScrollIndicator={false}
        data={people}
        renderItem={RenderB}
      />
    </View>
  );
}

function RenderB({item}) {
  return (
    <View>
      <TouchableOpacity style={styles.item}>
        <Image source={item.src} style={styles.icon}></Image>
        <View>
          <Text style={styles.menum}>{item.name}</Text>
          <Text style={styles.ket}>{item.ket}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function Combine() {
  return (
    <View>
      <Atas />
      <Barang />
    </View>
  );
}

function CreditScreen({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Credit"
        component={Tcombine}
        options={{
          headerTitleStyle: {textAlign: 'center', marginRight: 60},
          // headerTitle: (props) => <LogoTitle {...props} />,
          headerLeft: () => (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Sales Transaction')}>
                <Image
                  style={styles.iconm}
                  source={require('./img/back.png')}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Tcombine({navigation}) {
  return (
    <View style={styles.tcombine}>
      <View
        style={{
          flexDirection: 'row',
          flex: 0,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Sales Transaction')}>
          <Image style={styles.iconm} source={require('./img/arrow.png')} />
        </TouchableOpacity>

        <Image style={styles.mini} source={require('./img/loupe.png')} />
        <Tinput />
        <Image style={styles.mini} source={require('./img/date.png')} />
        <Tinput2 />
      </View>
      <View style={styles.totalwrap}>
        <Totalk />
        <Cek />
        <Kasbon />
      </View>
    </View>
  );
}

const Tinput = () => {
  const [value, onChangeText] = React.useState('Nama');

  return (
    <TextInput
      style={styles.tinput}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};

const Tinput2 = () => {
  const [value, onChangeText] = React.useState('jatuh Tempo');

  return (
    <TextInput
      style={styles.tinput}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};

function Totalk() {
  return (
    <View style={styles.twrap}>
      <View style={styles.tkiri}>
        <Text>Total Kasbon</Text>
        <Text style={{color: 'red'}}>Rp 26.000</Text>
      </View>
      <View>
        <Text>Total Transaksi</Text>
        <Text style={{fontWeight: 'bold'}}>1</Text>
      </View>
    </View>
  );
}

const Cek = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Belum Lunas?</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Lunas?</Text>
      </View>
    </View>
  );
};

function Kasbon() {
  const [people] = useState([
    {
      tot: 'Rp 12,000',
      nama: 'Bababooey',
      date: 'JT 2020/13/33',
      status: 'Belum Lunas',
      key: '1',
    },
    {
      tot: 'Rp 14,000',
      nama: 'Pandan Wangi',
      date: 'JT 2020/13/33',
      status: 'Belum Lunas',
      key: '2',
    },
  ]);
  return (
    <View>
      <FlatList
        vertical={true}
        showsHorizontalScrollIndicator={false}
        data={people}
        renderItem={RenderK}
      />
    </View>
  );
}

function RenderK({item}) {
  return (
    <View>
      <TouchableOpacity style={styles.item}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <Text style={{fontWeight: 'bold'}}>{item.nama}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'red'}}>{item.tot}</Text>
            <Text style={styles.tot}>{item.status}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function ReportScreen({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Report"
        component={Rcombine}
        options={{
          headerTitleStyle: {textAlign: 'center', marginRight: 60},
          // headerTitle: (props) => <LogoTitle {...props} />,
          headerLeft: () => (
            <View>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image
                  style={styles.iconm}
                  source={require('./img/list.png')}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Rcombine() {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{backgroundColor: 'grey'}}>
        <Banner />
      </View>
      <View>
        <Report />
      </View>
    </View>
  );
}

function Banner() {
  return (
    <View>
      <Image
        style={{height: 150, width: '100%'}}
        source={require('./img/banner.jpg')}
      />
    </View>
  );
}

function Report() {
  const [people, setPeople] = useState([
    {name: 'General Report', src: require('./img/penpaper.png'), key: '1'},
    {
      name: 'All Transaction Report',
      src: require('./img/search.png'),
      key: '2',
    },
    {name: 'Back Office', src: require('./img/support.png'), key: '3'},
    {
      name: 'Sales Report Of Goods',
      src: require('./img/boxsearch.png'),
      key: '4',
    },
    {name: 'Purchase Report', src: require('./img/introlley.png'), key: '5'},
    {name: 'Capital Report', src: require('./img/hand.png'), key: '6'},
    {name: 'Pajak', src: require('./img/tax.png'), key: '7'},
  ]);
  return (
    <View>
      <FlatList
        vertical={true}
        showsHorizontalScrollIndicator={false}
        data={people}
        renderItem={Render}
      />
    </View>
  );
}

function SettingScreen({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          headerTitleStyle: {textAlign: 'center', marginRight: 60},
          // headerTitle: (props) => <LogoTitle {...props} />,
          headerLeft: () => (
            <View>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image
                  style={styles.iconm}
                  source={require('./img/list.png')}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Setting() {
  const [people, setPeople] = useState([
    {name: 'Profile', src: require('./img/user.png'), key: '1'},
    {name: 'Store', src: require('./img/shop.png'), key: '2'},
    {name: 'Database', src: require('./img/storage.png'), key: '3'},
    {name: 'E-Wallet', src: require('./img/wallet.png'), key: '4'},
    {name: 'Synchronization', src: require('./img/loading.png'), key: '5'},
    {name: 'Printer and Receipt', src: require('./img/printer.png'), key: '6'},
    {name: 'Staff Management', src: require('./img/support.png'), key: '7'},
    {name: 'Other', src: require('./img/more.png'), key: '8'},
  ]);
  return (
    <View>
      <FlatList
        vertical={true}
        showsHorizontalScrollIndicator={false}
        data={people}
        renderItem={Render}
      />
    </View>
  );
}

function Render({item}) {
  return (
    <View>
      <TouchableOpacity style={styles.item}>
        <Image
          source={{uri: 'asset:/img/' + item.src}}
          style={styles.icon}></Image>
        <Text style={styles.menum}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen() {
  const ReadQuery = (sql, callback) => {
    db.transaction(
      (tx) => {
        tx.executeSql(sql, [], (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          callback(temp);
        });
      },
      (error) => {
        console.log('execute sql error :' + error.message);
      },
      () => {
        console.log('execute sql success');
      },
    );
  };

  const [people, setPeople] = useState([
    // {name: 'Product Or Service', src: require('./img/box.png'), key: '1'},
    // {name: 'Product Category', src: require('./img/menu.png'), key: '2'},
    // {name: 'Stock Management', src: require('./img/trolly.png'), key: '3'},
    // {name: 'Customer', src: require('./img/id.png'), key: '4'},
    // {name: 'Credit', src: require('./img/cart.png'), key: '5'},
    // {name: 'Pajak', src: require('./img/tax.png'), key: '6'},
  ]);
  useEffect(() => {
    ReadQuery('SELECT * FROM tbl_management ORDER BY key', (e) => setPeople(e));
  }, []);
  return (
    <View>
      <FlatList
        vertical={true}
        showsHorizontalScrollIndicator={false}
        data={people}
        renderItem={Render}
      />
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  global.db = SQLite.openDatabase(
    {
      name: 'dbkasir',
      createFromLocation: '~/dbkasir.db',
    },
    () => {
      console.log('Database Opened');
    },
    (error) => {
      console.log('Error: ' + error.message);
    },
  );

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Management" component={HomeScreen} />
      </Stack.Navigator> */}
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackScreen} />
        <Drawer.Screen name="Notification" component={Modall} />
        <Drawer.Screen name="Sales Transaction" component={SalesTransaction} />
        <Drawer.Screen name="Credit" component={CreditScreen} />
        <Drawer.Screen name="PPOB" component={NotificationsScreen} />
        <Drawer.Screen name="Report" component={ReportScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
        <Drawer.Screen name="Refferal" component={NotificationsScreen} />
        <Drawer.Screen name="My Online Store" component={NotificationsScreen} />
        <Drawer.Screen name="Help & Support" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    margin: 'auto',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  item: {
    padding: 10,
    backgroundColor: 'white',
    fontSize: 20,
    borderWidth: 0.3,
    borderColor: '#cdd1d0',
    fontFamily: 'arial',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navbar: {
    backgroundColor: 'white',
    height: hp('10%'),
  },
  wrap: {
    padding: 5,
    fontFamily: 'arial',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('10%'),
    width: wp('16%'),
  },
  button: {
    margin: 10,
  },
  icon: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
    margin: 8,
  },
  menum: {
    marginLeft: 10,
  },
  ket: {
    marginLeft: 10,
  },
  iconm: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
    margin: 15,
  },
  tinput: {
    marginLeft: '3%',
    marginTop: '5%',
    height: '25%',
    width: '30%',
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  tcombine: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
  },
  mini: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
    marginTop: '3%',
    marginLeft: '2%',
  },
  totalwrap: {
    backgroundColor: 'white',
    flex: 4,
  },
  tkiri: {flex: 3},
  tkanan: {flex: 1, textAlign: 'right'},
  twrap: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    padding: 10,
  },
  container: {
    backgroundColor: 'white',
  },
  checkboxContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  label: {
    margin: 8,
  },
  prem: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  //Modal//
  iconpro: {
    width: 50,
    height: 60,
    margin: 15,
  },
  iconp: {
    width: 10,
    height: 15,
    resizeMode: 'contain',
    margin: 7,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '85%',
    height: '70%',
    margin: 20,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#279169',
    padding: 10,
    elevation: 2,
    borderRadius: 5,
  },
  cobabutton: {
    backgroundColor: '#279169',
    padding: 10,
    elevation: 2,
    borderRadius: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#279169',
    fontWeight: 'bold',
    fontSize: 15,
  },
  jumbo: {
    fontSize: 60,
    color: 'orange',
    marginLeft: 20,
  },
});

export default App;
