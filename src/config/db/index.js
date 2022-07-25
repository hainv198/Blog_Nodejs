const mongoose = require('mongoose');
const { use } = require('../../routes/site');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/blog_node_db');
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect }
