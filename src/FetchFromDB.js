import firebase from './firestore';

const FetchFromDB =  async  () => {
    var a = []
    DonorRef.onSnapshot(v => {
        v.docs.forEach(doc => {
            console.log(doc.data())
            a.push(doc.data())
        })
    })
    console.log(a);
    return a;
}
export default FetchFromDB;