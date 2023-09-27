import * as KeyboardUI from 'resource:///org/gnome/shell/ui/keyboard.js';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

let _originalLastDeviceIsTouchscreen;

function _modifiedLastDeviceIsTouchscreen() {
    return false;
}

function init() {

}
export default class BlockCaribou36Extension extends Extension {
    enable() {
        _originalLastDeviceIsTouchscreen = KeyboardUI.KeyboardManager.prototype._lastDeviceIsTouchscreen;
        KeyboardUI.KeyboardManager.prototype._lastDeviceIsTouchscreen = _modifiedLastDeviceIsTouchscreen;
    }

    disable() {
        KeyboardUI.KeyboardManager.prototype._lastDeviceIsTouchscreen = _originalLastDeviceIsTouchscreen;
        _originalLastDeviceIsTouchscreen = null;
    }
}