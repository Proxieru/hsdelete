  document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.altKey && event.code === 'Space') {
                deleteAllHistory();
                alert("attemtping to delete hs")
            }
        });

function deleteAllHistory() {
  let deletingAll = browser.history.deleteAll();
  deletingAll.then(onDeleteAll);
}
        }
