const User = require('../models/User.model');
exports.getAllUsers = async (req, res) => {
    const myCustomLabels = {
        totalDocs: 'itemCount',
        docs: 'itemsList',
        limit: 'perPage',
        page: 'currentPage',
        nextPage: 'next',
        prevPage: 'prev',
        totalPages: 'pageCount',
        pagingCounter: 'slNo',
        meta: 'paginator',
    };
    const options = {
        page: 1,
        limit: 10,
        collation: {
            locale: 'en',
        },
        customLabels: myCustomLabels,

    };
    try {
        const users = await User.paginate({}, options)

        return res.json(users);
    } catch (err) {
        return res.status(400).json({ message: err.message }); // Handle errors
    }
};

exports.createUser = async (req, res) => {

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        favoriteFoods: req.body.foods,
        password: req.body.password
    });
    try {
        const savedUser = await newUser.save();
        return res.status(201).json("'New user created:'" + savedUser);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};


exports.getUserById = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};