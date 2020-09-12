import firebase from './firestore';

const db = firebase.firestore()
var DonorRef = db.collection("Donor");

const FetchFromDB =  async  () => {
    var a = []
    DonorRef.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            // console.log("FROM THE API  " ,doc.id, " => ", doc.data());
            a = (doc.data());
            
        });
        // console.log(a)
    });
    return a;
}
export default FetchFromDB;