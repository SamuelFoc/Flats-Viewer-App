const Flat = require("../models/flats");
const clauses = require("../utils/clauses");

const get_all_flats = async(req, res) => {
    const page = req.query.page;
    try {
        const allFlats = await Flat.findAll({
            limit: 10,
            offset: (page - 1)*10
        });
        const count = await Flat.count();
        return res.status(200).json({
            count: count,
            page: page,
            data: allFlats
        });
    } catch (err){
        console.error(err.message);
        return res.status(500).json(err);
    }
}

const add_flat = async(req, res) => {
    try {
        const FLAT_MODEL = {
            flat_href: req.body.flat_href,
            img_href: req.body.img_href,
            address: req.body.address,
            price: req.body.price,
            title: req.body.title,
            type: req.body.type,
            surface: req.body.surface,
            price_num: req.body.price_num,
        }
        try {
            const flat = await Flat.create(FLAT_MODEL);
            return res.status(200).json(flat);
        } catch (error) {
            return res.status(500).json(error);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

const get_filtered_flats = async(req, res) => {
    try {
        const query = req.query;
        const page  = query.page;
        const limit = query.limit;

        const whereCL = clauses.createClause(query);

        const filteredFlats = await Flat.findAll({
            where: whereCL,
            limit: limit || 10,
            offset: (page -1)*limit || 0
        });

        const count = await Flat.count({
            where: whereCL
        });

        return res.status(200).json({
            count: count,
            page: page,
            data: filteredFlats
        });
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteFlat = async(req, res) => {
    try {
        const deleted_flat = await Flat.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json(deleted_flat);
    } catch (err){
        console.error(err.message);
        return res.status(500).json(err);
    }
}

module.exports = {
    get_all_flats,
    get_filtered_flats,
    add_flat
}
