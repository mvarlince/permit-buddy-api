import db_connect from "./secret.js";

export function getForm(req, res) {
    const formObj = {percent: 85, suggestion:["test1", "test2","test3"]};
    res.send(formObj);
}