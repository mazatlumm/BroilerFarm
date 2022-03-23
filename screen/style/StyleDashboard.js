import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#00cb75',
    },
    TopHeader:{
        flexDirection:'row',
        marginHorizontal:10,
        marginTop:10
    },
    PeriodeBox:{
        // borderWidth:1,
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:5,
        flexDirection:'row',
        flex:1,
        marginHorizontal:5,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        backgroundColor:'yellow',
        elevation: 2,
    },
    TopHeaderText:{
        fontSize:12,
        marginLeft:10,
        color:'black',
        fontFamily:'SF-Pro-Rounded-Semibold'
    },
    ContainerTitle:{
        marginHorizontal:10,
        marginVertical:10,
        alignItems:'center',
        paddingVertical:7,
    },
    TextTitle:{
        fontSize:18,
        marginLeft:10,
        color:'white',
        fontFamily:'SF-Pro-Rounded-Semibold',
        fontWeight:'bold'
    },
    ContainerDate:{
        flexDirection:'row',
        marginTop:10,
        marginHorizontal:10,
        paddingTop:15,
        paddingBottom:0,
        paddingHorizontal:15,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor:'#00cb75'
    },
    BoxDate:{
        flex:4,
    },
    BoxUmur:{
        flex:1,
        marginLeft:5,
        justifyContent:'center',
        alignItems:'center'
    },
    GeneralText:{
        color:'white',
        fontFamily:'SF-Pro-Rounded-Semibold',
        fontSize:12,

    },
    ContainerChickin:{
        flexDirection:'row',
        marginBottom:5,
    },
    ContainerTimeNow:{
        flexDirection:'row',
        marginBottom:5,
    },
    TimeChickin:{
        color:'#ea1c81',
        fontFamily:'SF-Pro-Rounded-Semibold',
        fontSize:14
    },
    BoxTimeChickin:{
        flex:3,
        backgroundColor:'yellow',
        borderRadius:10, 
        paddingHorizontal:10,
        alignItems:'center',
        marginRight:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    BoxTimeNow:{
        flex:1,
        borderWidth:1,
        borderColor:'white',
        borderRadius:10, 
        paddingHorizontal:10,
        alignItems:'center',
        marginRight:10,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    BoxTextChickin:{
        flex:1,
        paddingLeft:5,
        marginRight:10,
        justifyContent:'center',
    },
    BoxTextTimeNow:{
        flex:1,
        paddingLeft:5,
        marginRight:2,
        justifyContent:'center',
    },
    TimeNow:{
        color:'white',
        fontFamily:'SF-Pro-Rounded-Semibold',
        fontSize:12
    },
    TextUmur:{
        color:'white',
        fontFamily:'SF-Pro-Rounded-Semibold',
        fontSize:12,
    },
    NumUmur:{
        color:'white',
        fontFamily:'SF-Pro-Rounded-Semibold',
        fontSize:28,
    },
    CardContainer:{
        flexDirection:'row',
        marginTop:10,
        marginHorizontal:10,
        paddingTop:15,
        paddingBottom:8,
        paddingHorizontal:15,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor:'#00cb75'
    },
    CardContainerAlat:{
        marginTop:10,
        marginHorizontal:10,
        paddingTop:15,
        paddingBottom:15,
        paddingHorizontal:5,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor:'#00cb75'
    },
    KipasCard:{
        flex:1,
        alignItems:'center',
        paddingHorizontal:10
    },
    CardTotalMenit:{
        borderRadius:10,
        paddingHorizontal:20,
        flexDirection:'row',
        flex:1,
        marginHorizontal:5,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        backgroundColor:'yellow',
        elevation: 2,
    },
    MenitCount:{
        fontFamily:'SF-Pro-Rounded-Semibold',
        color:'#00ABF0', 
        fontSize:16,
        borderRadius:10,
        backgroundColor:'yellow',
        paddingHorizontal:10,
        marginVertical:10
    },
    TextStatusFanON:{
        color:'white',
        fontFamily:'SF-Pro-Rounded-Semibold',
        fontSize:12,
        backgroundColor:'#00ABF0',
        borderRadius:10,
        paddingHorizontal:10,
        marginTop:10
    },
    TextStatusFanOFF:{
        color:'white',
        fontFamily:'SF-Pro-Rounded-Semibold',
        fontSize:12,
        backgroundColor:'red',
        borderRadius:10,
        paddingHorizontal:10,
        marginTop:10
    },
    CardAlat:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:10,
    },
    SuhuMax:{
        color:'#00ABF0',
        fontFamily:'SF-Pro-Rounded-Semibold',
        fontSize:12,
        backgroundColor:'yellow',
        borderRadius:10,
        paddingHorizontal:10,
        marginTop:10
    },
    CardContainerGas:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        // borderWidth:1,
        marginHorizontal:8
    },
    CardGas:{
        flex:1,
        marginTop:10,
        marginHorizontal:2,
        paddingTop:15,
        paddingBottom:8,
        paddingHorizontal:15,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor:'#00cb75'
    },
    IconGas:{
        height:50,
        width:50,
        resizeMode:'contain'
    },
    ValueGas:{
        textAlign:'right',
        fontFamily:'arial',
        color:'white',
        fontSize:12
    },
    VarGas:{
        textAlign:'left',
        fontFamily:'arial',
        color:'white',
        fontSize:12
    },
    ValueGasStatusON:{
        textAlign:'right',
        fontFamily:'arial',
        color:'white',
        fontWeight:'bold'
    },
    ValueGasStatusOFF:{
        textAlign:'right',
        fontFamily:'arial',
        color:'red',
        fontWeight:'bold'
    },
    TextInput:{
        borderWidth:1,
        borderRadius:10,
        marginHorizontal:10,
        paddingHorizontal:10,
        borderColor:'white',
        marginBottom:5,
    }
})