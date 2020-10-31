let txt = `
<inbox>
<message>
<from>ahmad@example.com</from>
<to>fadi@example.com</to>
<subject>Hello World!</subject>
<body>How are you?</body>
</message>
<message>
<from>fadi@example.com</from>
<to>ahmad@example.com</to>
<subject>re: Hello World!</subject>
<body>I’m fine!</body>
</message>
</inbox>
`
parser = new DOMParser();
xmlDoc = parser.parseFromString(txt,"text/xml");
let table = document.getElementById('myTable');
let row = table.insertRow(1);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);
cell1.innerHTML  = xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;
cell2.innerHTML =xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;
cell3.innerHTML =xmlDoc.getElementsByTagName("subject")[0].childNodes[0].nodeValue;
cell4.innerHTML =xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;
let row1 = table.insertRow(2);
 cell1 = row1.insertCell(0);
 cell2 = row1.insertCell(1);
 cell3 = row1.insertCell(2);
 cell4 = row1.insertCell(3);
cell1.innerHTML  = xmlDoc.getElementsByTagName("from")[1].childNodes[0].nodeValue;
cell2.innerHTML =xmlDoc.getElementsByTagName("to")[1].childNodes[0].nodeValue;
cell3.innerHTML =xmlDoc.getElementsByTagName("subject")[1].childNodes[0].nodeValue;
cell4.innerHTML =xmlDoc.getElementsByTagName("body")[1].childNodes[0].nodeValue;
