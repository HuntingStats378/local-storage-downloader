(function() {
    // Create a JSON object from the local storage
    const localStorageData = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        localStorageData[key] = localStorage.getItem(key);
    }

    // Convert the object to a JSON string
    const dataStr = JSON.stringify(localStorageData, null, 2);

    // Create a Blob from the JSON string
    const blob = new Blob([dataStr], { type: 'application/json' });

    // Create a download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'localStorageData.json';

    // Simulate clicking the download link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})();
