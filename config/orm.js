const connection = require("../config/connection.js");

let printQuestionMarks = num => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

let objToSql = ob => {
    let arr = [];

    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

let orm = {
    selectAll: function(table, cb) {
        let queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table} (${cols.toString()}) `;
        queryString += `VALUES (${printQuestionMarks(vals.length)});`
        connection.query(queryString, vals, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table} SET devoured = true `;
        queryString += `WHERE ${condition};`;
        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;