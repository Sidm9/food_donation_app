const Theme = {
    appearanceContainer: {
        flex: 1,
        backgroundColor: '#101010',
    },
    mainContainer: {
        marginLeft: '5%',
        marginRight: '5%',
        flex: 1,
        center: {
            justifyContent: 'center',
        },
    },
    headerText: {
        color: "#F8F8FF",
        fontSize: 40,
        fontFamily: 'ProductSansBold',
        marginTop: '10%',
        marginBottom: '10%',
        marginRight: '3%',
        marginLeft: '3%',
        center: {
            textAlign: 'center',
        }
    },
    centerText: {
        color: "#F8F8FF",
        width: '100%',
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
    }

}
export default Theme