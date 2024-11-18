const { connect } = require('mongoose')
const conn = async () => {
    try {
        await connect(process.env.DATABASE)
        console.log('database terkoneksi')
    }
    catch (err) {
        console.log(err.message)
        console.log('gagal koneksi database')
    }
}

module.exports = conn