import firebase from './firestore';
var tempData = []
export const FetchFromDB =  () => {

    const db = firebase.firestore()
    var DonorRef = db.collection("Donor");

    DonorRef.orderBy("Location.timestamp", "desc").onSnapshot(snapshot => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
            tempData.push(doc.data());
        });
    })
    console.log(tempData);

}