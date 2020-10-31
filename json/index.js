let txt =
 `
 {
"inbox":
 [
    {
        "message": {
        "from": "ahmad@example.com",
        "to": "fadi@example.com",
        "subject": "Hello World!",
        "body": "How are you?"
    }
    },
    {
        "message": {
        "from": "ahmad@example.com",
        "to": "fadi@example.com",
        "subject": "Hello World!",
        "body": "How are you?"
    }
    }
]
}
`
var obj = JSON.parse(txt);
let table = document.getElementById('myTable');
let row = table.insertRow(1);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);
cell1.innerHTML  = obj.inbox[0].message.from;
cell2.innerHTML =obj.inbox[0].message.to;
cell3.innerHTML =obj.inbox[0].message.subject;
cell4.innerHTML =obj.inbox[0].message.body;
let row1 = table.insertRow(2);
 cell1 = row1.insertCell(0);
 cell2 = row1.insertCell(1);
 cell3 = row1.insertCell(2);
 cell4 = row1.insertCell(3);
 cell1.innerHTML  = obj.inbox[1].message.from;
 cell2.innerHTML =obj.inbox[1].message.to;
 cell3.innerHTML =obj.inbox[1].message.subject;
 cell4.innerHTML =obj.inbox[1].message.body;
