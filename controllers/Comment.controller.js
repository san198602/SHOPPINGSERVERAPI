const Comment = require('../models/comment.model');
exports.getAllComments = async (req, res) => {
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
        const Comments = await Comment.paginate({}, options)

        return res.json(Comments);
    } catch (err) {
        return res.status(400).json({ message: err.message }); // Handle errors
    }
};



// exports.getUserById = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// exports.updateUser = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// exports.deleteUser = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };