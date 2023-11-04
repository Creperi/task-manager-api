require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete("65353ff138cb15a81c868d2a").then((task) => {
//     console.log(task)
//     return User.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount("653542767222f5640624f14a").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})