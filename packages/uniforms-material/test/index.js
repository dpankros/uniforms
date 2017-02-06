// DOM for React
import injectTapEventPlugin from 'react-tap-event-plugin';
import {jsdom} from 'jsdom';

injectTapEventPlugin();


global.document = jsdom('');
global.window = document.defaultView;
global.navigator = window.navigator;
Object.keys(window).forEach(property => {
    if (typeof global[property] === 'undefined') {
        global[property] = window[property];
    }
});

// Mocks
const Module = require('module');
const loader = Module._load;
Module._load = function _load (request, parent) {
    return loader(
        request
            .replace(/^uniforms-material/, '../src')
            .replace(/^uniforms/, '../../uniforms/src'),
        parent
    );
};
