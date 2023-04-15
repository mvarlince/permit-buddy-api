

export function getForm(req, res) {
    const formObj = {percent: 85, suggestion:["test1", "test2","test3"]};
    console.log(formObj)
    res.json(formObj);
}

export function input(req, res) {
    const {field1, field2} = req.body
    console.log(field1, field2)
    res.send("Input received")
}