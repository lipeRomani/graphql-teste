
const usersDB = [
    {id: 1, name: "Cap America", email: "cap@america.com"}
]

module.exports.getAllUsers = (limit) => new Promise((resolve, reject) => {
    const newCollection = usersDB.slice(0, limit);
    resolve(newCollection);
});


module.exports.createUser = (user) => {
    const newUser = Object.assign({id: usersDB.length + 1}, user);
    usersDB.push(newUser);
    return new Promise((resolve, reject) => {
        resolve(newUser);
    });
}