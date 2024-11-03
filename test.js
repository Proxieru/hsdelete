function onDeleteAll() {
  alert("Deleted all history");
}

function deleteAllHistory() {
  let deletingAll = browser.history.deleteAll();
  deletingAll.then(onDeleteAll);
}

deleteAllHistory();
