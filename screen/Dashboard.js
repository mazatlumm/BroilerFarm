import React, {useRef, useState, useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    PermissionsAndroid,
    Button,
    FlatList,
    TextInput,
    AppState
} from 'react-native'
import wifi from 'react-native-android-wifi';
import WifiManager from "react-native-wifi-reborn";
import AndroidOpenSettings from 'react-native-android-open-settings'
import Modal from "react-native-modal";
import styles from './style/StyleDashboard'
import {Icon} from 'react-native-elements'
import moment from 'moment';
import DatePicker from 'react-native-date-picker'

PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
        title: 'Location Access Precission',
        message: 'We would like to use your location',
        buttonPositive: 'Okay'
    },
    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    {
        title: 'Location Access Permission',
        message: 'We would like to use your location',
        buttonPositive: 'Okay'
    },
    PermissionsAndroid.PERMISSIONS.CHANGE_WIFI_STATE,
    {
        title: 'Change WiFi State',
        message: 'We would like to Change your WiFi State',
        buttonPositive: 'Okay'
    },
    PermissionsAndroid.PERMISSIONS.ACCESS_WIFI_STATE,
    {
        title: 'Change WiFi Access',
        message: 'We would like to Change your WiFi Access',
        buttonPositive: 'Okay'
    },
    PermissionsAndroid.PERMISSIONS.CHANGE_NETWORK_STATE,
    {
        title: 'Change Network State',
        message: 'We would like to Change your Network State',
        buttonPositive: 'Okay'
    },
    PermissionsAndroid.PERMISSIONS.ACCESS_NETWORK_STATE,
    {
        title: 'Change Access Network State',
        message: 'We would like to Change your Access Network State',
        buttonPositive: 'Okay'
    },
);

const Dashboard = () => {
    const [url, seturl] = useState('http://192.168.2.1/');
    const [Render, setRender] = useState(false);
    const [currentMonth, setCurrentMonth] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [currentHour, setCurrentHour] = useState('');
    const [currentMinute, setCurrentMinute] = useState('');
    const [DaftarDataWiFi, setDaftarDataWiFi] = useState('');
    const [CurrentSSID, setCurrentSSID] = useState('');
    const [NowSSID, setNowSSID] = useState('Not Connected');
    const [PilihSSID, setPilihSSID] = useState('');
    const [StatusWiFiSetting, setStatusWiFiSetting] = useState('');
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);
    const [isModalVisible, setModalVisible] = useState(false);
    const [ModalPeriodeWindow, setModalPeriodeWindow] = useState(false);
    const [InputPeriode, setInputPeriode] = useState(0);
    const [ModalChickInWindow, setModalChickInWindow] = useState(false);
    const [InputChickIn, setInputChickIn] = useState(0);
    const [DateChickIn, setDateChickIn] = useState(new Date());
    const [TanggalChickIn, setTanggalChickIn] = useState('');
    const [Temp, setTemp] = useState(0);
    const [Hum, setHum] = useState(0);
    const [UmurChicken, setUmurChicken] = useState(0);
    const [StatusFan1, setStatusFan1] = useState(false);
    const [TimerON_Fan1, setTimerON_Fan1] = useState(0);
    const [TimerOFF_Fan1, setTimerOFF_Fan1] = useState(0);
    const [ModalFan1Window, setModalFan1Window] = useState(false);
    const [ModalFan2Window, setModalFan2Window] = useState(false);
    const [ModalFan3Window, setModalFan3Window] = useState(false);
    const [ModalFan4Window, setModalFan4Window] = useState(false);
    const [ModalFan5Window, setModalFan5Window] = useState(false);
    const [ModalFan6Window, setModalFan6Window] = useState(false);
    const [ModalFan7Window, setModalFan7Window] = useState(false);
    const [ModalPompaWindow, setModalPompaWindow] = useState(false);
    const [ModalGas1Window, setModalGas1Window] = useState(false);
    const [ModalGas2Window, setModalGas2Window] = useState(false);
    const [ModalGas3Window, setModalGas3Window] = useState(false);
    const [ModalGas4Window, setModalGas4Window] = useState(false);
    const [ModalGas5Window, setModalGas5Window] = useState(false);
    const [MaxTempFan2, setMaxTempFan2] = useState(0);
    const [MinTempFan2, setMinTempFan2] = useState(0);
    const [StatusFan2, setStatusFan2] = useState(false);
    const [MaxTempFan3, setMaxTempFan3] = useState(0);
    const [MinTempFan3, setMinTempFan3] = useState(0);
    const [StatusFan3, setStatusFan3] = useState(false);
    const [MaxTempFan4, setMaxTempFan4] = useState(0);
    const [MinTempFan4, setMinTempFan4] = useState(0);
    const [StatusFan4, setStatusFan4] = useState(false);
    const [MaxTempFan5, setMaxTempFan5] = useState(0);
    const [MinTempFan5, setMinTempFan5] = useState(0);
    const [StatusFan5, setStatusFan5] = useState(false);
    const [MaxTempFan6, setMaxTempFan6] = useState(0);
    const [MinTempFan6, setMinTempFan6] = useState(0);
    const [StatusFan6, setStatusFan6] = useState(false);
    const [MaxTempFan7, setMaxTempFan7] = useState(0);
    const [MinTempFan7, setMinTempFan7] = useState(0);
    const [StatusFan7, setStatusFan7] = useState(false);
    const [MaxTempPompa, setMaxTempPompa] = useState(0);
    const [MinTempPompa, setMinTempPompa] = useState(0);
    const [StatusPompa, setStatusPompa] = useState(false);
    const [StandardCO2, setStandardCO2] = useState(0);
    const [StandardNH3, setStandardNH3] = useState(0);
    const [StandardMetana, setStandardMetana] = useState(0);
    const [StandardAsap, setStandardAsap] = useState(0);
    const [StandardFlame, setStandardFlame] = useState(0);
    const [ValGasCO2, setValGasCO2] = useState(0);
    const [ValGasNH3, setValGasNH3] = useState(0);
    const [ValGasMetana, setValGasMetana] = useState(0);
    const [ValGasAsap, setValGasAsap] = useState(0);
    const [ValGasFlame, setValGasFlame] = useState(0);
    const [MaxLimitCO2, setMaxLimitCO2] = useState(0);
    const [MaxLimitNH3, setMaxLimitNH3] = useState(0);
    const [MaxLimitMetana, setMaxLimitMetana] = useState(0);
    const [MaxLimitAsap, setMaxLimitAsap] = useState(0);
    const [MaxLimitFlame, setMaxLimitFlame] = useState(0);
    const [MinLimitCO2, setMinLimitCO2] = useState(0);
    const [MinLimitNH3, setMinLimitNH3] = useState(0);
    const [MinLimitMetana, setMinLimitMetana] = useState(0);
    const [MinLimitAsap, setMinLimitAsap] = useState(0);
    const [MinLimitFlame, setMinLimitFlame] = useState(0);
    

    useEffect(() => {
        getDataUtama();
        var month = moment()
            .utcOffset('+07:00')
            .format('MMM');
        var date = moment()
            .utcOffset('+07:00')
            .format('D');
        var hour = moment()
            .utcOffset('+07:00')
            .format('H');
        var minute = moment()
            .utcOffset('+07:00')
            .format('mm');
        setCurrentMonth(month);
        setCurrentDate(date);
        setCurrentHour(hour);
        setCurrentMinute(minute);

        const subscription = AppState.addEventListener("change", nextAppState => {
            if (appState.current.match(/inactive|background/) && nextAppState === "active") {
                // console.log("App has come to the foreground!");
            }

            appState.current = nextAppState;
            setAppStateVisible(appState.current);
            // console.log("AppState", appState.current);
            GetSSID();
            DaftarWifi();
            getDataUtama();
        });

        setTimeout(() => {
            console.log('Get Data Utama');
            setRender(!Render);
        }, 3000);

        return() => {
            subscription.remove();
        };
    }, [Render]);

    const DaftarWifi = () => {
        wifi.reScanAndLoadWifiList((wifiStringList) => {
            var wifiArray = JSON.parse(wifiStringList);
            // console.log(wifiArray);
            setDaftarDataWiFi(wifiArray);
        }, (error) => {
            console.log(error);
        });
    }

    const GetSSID = () => {
        wifi.getSSID((ssid) => {
            // console.log(ssid);
            if (ssid == "<unknown ssid>") {
                setCurrentSSID('Tidak Terhubung ke Jaringan WiFi')
                setNowSSID('Not Connected');
            } else {
                setCurrentSSID('Terhubung ke Jaringan WiFi "' + ssid + '"')
                setNowSSID(ssid);
            }
        });
        wifi.isEnabled((isEnabled) => {
            if (isEnabled) {
                // console.log("wifi service enabled");
                setStatusWiFiSetting(true)
            } else {
                // console.log("wifi service is disabled");
                setStatusWiFiSetting(false)
            }
        });
    }

    const ModalWiFi = () => {
        setModalVisible(!isModalVisible);
        DaftarWifi();
        GetSSID();
    };

    const getDataUtama = async () => {
        try {
            const response = await fetch(url + 'getData');
            const json = await response.json();
            console.log(response);
            console.log(json);
            if(!ModalPeriodeWindow){
                setInputPeriode(json.periode);
            }
            var TanggalChickin = json.chick_in.tanggal;
            var BulanChickinGo = json.chick_in.bulan;
            var TahunChickin = json.chick_in.tahun;
            var TanggalCekChickin = moment(TanggalChickin + '-' + BulanChickinGo + '-' + TahunChickin, 'D-M-Y');
            setTanggalChickIn(moment(TanggalCekChickin).format('D MMM Y'));
            if(json.temp_hum.suhu != null){
                setTemp(json.temp_hum.suhu);
            }
            if(json.temp_hum.kelembaban != null){
                setHum(json.temp_hum.kelembaban);
            }

            var msDiff = new Date().getTime() - new Date(TanggalCekChickin).getTime();
            var UmurChick = Math.floor(msDiff / (1000 * 60 * 60 * 24));
            console.log(UmurChick);
            setUmurChicken(UmurChick);

            if(json.fan1.status == 1){
                setStatusFan1(true)
            }else{
                setStatusFan1(false)
            }
            if(json.fan2.status == 1){
                setStatusFan2(true)
            }else{
                setStatusFan2(false)
            }
            if(json.fan3.status == 1){
                setStatusFan3(true)
            }else{
                setStatusFan3(false)
            }
            if(json.fan4.status == 1){
                setStatusFan4(true)
            }else{
                setStatusFan4(false)
            }
            if(json.fan5.status == 1){
                setStatusFan5(true)
            }else{
                setStatusFan5(false)
            }
            if(json.fan6.status == 1){
                setStatusFan6(true)
            }else{
                setStatusFan6(false)
            }
            if(json.fan7.status == 1){
                setStatusFan7(true)
            }else{
                setStatusFan7(false)
            }
            if(json.pompa.status == 1){
                setStatusPompa(true)
            }else{
                setStatusPompa(false)
            }

            if(!ModalFan1Window){
                setTimerON_Fan1(json.fan1.durasi_on);
                setTimerOFF_Fan1(json.fan1.durasi_off);
            }

            if(!ModalFan2Window){
                setMaxTempFan2(json.fan2.max_temp);
                setMinTempFan2(json.fan2.min_temp);
            }

            if(!ModalFan3Window){
                setMaxTempFan3(json.fan3.max_temp);
                setMinTempFan3(json.fan3.min_temp);
            }

            if(!ModalFan4Window){
                setMaxTempFan4(json.fan4.max_temp);
                setMinTempFan4(json.fan4.min_temp);
            }

            if(!ModalFan5Window){
                setMaxTempFan5(json.fan5.max_temp);
                setMinTempFan5(json.fan5.min_temp);
            }

            if(!ModalFan6Window){
                setMaxTempFan6(json.fan6.max_temp);
                setMinTempFan6(json.fan6.min_temp);
            }

            if(!ModalFan7Window){
                setMaxTempFan7(json.fan7.max_temp);
                setMinTempFan7(json.fan7.min_temp);
            }

            if(!ModalPompaWindow){
                setMaxTempPompa(json.pompa.max_temp);
                setMinTempPompa(json.pompa.min_temp);
            }

            if(!ModalGas1Window){
                setStandardCO2(json.co2.standard);
                setValGasCO2(json.gas_read.co2);
                setMaxLimitCO2(json.co2.max_limit);
                setMinLimitCO2(json.co2.min_limit);
            }

            if(!ModalGas2Window){
                setStandardNH3(json.nh3.standard);
                setValGasNH3(json.gas_read.nh3);
                setMaxLimitNH3(json.nh3.max_limit);
                setMinLimitNH3(json.nh3.min_limit);
            }

            if(!ModalGas3Window){
                setStandardMetana(json.metana.standard);
                setValGasMetana(json.gas_read.metana);
                setMaxLimitMetana(json.metana.max_limit);
                setMinLimitMetana(json.metana.min_limit);
            }

            if(!ModalGas4Window){
                setStandardAsap(json.asap.standard);
                setValGasAsap(json.gas_read.asap);
                setMaxLimitAsap(json.asap.max_limit);
                setMinLimitAsap(json.asap.min_limit);
            }

            if(!ModalGas5Window){
                setStandardFlame(json.flame.standard);
                setValGasFlame(json.gas_read.flame);
                setMaxLimitFlame(json.flame.max_limit);
                setMinLimitFlame(json.flame.min_limit);
            }

        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch')
        }
    }

    const setPeriode = async (periode) => {
        try {
            const response = await fetch(url + 'setPeriode?periode=' + periode);
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch');
            setTimeout(() => {
                getDataUtama();
                setModalPeriodeWindow(!ModalPeriodeWindow);
            }, 1000);
        }
    }
    
    const UbahTanggalChickIn = async (tanggalChickIn) => {
        var TanggalChickin = moment(tanggalChickIn).format('D');
        var BulanChickin = moment(tanggalChickIn).format('M');
        var BulanChickinGo = moment(tanggalChickIn).format('MMM');
        var TahunChickin = moment(tanggalChickIn).format('Y');
        console.log(TanggalChickin)
        console.log(BulanChickin)
        console.log(TahunChickin)
        setTanggalChickIn(TanggalChickin + ' ' + BulanChickinGo + ' ' + TahunChickin);
        try {
            const response = await fetch(url + 'setChickin?tanggal='+TanggalChickin+'&bulan='+BulanChickin+'&tahun='+TahunChickin);
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch');
            setTimeout(() => {
                getDataUtama();
                setModalChickInWindow(!ModalChickInWindow);
            }, 1000);
        }
    }
    
    const setFan1 = async (on, off) => {
        
        try {
            const response = await fetch(url + 'setFan1?timer_on='+on+'&timer_off='+off);
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch');
            setTimeout(() => {
                getDataUtama();
                setModalFan1Window(!ModalFan1Window);
            }, 1000);
        }
    }
    
    const setFan2 = async (max_temp, min_temp) => {
        
        try {
            const response = await fetch(url + 'setFan2?max_temp='+max_temp+'&min_temp='+min_temp);
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch');
            setTimeout(() => {
                getDataUtama();
                setModalFan2Window(!ModalFan2Window);
            }, 1000);
        }
    }
    
    const setFan3 = async (max_temp, min_temp) => {
        
        try {
            const response = await fetch(url + 'setFan3?max_temp='+max_temp+'&min_temp='+min_temp);
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch');
            setTimeout(() => {
                getDataUtama();
                setModalFan3Window(!ModalFan3Window);
            }, 1000);
        }
    }

    const setFan4 = async (max_temp, min_temp) => {
        
        try {
            const response = await fetch(url + 'setFan4?max_temp='+max_temp+'&min_temp='+min_temp);
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch');
            setTimeout(() => {
                getDataUtama();
                setModalFan4Window(!ModalFan4Window);
            }, 1000);
        }
    }

    const setFan5 = async (max_temp, min_temp) => {
        
        try {
            const response = await fetch(url + 'setFan5?max_temp='+max_temp+'&min_temp='+min_temp);
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch');
            setTimeout(() => {
                getDataUtama();
                setModalFan5Window(!ModalFan5Window);
            }, 1000);
        }
    }

    const setFan6 = async (max_temp, min_temp) => {
        
        try {
            const response = await fetch(url + 'setFan6?max_temp='+max_temp+'&min_temp='+min_temp);
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch');
            setTimeout(() => {
                getDataUtama();
                setModalFan6Window(!ModalFan6Window);
            }, 1000);
        }
    }

    const setFan7 = async (max_temp, min_temp) => {
        
        try {
            const response = await fetch(url + 'setFan7?max_temp='+max_temp+'&min_temp='+min_temp);
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch');
            setTimeout(() => {
                getDataUtama();
                setModalFan7Window(!ModalFan7Window);
            }, 1000);
        }
    }
    
    const setPompa = async (max_temp, min_temp) => {
        
        try {
            const response = await fetch(url + 'setPompa?max_temp='+max_temp+'&min_temp='+min_temp);
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch');
            setTimeout(() => {
                getDataUtama();
                setModalPompaWindow(!ModalPompaWindow);
            }, 1000);
        }
    }

    const setCO2 = async (standard, max_limit, min_limit) => {
        
        try {
            const response = await fetch(url + 'setCO2?standard='+standard+'&max_limit='+max_limit+'&min_limit='+min_limit);
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch');
            setTimeout(() => {
                getDataUtama();
                setModalGas1Window(!ModalGas1Window);
            }, 1000);
        }
    }
    
    const setNH3 = async (standard, max_limit, min_limit) => {
        
        try {
            const response = await fetch(url + 'setNH3?standard='+standard+'&max_limit='+max_limit+'&min_limit='+min_limit);
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch');
            setTimeout(() => {
                getDataUtama();
                setModalGas2Window(!ModalGas2Window);
            }, 1000);
        }
    }
    
    const setMetana = async (standard, max_limit, min_limit) => {
        
        try {
            const response = await fetch(url + 'setMetana?standard='+standard+'&max_limit='+max_limit+'&min_limit='+min_limit);
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch');
            setTimeout(() => {
                getDataUtama();
                setModalGas3Window(!ModalGas3Window);
            }, 1000);
        }
    }
    
    const setAsap = async (standard, max_limit, min_limit) => {
        
        try {
            const response = await fetch(url + 'setAsap?standard='+standard+'&max_limit='+max_limit+'&min_limit='+min_limit);
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch');
            setTimeout(() => {
                getDataUtama();
                setModalGas4Window(!ModalGas4Window);
            }, 1000);
        }
    }
    
    const setFlame = async (standard, max_limit, min_limit) => {
        
        try {
            const response = await fetch(url + 'setFlame?standard='+standard+'&max_limit='+max_limit+'&min_limit='+min_limit);
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('selesai fetch');
            setTimeout(() => {
                getDataUtama();
                setModalGas5Window(!ModalGas5Window);
            }, 1000);
        }
    }

    const HubungkanWiFi = async (ssid) => {
        AndroidOpenSettings.wifiSettings()
    }

    const renderItem = ({item}) => (<ListWiFi NamaWiFi={item.SSID}/>);

    const ListWiFi = ({NamaWiFi}) => (
        <TouchableOpacity
            style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: '#00ABF0',
                marginBottom: 5,
                borderRadius: 10
            }}
            onPress={() => setPilihSSID(NamaWiFi)}>
            <Text style={{
                    color: 'white'
                }}>{NamaWiFi}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.Container}>
            {/* Modal WiFi */}
            <Modal
                isVisible={isModalVisible}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => ModalWiFi()}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>WiFi</Text>
                    </View>
                    <FlatList
                        data={DaftarDataWiFi}
                        renderItem={renderItem}
                        keyExtractor={item => item.BSSID}
                        style={{
                            paddingHorizontal: 20
                        }}/>
                    <View
                        style={{
                            marginLeft: 22,
                            marginVertical: 10
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'normal',
                                fontSize: 12
                            }}>Status : {CurrentSSID}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => HubungkanWiFi(NowSSID)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Hubungkan WiFi</Text>
                    </TouchableOpacity>

                </View>
            </Modal>
            {/* Modal Periode */}
            <Modal
                isVisible={ModalPeriodeWindow}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => setModalPeriodeWindow(!ModalPeriodeWindow)}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Setting Periode</Text>
                    </View>
                    <View style={styles.TextInput}>
                        <TextInput
                            placeholder='Masukkan Periode'
                            keyboardType='numeric'
                            onChangeText={InputPeriode => setInputPeriode(InputPeriode)}
                            defaultValue={InputPeriode.toString()}/>
                    </View>
                    <TouchableOpacity
                        onPress={() => setPeriode(InputPeriode)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Simpan Data</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Modal Chickin */}
            <Modal
                isVisible={ModalChickInWindow}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => setModalChickInWindow(!ModalChickInWindow)}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Chick In</Text>
                    </View>
                    <View style={{ alignItems:'center'}}>
                        <DatePicker
                            date={DateChickIn}
                            onDateChange = {DateChickIn => setDateChickIn(DateChickIn)}
                            textColor='white'
                            mode='date'/>
                    </View>
                    <TouchableOpacity
                        onPress={() => UbahTanggalChickIn(DateChickIn)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Simpan Tanggal</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Modal Fan 1 */}
            <Modal
                isVisible={ModalFan1Window}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => setModalFan1Window(!ModalFan1Window)}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Setting Kipas 1</Text>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Durasi ON</Text>
                        <TextInput
                            placeholder='Durasi ON'
                            keyboardType='numeric'
                            onChangeText={TimerON_Fan1 => setTimerON_Fan1(TimerON_Fan1)}
                            defaultValue={TimerON_Fan1.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Durasi OFF</Text>
                        <TextInput
                            placeholder='Durasi OFF'
                            keyboardType='numeric'
                            onChangeText={TimerOFF_Fan1 => setTimerOFF_Fan1(TimerOFF_Fan1)}
                            defaultValue={TimerOFF_Fan1.toString()}/>
                    </View>
                    <TouchableOpacity
                        onPress={() => setFan1(TimerON_Fan1, TimerOFF_Fan1)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Simpan Pengaturan</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Modal Fan 2 */}
            <Modal
                isVisible={ModalFan2Window}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => setModalFan2Window(!ModalFan2Window)}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Setting Kipas 2</Text>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Suhu Ketika (ON &deg;C)</Text>
                        <TextInput
                            placeholder='Maximum Temperature'
                            keyboardType='numeric'
                            onChangeText={MaxTempFan2 => setMaxTempFan2(MaxTempFan2)}
                            defaultValue={MaxTempFan2.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Suhu Ketika (OFF &deg;C)</Text>
                        <TextInput
                            placeholder='Durasi OFF'
                            keyboardType='numeric'
                            onChangeText={MinTempFan2 => setMinTempFan2(MinTempFan2)}
                            defaultValue={MinTempFan2.toString()}/>
                    </View>
                    <TouchableOpacity
                        onPress={() => setFan2(MaxTempFan2, MinTempFan2)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Simpan Pengaturan</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Modal Fan 3 */}
            <Modal
                isVisible={ModalFan3Window}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => setModalFan3Window(!ModalFan3Window)}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Setting Kipas 3</Text>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Suhu Ketika (ON &deg;C)</Text>
                        <TextInput
                            placeholder='Maximum Temperature'
                            keyboardType='numeric'
                            onChangeText={MaxTempFan3 => setMaxTempFan3(MaxTempFan3)}
                            defaultValue={MaxTempFan3.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Suhu Ketika (OFF &deg;C)</Text>
                        <TextInput
                            placeholder='Durasi OFF'
                            keyboardType='numeric'
                            onChangeText={MinTempFan3 => setMinTempFan3(MinTempFan3)}
                            defaultValue={MinTempFan3.toString()}/>
                    </View>
                    <TouchableOpacity
                        onPress={() => setFan3(MaxTempFan3, MinTempFan3)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Simpan Pengaturan</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Modal Fan 4 */}
            <Modal
                isVisible={ModalFan4Window}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => setModalFan4Window(!ModalFan4Window)}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Setting Kipas 4</Text>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Suhu Ketika (ON &deg;C)</Text>
                        <TextInput
                            placeholder='Maximum Temperature'
                            keyboardType='numeric'
                            onChangeText={MaxTempFan4 => setMaxTempFan4(MaxTempFan4)}
                            defaultValue={MaxTempFan4.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Suhu Ketika (OFF &deg;C)</Text>
                        <TextInput
                            placeholder='Durasi OFF'
                            keyboardType='numeric'
                            onChangeText={MinTempFan4 => setMinTempFan4(MinTempFan4)}
                            defaultValue={MinTempFan4.toString()}/>
                    </View>
                    <TouchableOpacity
                        onPress={() => setFan4(MaxTempFan4, MinTempFan4)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Simpan Pengaturan</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Modal Fan 5 */}
            <Modal
                isVisible={ModalFan5Window}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => setModalFan5Window(!ModalFan5Window)}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Setting Kipas 5</Text>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Suhu Ketika (ON &deg;C)</Text>
                        <TextInput
                            placeholder='Maximum Temperature'
                            keyboardType='numeric'
                            onChangeText={MaxTempFan5 => setMaxTempFan5(MaxTempFan5)}
                            defaultValue={MaxTempFan5.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Suhu Ketika (OFF &deg;C)</Text>
                        <TextInput
                            placeholder='Durasi OFF'
                            keyboardType='numeric'
                            onChangeText={MinTempFan5 => setMinTempFan5(MinTempFan5)}
                            defaultValue={MinTempFan5.toString()}/>
                    </View>
                    <TouchableOpacity
                        onPress={() => setFan5(MaxTempFan5, MinTempFan5)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Simpan Pengaturan</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Modal Fan 6 */}
            <Modal
                isVisible={ModalFan6Window}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => setModalFan6Window(!ModalFan6Window)}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Setting Kipas 6</Text>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Suhu Ketika (ON &deg;C)</Text>
                        <TextInput
                            placeholder='Maximum Temperature'
                            keyboardType='numeric'
                            onChangeText={MaxTempFan6 => setMaxTempFan6(MaxTempFan6)}
                            defaultValue={MaxTempFan6.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Suhu Ketika (OFF &deg;C)</Text>
                        <TextInput
                            placeholder='Durasi OFF'
                            keyboardType='numeric'
                            onChangeText={MinTempFan6 => setMinTempFan6(MinTempFan6)}
                            defaultValue={MinTempFan6.toString()}/>
                    </View>
                    <TouchableOpacity
                        onPress={() => setFan6(MaxTempFan6, MinTempFan6)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Simpan Pengaturan</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Modal Fan 7 */}
            <Modal
                isVisible={ModalFan7Window}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => setModalFan7Window(!ModalFan7Window)}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Setting Kipas 7</Text>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Suhu Ketika (ON &deg;C)</Text>
                        <TextInput
                            placeholder='Maximum Temperature'
                            keyboardType='numeric'
                            onChangeText={MaxTempFan7 => setMaxTempFan7(MaxTempFan7)}
                            defaultValue={MaxTempFan7.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Suhu Ketika (OFF &deg;C)</Text>
                        <TextInput
                            placeholder='Durasi OFF'
                            keyboardType='numeric'
                            onChangeText={MinTempFan7 => setMinTempFan7(MinTempFan7)}
                            defaultValue={MinTempFan7.toString()}/>
                    </View>
                    <TouchableOpacity
                        onPress={() => setFan7(MaxTempFan7, MinTempFan7)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Simpan Pengaturan</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Modal Pompa */}
            <Modal
                isVisible={ModalPompaWindow}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => setModalPompaWindow(!ModalPompaWindow)}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Setting Pompa Air</Text>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Suhu Ketika (ON &deg;C)</Text>
                        <TextInput
                            placeholder='Maximum Temperature'
                            keyboardType='numeric'
                            onChangeText={MaxTempPompa => setMaxTempPompa(MaxTempPompa)}
                            defaultValue={MaxTempPompa.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Suhu Ketika (OFF &deg;C)</Text>
                        <TextInput
                            placeholder='Durasi OFF'
                            keyboardType='numeric'
                            onChangeText={MinTempPompa => setMinTempPompa(MinTempPompa)}
                            defaultValue={MinTempPompa.toString()}/>
                    </View>
                    <TouchableOpacity
                        onPress={() => setPompa(MaxTempPompa, MinTempPompa)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Simpan Pengaturan</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Modal CO2 */}
            <Modal
                isVisible={ModalGas1Window}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => setModalGas1Window(!ModalGas1Window)}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Setting Gas CO2</Text>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Standard (ppm)</Text>
                        <TextInput
                            placeholder='Standard'
                            keyboardType='numeric'
                            onChangeText={StandardCO2 => setStandardCO2(StandardCO2)}
                            defaultValue={StandardCO2.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Mulai Hidup (ppm)</Text>
                        <TextInput
                            placeholder='Max Limit'
                            keyboardType='numeric'
                            onChangeText={MaxLimitCO2 => setMaxLimitCO2(MaxLimitCO2)}
                            defaultValue={MaxLimitCO2.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Mati (ppm)</Text>
                        <TextInput
                            placeholder='Min Limit'
                            keyboardType='numeric'
                            onChangeText={MinLimitCO2 => setMinLimitCO2(MinLimitCO2)}
                            defaultValue={MinLimitCO2.toString()}/>
                    </View>
                    
                    <TouchableOpacity
                        onPress={() => setCO2(StandardCO2, MaxLimitCO2, MinLimitCO2)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Simpan Pengaturan</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Modal NH3 */}
            <Modal
                isVisible={ModalGas2Window}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => setModalGas2Window(!ModalGas2Window)}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Setting Gas NH3</Text>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Standard (ppm)</Text>
                        <TextInput
                            placeholder='Standard'
                            keyboardType='numeric'
                            onChangeText={StandardNH3 => setStandardNH3(StandardNH3)}
                            defaultValue={StandardNH3.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Mulai Hidup (ppm)</Text>
                        <TextInput
                            placeholder='Max Limit'
                            keyboardType='numeric'
                            onChangeText={MaxLimitNH3 => setMaxLimitNH3(MaxLimitNH3)}
                            defaultValue={MaxLimitNH3.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Mati (ppm)</Text>
                        <TextInput
                            placeholder='Min Limit'
                            keyboardType='numeric'
                            onChangeText={MinLimitNH3 => setMinLimitNH3(MinLimitNH3)}
                            defaultValue={MinLimitNH3.toString()}/>
                    </View>
                    
                    <TouchableOpacity
                        onPress={() => setNH3(StandardNH3, MaxLimitNH3, MinLimitNH3)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Simpan Pengaturan</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Modal Metana */}
            <Modal
                isVisible={ModalGas3Window}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => setModalGas3Window(!ModalGas3Window)}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Setting Gas Metana</Text>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Standard (ppm)</Text>
                        <TextInput
                            placeholder='Standard'
                            keyboardType='numeric'
                            onChangeText={StandardMetana => setStandardMetana(StandardMetana)}
                            defaultValue={StandardMetana.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Mulai Hidup (ppm)</Text>
                        <TextInput
                            placeholder='Max Limit'
                            keyboardType='numeric'
                            onChangeText={MaxLimitMetana => setMaxLimitMetana(MaxLimitMetana)}
                            defaultValue={MaxLimitMetana.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Mati (ppm)</Text>
                        <TextInput
                            placeholder='Min Limit'
                            keyboardType='numeric'
                            onChangeText={MinLimitMetana => setMinLimitMetana(MinLimitMetana)}
                            defaultValue={MinLimitMetana.toString()}/>
                    </View>
                    
                    <TouchableOpacity
                        onPress={() => setMetana(StandardMetana, MaxLimitMetana, MinLimitMetana)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Simpan Pengaturan</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Modal Asap */}
            <Modal
                isVisible={ModalGas4Window}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => setModalGas4Window(!ModalGas4Window)}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Setting Gas Asap</Text>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Standard (ppm)</Text>
                        <TextInput
                            placeholder='Standard'
                            keyboardType='numeric'
                            onChangeText={StandardAsap => setStandardAsap(StandardAsap)}
                            defaultValue={StandardAsap.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Mulai Hidup (ppm)</Text>
                        <TextInput
                            placeholder='Max Limit'
                            keyboardType='numeric'
                            onChangeText={MaxLimitAsap => setMaxLimitAsap(MaxLimitAsap)}
                            defaultValue={MaxLimitAsap.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Mati (ppm)</Text>
                        <TextInput
                            placeholder='Min Limit'
                            keyboardType='numeric'
                            onChangeText={MinLimitAsap => setMinLimitAsap(MinLimitAsap)}
                            defaultValue={MinLimitAsap.toString()}/>
                    </View>
                    
                    <TouchableOpacity
                        onPress={() => setAsap(StandardAsap, MaxLimitAsap, MinLimitAsap)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Simpan Pengaturan</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Modal Flame */}
            <Modal
                isVisible={ModalGas5Window}
                animationIn='bounceIn'
                animationOut='bounceOut'>
                <View
                    style={{
                        backgroundColor: '#00cb75',
                        borderRadius: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 5,
                            zIndex: 10
                        }}
                        onPress={() => setModalGas5Window(!ModalGas5Window)}>
                        <Icon name='window-close' type='font-awesome-5' size={18} color='white'/>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            height: 50,
                            paddingTop: 10,
                            backgroundColor: 'green',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginBottom: 20
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Setting Flamable Gas</Text>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Standard (ppm)</Text>
                        <TextInput
                            placeholder='Standard'
                            keyboardType='numeric'
                            onChangeText={StandardFlame => setStandardFlame(StandardFlame)}
                            defaultValue={StandardFlame.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Mulai Hidup (ppm)</Text>
                        <TextInput
                            placeholder='Max Limit'
                            keyboardType='numeric'
                            onChangeText={MaxLimitFlame => setMaxLimitFlame(MaxLimitFlame)}
                            defaultValue={MaxLimitFlame.toString()}/>
                    </View>
                    <View style={styles.TextInput}>
                    <Text style={{color:'white', fontSize:10}}>Mati (ppm)</Text>
                        <TextInput
                            placeholder='Min Limit'
                            keyboardType='numeric'
                            onChangeText={MinLimitFlame => setMinLimitFlame(MinLimitFlame)}
                            defaultValue={MinLimitFlame.toString()}/>
                    </View>
                    
                    <TouchableOpacity
                        onPress={() => setFlame(StandardFlame, MaxLimitFlame, MinLimitFlame)}
                        style={{
                            backgroundColor: 'yellow',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}>Simpan Pengaturan</Text>
                    </TouchableOpacity>
                </View>
            </Modal>


            <ScrollView>
                <View style={styles.TopHeader}>
                    <TouchableOpacity
                        style={styles.PeriodeBox}
                        onPress={() => setModalPeriodeWindow(!ModalPeriodeWindow)}>
                        <Icon name='calendar' type='font-awesome' size={16}/>
                        <Text style={styles.TopHeaderText}>Periode - {InputPeriode}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.PeriodeBox} onPress={() => ModalWiFi()}>
                        <Icon name='building-o' type='font-awesome' size={16}/>
                        <Text style={styles.TopHeaderText}>{NowSSID}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ContainerDate}>
                    <View style={styles.BoxDate}>
                        <View style={styles.ContainerChickin}>
                            <View style={styles.BoxTextChickin}>
                                <Text style={styles.GeneralText}>Chick in</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.BoxTimeChickin}
                                onPress={() => setModalChickInWindow(!ModalChickInWindow)}>
                                <Text style={styles.TimeChickin}>{TanggalChickIn}</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: 6
                            }}>
                            <Text style={styles.GeneralText}>Saat ini</Text>
                        </View>
                        <View style={styles.ContainerTimeNow}>
                            <View style={styles.BoxTextTimeNow}></View>
                            <View style={styles.BoxTimeNow}>
                                <Icon
                                    name='calendar-o'
                                    type='font-awesome'
                                    size={12}
                                    color='white'
                                    style={{
                                        marginRight: 5
                                    }}/>
                                <Text style={styles.TimeNow}>{currentDate}
                                    {currentMonth}</Text>
                            </View>
                            <View style={styles.BoxTimeNow}>
                                <Icon
                                    name='clock-o'
                                    type='font-awesome'
                                    size={12}
                                    color='white'
                                    style={{
                                        marginRight: 5
                                    }}/>
                                <Text style={styles.TimeNow}>{currentHour}
                                    : {currentMinute}</Text>
                            </View>
                        </View>
                        <View style={styles.ContainerTimeNow}>
                            <View style={styles.BoxTextTimeNow}>
                                <Text style={styles.GeneralText}></Text>
                            </View>
                            <View style={styles.BoxTimeNow}>
                                <Icon
                                    name='temperature-high'
                                    type='font-awesome-5'
                                    size={12}
                                    color='white'
                                    style={{
                                        marginRight: 5
                                    }}/>
                                <Text style={styles.TimeNow}>{Temp} &deg;C</Text>
                            </View>
                            <View style={styles.BoxTimeNow}>
                                <Icon
                                    name='tint'
                                    type='font-awesome-5'
                                    size={12}
                                    color='white'
                                    style={{
                                        marginRight: 5
                                    }}/>
                                <Text style={styles.TimeNow}>{Hum}%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.BoxUmur}>
                        <Text style={styles.TextUmur}>Umur</Text>
                        <Text style={styles.NumUmur}>{UmurChicken}</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.CardContainer} onPress={()=> setModalFan1Window(!ModalFan1Window) }>
                    <View style={styles.KipasCard}>
                        <Text style={styles.GeneralText}>Kipas-1</Text>
                        <Icon
                            name='fan'
                            type='font-awesome-5'
                            size={35}
                            color='white'
                            style={{
                                marginVertical: 3
                            }}/>
                            {StatusFan1 && (
                                <Text style={styles.TextStatusFanON}>ON</Text>
                            )}
                            {!StatusFan1 && (
                                <Text style={styles.TextStatusFanOFF}>OFF</Text>
                            )}
                    </View>
                    <View style={styles.KipasCard}>
                        <Text style={styles.GeneralText}>Hidup</Text>
                        <Text style={styles.MenitCount}>{TimerON_Fan1}</Text>
                        <Text style={styles.GeneralText}>Menit</Text>
                    </View>
                    <View style={styles.KipasCard}>
                        <Text style={styles.GeneralText}>Mati</Text>
                        <Text style={styles.MenitCount}>{TimerOFF_Fan1}</Text>
                        <Text style={styles.GeneralText}>Menit</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.CardContainerAlat}>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}>
                        <View style={styles.CardAlat}>
                            <Text style={styles.GeneralText}>Alat</Text>
                        </View>
                        <View style={styles.CardAlat}>
                            <Text style={styles.GeneralText}>Status</Text>
                        </View>
                        <View style={styles.CardAlat}>
                            <Text style={styles.GeneralText}>Mulai Hidup</Text>
                        </View>
                        <View style={styles.CardAlat}>
                            <Text style={styles.GeneralText}>Mati</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row'
                        }}
                        onPress={()=> setModalFan2Window(!ModalFan2Window)}
                        >
                        <View style={styles.CardAlat}>
                            <Text style={styles.GeneralText}>Kipas-2</Text>
                        </View>
                        <View style={styles.CardAlat}>
                            {StatusFan2 && (
                                <Text style={styles.TextStatusFanON}>ON</Text>
                            )}
                            {!StatusFan2 && (
                                <Text style={styles.TextStatusFanOFF}>OFF</Text>
                            )}
                        </View>
                        <View style={styles.CardAlat}>
                            <Text style={styles.SuhuMax}>{MaxTempFan2} &deg;C</Text>
                        </View>
                        <View style={styles.CardAlat}>
                            <Text style={styles.SuhuMax}>{MinTempFan2} &deg;C</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row'
                        }}
                        onPress={()=> setModalFan3Window(!ModalFan3Window)}
                        >
                        <View style={styles.CardAlat}>
                            <Text style={styles.GeneralText}>Kipas-3</Text>
                        </View>
                        <View style={styles.CardAlat}>
                        {StatusFan3 && (
                            <Text style={styles.TextStatusFanON}>ON</Text>
                        )}
                        {!StatusFan3 && (
                            <Text style={styles.TextStatusFanOFF}>OFF</Text>
                        )}
                        </View>
                        <View style={styles.CardAlat}>
                            <Text style={styles.SuhuMax}>{MaxTempFan3} &deg;C</Text>
                        </View>
                        <View style={styles.CardAlat}>
                            <Text style={styles.SuhuMax}>{MinTempFan3} &deg;C</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row'
                        }}
                        onPress={() => setModalFan4Window(!ModalFan4Window)}
                        >
                        <View style={styles.CardAlat}>
                            <Text style={styles.GeneralText}>Kipas-4</Text>
                        </View>
                        <View style={styles.CardAlat}>
                            {StatusFan4 && (
                                <Text style={styles.TextStatusFanON}>ON</Text>
                            )}
                            {!StatusFan4 && (
                                <Text style={styles.TextStatusFanOFF}>OFF</Text>
                            )}
                        </View>
                        <View style={styles.CardAlat}>
                            <Text style={styles.SuhuMax}>{MaxTempFan4} &deg;C</Text>
                        </View>
                        <View style={styles.CardAlat}>
                            <Text style={styles.SuhuMax}>{MinTempFan4} &deg;C</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row'
                        }}
                        onPress={() => setModalFan5Window(!ModalFan5Window)}
                        >
                        <View style={styles.CardAlat}>
                            <Text style={styles.GeneralText}>Kipas-5</Text>
                        </View>
                        <View style={styles.CardAlat}>
                            {StatusFan5 && (
                                <Text style={styles.TextStatusFanON}>ON</Text>
                            )}
                            {!StatusFan5 && (
                                <Text style={styles.TextStatusFanOFF}>OFF</Text>
                            )}
                        </View>
                        <View style={styles.CardAlat}>
                            <Text style={styles.SuhuMax}>{MaxTempFan5} &deg;C</Text>
                        </View>
                        <View style={styles.CardAlat}>
                            <Text style={styles.SuhuMax}>{MinTempFan5} &deg;C</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row'
                        }}
                        onPress={() => setModalFan6Window(!ModalFan6Window)}
                        >
                        <View style={styles.CardAlat}>
                            <Text style={styles.GeneralText}>Kipas-6</Text>
                        </View>
                        <View style={styles.CardAlat}>
                            {StatusFan6 && (
                                <Text style={styles.TextStatusFanON}>ON</Text>
                            )}
                            {!StatusFan6 && (
                                <Text style={styles.TextStatusFanOFF}>OFF</Text>
                            )}
                        </View>
                        <View style={styles.CardAlat}>
                            <Text style={styles.SuhuMax}>{MaxTempFan6} &deg;C</Text>
                        </View>
                        <View style={styles.CardAlat}>
                            <Text style={styles.SuhuMax}>{MinTempFan6} &deg;C</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row'
                        }}
                        onPress={() => setModalFan7Window(!ModalFan7Window)}
                        >
                        <View style={styles.CardAlat}>
                            <Text style={styles.GeneralText}>Kipas-7</Text>
                        </View>
                        <View style={styles.CardAlat}>
                            {StatusFan7 && (
                                <Text style={styles.TextStatusFanON}>ON</Text>
                            )}
                            {!StatusFan7 && (
                                <Text style={styles.TextStatusFanOFF}>OFF</Text>
                            )}
                        </View>
                        <View style={styles.CardAlat}>
                            <Text style={styles.SuhuMax}>{MaxTempFan7} &deg;C</Text>
                        </View>
                        <View style={styles.CardAlat}>
                            <Text style={styles.SuhuMax}>{MinTempFan7} &deg;C</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.CardContainer} onPress={() => setModalPompaWindow(!ModalPompaWindow)}>
                    <View style={styles.KipasCard}>
                        <Text style={styles.GeneralText}>Pompa</Text>
                        <Icon
                            name='faucet'
                            type='font-awesome-5'
                            size={35}
                            color='white'
                            style={{
                                marginVertical: 3
                            }}/>
                        {StatusPompa && (
                            <Text style={styles.TextStatusFanON}>ON</Text>
                        )}
                        {!StatusPompa && (
                            <Text style={styles.TextStatusFanOFF}>OFF</Text>
                        )}
                    </View>
                    <View style={styles.KipasCard}>
                        <Text style={styles.GeneralText}>Mulai Hidup</Text>
                        <Text style={styles.MenitCount}>{MaxTempPompa}</Text>
                        <Text style={styles.GeneralText}>Celcius</Text>
                    </View>
                    <View style={styles.KipasCard}>
                        <Text style={styles.GeneralText}>Mati</Text>
                        <Text style={styles.MenitCount}>{MinTempPompa}</Text>
                        <Text style={styles.GeneralText}>Celcius</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.CardContainerGas}>
                    <TouchableOpacity style={styles.CardGas} onPress={() => setModalGas1Window(!ModalGas1Window)}>
                        <View
                            style={{
                                alignItems: 'center'
                            }}>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: '#00ABF0',
                                    backgroundColor: 'yellow',
                                    paddingHorizontal: 10,
                                    borderRadius: 5,
                                    paddingVertical: 3
                                }}>C02 (MQ-135)</Text>
                            <Image style={styles.IconGas} source={require('../assets/icon/co2.png')}/>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row'
                            }}>
                            <View
                                style={{
                                    flex: 2
                                }}>
                                <Text style={styles.VarGas}>Standard</Text>
                                <Text style={styles.VarGas}>Aktual</Text>
                                <Text style={styles.VarGas}>Mulai Hidup</Text>
                                <Text style={styles.VarGas}>Mati</Text>
                                <Text style={styles.VarGas}>Status Kipas-7</Text>
                            </View>
                            <View
                                style={{
                                    flex: 1
                                }}>
                                <Text style={styles.ValueGas}>{StandardCO2}</Text>
                                <Text style={styles.ValueGas}>{ValGasCO2}</Text>
                                <Text style={styles.ValueGas}>{MaxLimitCO2}</Text>
                                <Text style={styles.ValueGas}>{MinLimitCO2}</Text>
                                {StatusFan7 && (
                                    <Text style={styles.ValueGasStatusON}>ON</Text>
                                )}
                                {!StatusFan7 && (
                                    <Text style={styles.ValueGasStatusOFF}>OFF</Text>
                                )}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.CardGas} onPress={() => setModalGas2Window(!ModalGas2Window)}>
                        <View
                            style={{
                                alignItems: 'center'
                            }}>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: '#00ABF0',
                                    backgroundColor: 'yellow',
                                    paddingHorizontal: 10,
                                    borderRadius: 5,
                                    paddingVertical: 3
                                }}>NH3 (MQ-135)</Text>
                            <Image style={styles.IconGas} source={require('../assets/icon/nh3.png')}/>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row'
                            }}>
                            <View
                                style={{
                                    flex: 2
                                }}>
                                <Text style={styles.VarGas}>Standard</Text>
                                <Text style={styles.VarGas}>Aktual</Text>
                                <Text style={styles.VarGas}>Mulai Hidup</Text>
                                <Text style={styles.VarGas}>Mati</Text>
                                <Text style={styles.VarGas}>Status Kipas-7</Text>
                            </View>
                            <View
                                style={{
                                    flex: 1
                                }}>
                                <Text style={styles.ValueGas}>{StandardNH3}</Text>
                                <Text style={styles.ValueGas}>{ValGasNH3}</Text>
                                <Text style={styles.ValueGas}>{MaxLimitNH3}</Text>
                                <Text style={styles.ValueGas}>{MinLimitNH3}</Text>
                                {StatusFan7 && (
                                    <Text style={styles.ValueGasStatusON}>ON</Text>
                                )}
                                {!StatusFan7 && (
                                    <Text style={styles.ValueGasStatusOFF}>OFF</Text>
                                )}
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.CardContainerGas}>
                    <TouchableOpacity style={styles.CardGas} onPress={() => setModalGas3Window(!ModalGas3Window)}>
                        <View
                            style={{
                                alignItems: 'center'
                            }}>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: '#00ABF0',
                                    backgroundColor: 'yellow',
                                    paddingHorizontal: 10,
                                    borderRadius: 5,
                                    paddingVertical: 3
                                }}>Metana (MQ-4)</Text>
                            <Image style={styles.IconGas} source={require('../assets/icon/ch4.png')}/>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row'
                            }}>
                            <View
                                style={{
                                    flex: 2
                                }}>
                                <Text style={styles.VarGas}>Standard</Text>
                                <Text style={styles.VarGas}>Aktual</Text>
                                <Text style={styles.VarGas}>Mulai Hidup</Text>
                                <Text style={styles.VarGas}>Mati</Text>
                                <Text style={styles.VarGas}>Status Kipas-7</Text>
                            </View>
                            <View
                                style={{
                                    flex: 1
                                }}>
                                <Text style={styles.ValueGas}>{StandardMetana}</Text>
                                <Text style={styles.ValueGas}>{ValGasMetana}</Text>
                                <Text style={styles.ValueGas}>{MaxLimitMetana}</Text>
                                <Text style={styles.ValueGas}>{MinLimitMetana}</Text>
                                {StatusFan7 && (
                                    <Text style={styles.ValueGasStatusON}>ON</Text>
                                )}
                                {!StatusFan7 && (
                                    <Text style={styles.ValueGasStatusOFF}>OFF</Text>
                                )}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.CardGas} onPress={() => setModalGas4Window(!ModalGas4Window)}>
                        <View
                            style={{
                                alignItems: 'center'
                            }}>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: '#00ABF0',
                                    backgroundColor: 'yellow',
                                    paddingHorizontal: 10,
                                    borderRadius: 5,
                                    paddingVertical: 3
                                }}>Asap (MQ-4)</Text>
                            <Image style={styles.IconGas} source={require('../assets/icon/smoke.png')}/>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row'
                            }}>
                            <View
                                style={{
                                    flex: 2
                                }}>
                                <Text style={styles.VarGas}>Standard</Text>
                                <Text style={styles.VarGas}>Aktual</Text>
                                <Text style={styles.VarGas}>Mulai Hidup</Text>
                                <Text style={styles.VarGas}>Mati</Text>
                                <Text style={styles.VarGas}>Status Kipas-7</Text>
                            </View>
                            <View
                                style={{
                                    flex: 1
                                }}>
                                <Text style={styles.ValueGas}>{StandardAsap}</Text>
                                <Text style={styles.ValueGas}>{ValGasAsap}</Text>
                                <Text style={styles.ValueGas}>{MaxLimitAsap}</Text>
                                <Text style={styles.ValueGas}>{MinLimitAsap}</Text>
                                {StatusFan7 && (
                                    <Text style={styles.ValueGasStatusON}>ON</Text>
                                )}
                                {!StatusFan7 && (
                                    <Text style={styles.ValueGasStatusOFF}>OFF</Text>
                                )}
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.CardContainerGas}>
                    <TouchableOpacity style={styles.CardGas} onPress={() => setModalGas5Window(!ModalGas5Window)}>
                        <View
                            style={{
                                alignItems: 'center'
                            }}>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: '#00ABF0',
                                    backgroundColor: 'yellow',
                                    paddingHorizontal: 10,
                                    borderRadius: 5,
                                    paddingVertical: 3
                                }}>Flamable Gas (MQ-9)</Text>
                            <Icon
                                name='fire'
                                color='white'
                                size={35}
                                type='font-awesome'
                                style={{
                                    paddingTop: 5
                                }}/>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row'
                            }}>
                            <View
                                style={{
                                    flex: 2
                                }}>
                                <Text style={styles.VarGas}>Standard</Text>
                                <Text style={styles.VarGas}>Aktual</Text>
                                <Text style={styles.VarGas}>Mulai Hidup</Text>
                                <Text style={styles.VarGas}>Mati</Text>
                                <Text style={styles.VarGas}>Status Kipas-7</Text>
                            </View>
                            <View
                                style={{
                                    flex: 1
                                }}>
                                <Text style={styles.ValueGas}>{StandardFlame}</Text>
                                <Text style={styles.ValueGas}>{ValGasFlame}</Text>
                                <Text style={styles.ValueGas}>{MaxLimitFlame}</Text>
                                <Text style={styles.ValueGas}>{MinLimitFlame}</Text>
                                {StatusFan7 && (
                                    <Text style={styles.ValueGasStatusON}>ON</Text>
                                )}
                                {!StatusFan7 && (
                                    <Text style={styles.ValueGasStatusOFF}>OFF</Text>
                                )}
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{
                        height: 10
                    }}></View>
            </ScrollView>
        </View>
    )
}

export default Dashboard
