const Theme = {
    appearanceContainer: {
        flex: 1,
        backgroundColor: '#101010',
    },
    mainContainer: {
        marginLeft: '2%',
        marginRight: '2%',
        flex: 1,
        center: {
            justifyContent: 'center',
        },
    },
    headerText: {
        color: "#F8F8FF",
        fontSize: 40,
        fontFamily: 'ProductSansBold',
        marginTop: '5%',
        marginBottom: '5%',
        marginRight: '3%',
        marginLeft: '3%',
        center: {
            textAlign: 'center',
        }
    },
    centerText: {
        color: "#F8F8FF",
        width: '100%',
        marginTop: '3%',
        textAlign: 'center',
    },
    Text: {
        style: {
            color: "#F8F8FF",
            fontFamily: "ProductSans",
            marginTop: '1%',
            marginBottom: '1%',
            fontSize: 18,
        },
    },
    Button: {
        raised: true,
        buttonStyle: {
            backgroundColor: '#1d9b54',
        },
        containerStyle: {
            margin: '3%',
            borderRadius: 10,
        },
        titleStyle: {
            fontSize: 18,
            color: "#F8F8FF",
            fontFamily: 'ProductSans'
        },
    },
    Input: {
        containerStyle: {
            width: '100%',
            marginLeft: 0,
            marginRight: 0,
        },
        inputStyle: {
            color: '#F8F8FF',
            fontFamily: 'ProductSans',
        },
        leftIcon: {
            color: '#F8F8FF',
        },
        labelStyle: {
            fontFamily: 'ProductSans',
            fontWeight: 'normal',
        },
    },
    Icon: {
        containerStyle: {
            marginTop: '5%',
        },
        color: '#1d9b54'
    },
    Card: {
        containerStyle: {
            backgroundColor: "#1f1f1f",
            borderRadius: 8,
            borderColor: '#333333',
            padding: 0,
        },
    },
    cardData: {
        fontFamily : 'ProductSansBold',
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '5%',
        marginBottom: '2%',
        fontSize : 25,
    }


}
export default Theme