function insert_row() {
    let table = document.getElementById('sampleTable');
    let new_row = table.insertRow(0);

    let new_Cell1 = new_row.insertCell(0);
    let new_Cell2 = new_row.insertCell(1);

    new_Cell1.innerHTML = "New Cell1";
    new_Cell2.innerHTML = "New Cell2";
}
	
	
