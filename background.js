function searchFromContextMenu(info, tab) {
    var url = "http://htmlbook.ru/sites/search/?q=" + info.selectionText;
    window.open(url);
};

chrome.contextMenus.create({
    'title': 'Искать тег/селектор',
    'contexts': ['selection'],
    'onclick': searchFromContextMenu
});