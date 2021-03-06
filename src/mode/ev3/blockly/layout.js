/**
 * @fileoverview Layout for the EV3 Blockly modification.
 *
 * @license Copyright 2015 The Coding with Chrome Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */
goog.provide('cwc.mode.ev3.blockly.Layout');

goog.require('cwc.soy.mode.ev3.blockly.Layout');


/**
 * @constructor
 * @param {!cwc.utils.Helper} helper
 */
cwc.mode.ev3.blockly.Layout = function(helper) {
  /** @type {!cwc.utils.Helper} */
  this.helper = helper;
};


/**
 * Decorates the EV3 layout.
 */
cwc.mode.ev3.blockly.Layout.prototype.decorate = function() {
  let layoutInstance = this.helper.getInstance('layout', true);
  layoutInstance.decorateDefault();
  layoutInstance.setFixRightComponentSize(400);
  layoutInstance.setHandleSize(1);
  layoutInstance.renderMiddleContent(cwc.soy.mode.ev3.blockly.Layout.editor);
  layoutInstance.renderRightContent(cwc.soy.mode.ev3.blockly.Layout.runner);
};
