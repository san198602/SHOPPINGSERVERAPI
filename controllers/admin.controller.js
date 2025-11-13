var Admin = require("../models/Admin.model");
const AdminController = {
    async createAdmin(req, res) {

        const newAdmin = new Admin({
            username: "santosh001",
            email: "san001@gmail.com",
            password: "san001123456",
            user: "admin@123",
            leaveperiod: "April",
            roles: ["superadmin", "normal admin", "visitor"]

        });
        try {
            const savedAdmin = await newAdmin.save();
            logger.info('*** Requested for First log... ***' + savedAdmin);

        } catch (error) {

            console.error("Error message:" + error.message);


        }


    },


    async getalladmins(req, res) {
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
            const admin = await Admin.paginate({}, options)

            return res.json(admin);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    },


    async getAdminById(req, res) {
        var userId = req.params.id;
        try {
            const admin = await Admin.findById(userId);
            if (admin) {
                console.log('Admin found:', admin);
                return res.json(admin);

            } else {
                console.log('Admin  not found.');
                return null;
            }
        } catch (error) {
            console.error('Error finding admin:', error);
            throw error;
        }
    },

    async updateAdmin(req, res) {

    },
    async deleteAdmin(req, res) {

        console.log("DASD", +req)

    },


    getAdminByParams: async (req, res, next) => {
        var userId = req.query.id;
        try {
            const admin = await Admin.findById(userId);
            if (admin) {
                console.log('Admin found:', admin);
                return res.json(admin);

            } else {
                console.log('Admin  not found.');
                return null;
            }
        } catch (error) {
            console.error('Error finding admin:', error);
            throw error;
        }
    }


}// end user
module.exports = AdminController;