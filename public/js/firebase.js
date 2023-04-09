const firebaseConfig = {
    apiKey: "AIzaSyC29iDi_gbapDGDIKv8USCRkak2Gtm7yrg",
    authDomain: "hong-83ee7.firebaseapp.com",
    databaseURL: "https://hong-83ee7-default-rtdb.firebaseio.com",
    projectId: "hong-83ee7",
    storageBucket: "hong-83ee7.appspot.com",
    messagingSenderId: "283388964821",
    appId: "1:283388964821:web:c7668aa2aceb9bc433175c"
};

const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}

; (async () => {
    let result = await write('BBB', 'test')
    console.log(result)

    let response = await read('test')
    console.log(response)

    listen('test', (value) => {
        console.log(value)
    })
})()
