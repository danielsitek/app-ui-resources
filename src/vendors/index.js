import jQuery from 'jquery';

window.jQuery = jQuery;
window.$ = jQuery;
window.app = {};

if (window.onDocumentReady === undefined) {
    window.onDocumentReady = [];
}

if (window.onWindowLoad === undefined) {
    window.onWindowLoad = [];
}

(() => {
    const functionLoader = (element, index, array) => {
        array[index].call(this);
    };

    // HTML/DOM is ready.
    $(() => {
        // console.log(`onDocumentReady fired at ${new Date()}`);
        window.onDocumentReady.forEach(functionLoader);
    });

    // Everything has loaded.
    window.addEventListener('load', () => {
        // console.log(`onWindowLoad fired at ${new Date()}`);
        window.onWindowLoad.forEach(functionLoader);
    });
})();
