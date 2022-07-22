const { Op } = require("sequelize");

const createClause = (query) => {
    let orClausses = [];
    let typeA = query.typeA;
    let typeB = query.typeB;

    if (typeA || typeB){
        if(typeA && typeA[0] !== "undefined"){
            typeA.forEach(type => {
                orClausses.push({ type: type })
            })
        }

        if(typeB && typeB[0] !== "undefined"){
            typeB.forEach(type => {
                orClausses.push({ type: type })
            })
        }

        if(!orClausses.length){
            orClausses = [{type:"1+kk"}, {type:"2+kk"}, {type:"3+kk"}, {type:"4+kk"}, {type:"5+kk"}, {type:"1+1"}, {type:"2+1"}, {type:"3+1"}, {type:"4+1"}, {type:"5+1"}];
        }
        
        const fullClausse = {
            [Op.and]: [
                {price_num: {
                    [Op.gte]: query.from || 0   
                }},
                {price_num: {
                    [Op.lte]: query.to || 1000000   
                }},
                {surface: {
                    [Op.gte]: query.surface || 0   
                }},
                {[Op.or]: orClausses}
            ]
        }

        return fullClausse;
    } else {
        return new Error("Bad flat type declaration");
    }
}

module.exports = {createClause}