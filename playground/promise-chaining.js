require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate("65353ff138cb15a81c868d2a", {age: 21}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 21})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount("65353ff138cb15a81c868d2a", 21).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})