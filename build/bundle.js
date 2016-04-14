/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var Kefir = _interopRequire(__webpack_require__(1));

	var TodoApp = _interopRequire(__webpack_require__(2));

	React.render(React.createElement(TodoApp, null), document.getElementById("todoapp"));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Kefir;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(3));

	var Footer = _interopRequire(__webpack_require__(4));

	var Header = _interopRequire(__webpack_require__(9));

	var MainSection = _interopRequire(__webpack_require__(11));

	var TodoStore = _interopRequire(__webpack_require__(13));

	var TodoApp = (function (_React$Component) {
	    function TodoApp(props) {
	        _classCallCheck(this, TodoApp);

	        _get(Object.getPrototypeOf(TodoApp.prototype), "constructor", this).call(this, props);

	        this.state = {
	            allTodos: {},
	            areAllComplete: true
	        };

	        this.onTodosChange = this.onTodosChange.bind(this);
	        this.onAllCompleteChange = this.onAllCompleteChange.bind(this);
	    }

	    _inherits(TodoApp, _React$Component);

	    _createClass(TodoApp, {
	        componentDidMount: {
	            value: function componentDidMount() {
	                TodoStore.todosStream.onValue(this.onTodosChange);
	                TodoStore.areAllCompleteStream.onValue(this.onAllCompleteChange);
	            }
	        },
	        componentWillUnmount: {
	            value: function componentWillUnmount() {
	                TodoStore.todosStream.offValue(this.onTodosChange);
	                TodoStore.areAllCompleteStream.offValue(this.onAllCompleteChange);
	            }
	        },
	        onTodosChange: {
	            value: function onTodosChange(newTodos) {
	                this.setState({ allTodos: newTodos });
	            }
	        },
	        onAllCompleteChange: {
	            value: function onAllCompleteChange(newAllComplete) {
	                this.setState({ areAllComplete: newAllComplete });
	            }
	        },
	        render: {
	            value: function render() {
	                return React.createElement(
	                    "div",
	                    null,
	                    React.createElement(Header, null),
	                    React.createElement(MainSection, {
	                        allTodos: this.state.allTodos,
	                        areAllComplete: this.state.areAllComplete
	                    }),
	                    React.createElement(Footer, { allTodos: this.state.allTodos })
	                );
	            }
	        }
	    });

	    return TodoApp;
	})(React.Component);

	module.exports = TodoApp;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(3));

	var TodoActions = _interopRequire(__webpack_require__(5));

	var Footer = (function (_React$Component) {
	    function Footer() {
	        _classCallCheck(this, Footer);

	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }

	    _inherits(Footer, _React$Component);

	    _createClass(Footer, {
	        render: {
	            value: function render() {
	                var allTodos = this.props.allTodos;
	                var total = Object.keys(allTodos).length;
	                if (total === 0) {
	                    return null;
	                }
	                var completed = 0;
	                for (var key in allTodos) {
	                    if (allTodos[key].complete) {
	                        completed++;
	                    }
	                }
	                var itemsLeft = total - completed;
	                var itemsLeftPhrase = itemsLeft === 1 ? " item " : " items ";
	                itemsLeftPhrase += "left";
	                // Undefined and thus not rendered if no completed items are left.
	                var clearCompletedButton;
	                if (completed) {
	                    clearCompletedButton = React.createElement(
	                        "button",
	                        {
	                            id: "clear-completed",
	                            onClick: this._onClearCompletedClick },
	                        "Clear completed (",
	                        completed,
	                        ")"
	                    );
	                }
	                return React.createElement(
	                    "footer",
	                    { id: "footer" },
	                    React.createElement(
	                        "span",
	                        { id: "todo-count" },
	                        React.createElement(
	                            "strong",
	                            null,
	                            itemsLeft
	                        ),
	                        itemsLeftPhrase
	                    ),
	                    clearCompletedButton
	                );
	            }
	        },
	        _onClearCompletedClick: {

	            /**
	             * Event handler to delete all completed TODOs
	             */

	            value: function _onClearCompletedClick() {
	                TodoActions.destroyCompleted();
	            }
	        }
	    });

	    return Footer;
	})(React.Component);

	module.exports = Footer;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var AppDispatcher = _interopRequire(__webpack_require__(6));

	var TodoConstants = _interopRequire(__webpack_require__(7));

	module.exports = {
	    /**
	     * @param {string} text
	     */
	    create: function create(text) {
	        AppDispatcher.emit({
	            actionType: TodoConstants.TODO_CREATE,
	            text: text
	        });
	    },
	    /**
	     * @param {string} id The ID of the ToDo item
	     * @param {string} text
	     */
	    updateText: function updateText(id, text) {
	        AppDispatcher.emit({
	            actionType: TodoConstants.TODO_UPDATE_TEXT,
	            id: id,
	            text: text
	        });
	    },
	    /**
	     * Toggle whether a single ToDo is complete
	     * @param {object} todo
	     */
	    toggleComplete: function toggleComplete(todo) {
	        var id = todo.id;
	        if (todo.complete) {
	            AppDispatcher.emit({
	                actionType: TodoConstants.TODO_UNDO_COMPLETE,
	                id: id
	            });
	        } else {
	            AppDispatcher.emit({
	                actionType: TodoConstants.TODO_COMPLETE,
	                id: id
	            });
	        }
	    },
	    /**
	     * Mark all ToDos as complete
	     */
	    toggleCompleteAll: function toggleCompleteAll() {
	        AppDispatcher.emit({
	            actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
	        });
	    },
	    /**
	     * @param {string} id
	     */
	    destroy: function destroy(id) {
	        AppDispatcher.emit({
	            actionType: TodoConstants.TODO_DESTROY,
	            id: id
	        });
	    },
	    /**
	     * Delete all the completed ToDos
	     */
	    destroyCompleted: function destroyCompleted() {
	        AppDispatcher.emit({
	            actionType: TodoConstants.TODO_DESTROY_COMPLETED
	        });
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var Kefir = _interopRequire(__webpack_require__(1));

	module.exports = Kefir.emitter();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var keyMirror = _interopRequire(__webpack_require__(8));

	module.exports = keyMirror({
	    TODO_CREATE: null,
	    TODO_COMPLETE: null,
	    TODO_DESTROY: null,
	    TODO_DESTROY_COMPLETED: null,
	    TODO_TOGGLE_COMPLETE_ALL: null,
	    TODO_UNDO_COMPLETE: null,
	    TODO_UPDATE_TEXT: null
	});

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	"use strict";

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(3));

	var TodoActions = _interopRequire(__webpack_require__(5));

	var TodoTextInput = _interopRequire(__webpack_require__(10));

	var Header = (function (_React$Component) {
	    function Header() {
	        _classCallCheck(this, Header);

	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }

	    _inherits(Header, _React$Component);

	    _createClass(Header, {
	        render: {
	            value: function render() {
	                return React.createElement(
	                    "header",
	                    { id: "header" },
	                    React.createElement(
	                        "h1",
	                        null,
	                        "todos"
	                    ),
	                    React.createElement(TodoTextInput, {
	                        id: "new-todo",
	                        placeholder: "What needs to be done?",
	                        onSave: this._onSave
	                    })
	                );
	            }
	        },
	        _onSave: {

	            /**
	             * Event handler called within TodoTextInput.
	             * Defining this here allows TodoTextInput to be used in multiple places
	             * in different ways.
	             * @param {string} text
	             */

	            value: function _onSave(text) {
	                if (text.trim()) {
	                    TodoActions.create(text);
	                }
	            }
	        }
	    });

	    return Header;
	})(React.Component);

	module.exports = Header;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(3));

	var ENTER_KEY_CODE = 13;

	var TodoTextInput = (function (_React$Component) {
	    function TodoTextInput(props) {
	        _classCallCheck(this, TodoTextInput);

	        _get(Object.getPrototypeOf(TodoTextInput.prototype), "constructor", this).call(this, props);

	        this.state = {
	            value: this.props.value || ""
	        };
	    }

	    _inherits(TodoTextInput, _React$Component);

	    _createClass(TodoTextInput, {
	        render: {
	            value: function render() {
	                return React.createElement("input", {
	                    className: this.props.className,
	                    id: this.props.id,
	                    placeholder: this.props.placeholder,
	                    onBlur: this._save.bind(this),
	                    onChange: this._onChange.bind(this),
	                    onKeyDown: this._onKeyDown.bind(this),
	                    value: this.state.value,
	                    autoFocus: true
	                });
	            }
	        },
	        _save: {

	            /**
	             * Invokes the callback passed in as onSave, allowing this component to be
	             * used in different ways.
	             */

	            value: function _save() {
	                this.props.onSave(this.state.value);
	                this.setState({
	                    value: ""
	                });
	            }
	        },
	        _onChange: {
	            value: function _onChange(event) {
	                this.setState({
	                    value: event.target.value
	                });
	            }
	        },
	        _onKeyDown: {
	            value: function _onKeyDown(event) {
	                if (event.keyCode === ENTER_KEY_CODE) {
	                    this._save();
	                }
	            }
	        }
	    });

	    return TodoTextInput;
	})(React.Component);

	module.exports = TodoTextInput;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(3));

	var TodoActions = _interopRequire(__webpack_require__(5));

	var TodoItem = _interopRequire(__webpack_require__(12));

	var MainSection = (function (_React$Component) {
	    function MainSection() {
	        _classCallCheck(this, MainSection);

	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }

	    _inherits(MainSection, _React$Component);

	    _createClass(MainSection, {
	        render: {
	            value: function render() {
	                // This section should be hidden by default
	                // and shown when there are todos.
	                if (Object.keys(this.props.allTodos).length < 1) {
	                    return null;
	                }
	                var allTodos = this.props.allTodos;
	                var todos = [];
	                for (var key in allTodos) {
	                    todos.push(React.createElement(TodoItem, { key: key, todo: allTodos[key] }));
	                }
	                return React.createElement(
	                    "section",
	                    { id: "main" },
	                    React.createElement("input", {
	                        id: "toggle-all",
	                        type: "checkbox",
	                        onChange: this._onToggleCompleteAll,
	                        checked: this.props.areAllComplete ? "checked" : ""
	                    }),
	                    React.createElement(
	                        "label",
	                        { htmlFor: "toggle-all" },
	                        "Mark all as complete"
	                    ),
	                    React.createElement(
	                        "ul",
	                        { id: "todo-list" },
	                        todos
	                    )
	                );
	            }
	        },
	        _onToggleCompleteAll: {

	            /**
	             * Event handler to mark all TODOs as complete
	             */

	            value: function _onToggleCompleteAll() {
	                TodoActions.toggleCompleteAll();
	            }
	        }
	    });

	    return MainSection;
	})(React.Component);

	module.exports = MainSection;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(3));

	var TodoActions = _interopRequire(__webpack_require__(5));

	var TodoTextInput = _interopRequire(__webpack_require__(10));

	var TodoItem = (function (_React$Component) {
	    function TodoItem(props) {
	        _classCallCheck(this, TodoItem);

	        _get(Object.getPrototypeOf(TodoItem.prototype), "constructor", this).call(this, props);

	        this.state = {
	            isEditing: false
	        };
	    }

	    _inherits(TodoItem, _React$Component);

	    _createClass(TodoItem, {
	        componentDidUpdate: {
	            value: function componentDidUpdate(prevProps, prevState) {
	                console.log("Inside ComponentDidUpdate");
	                console.log(prevProps);
	                console.log(this.props);
	            }
	        },
	        render: {
	            value: function render() {
	                var todo = this.props.todo;
	                var input;
	                if (this.state.isEditing) {
	                    input = React.createElement(TodoTextInput, {
	                        className: "edit",
	                        onSave: this._onSave.bind(this),
	                        value: todo.text
	                    });
	                }

	                // List items should get the class 'editing' when editing
	                // and 'completed' when marked as completed.
	                // Note that 'completed' is a classification while 'complete' is a state.
	                // This differentiation between classification and state becomes important
	                // in the naming of view actions toggleComplete() vs. destroyCompleted().
	                var className = "";
	                if (todo.complete) {
	                    className += "completed";
	                }
	                if (this.state.isEditing) {
	                    className += " editing";
	                }
	                className = className.trim();

	                return React.createElement(
	                    "li",
	                    { className: className, key: todo.id },
	                    React.createElement(
	                        "div",
	                        { className: "view" },
	                        React.createElement("input", {
	                            className: "toggle",
	                            type: "checkbox",
	                            checked: todo.complete,
	                            onChange: this._onToggleComplete.bind(this)
	                        }),
	                        React.createElement(
	                            "label",
	                            { onDoubleClick: this._onDoubleClick.bind(this) },
	                            todo.text
	                        ),
	                        React.createElement("button", { className: "destroy", onClick: this._onDestroyClick.bind(this) })
	                    ),
	                    input
	                );
	            }
	        },
	        _onToggleComplete: {
	            value: function _onToggleComplete() {
	                TodoActions.toggleComplete(this.props.todo);
	            }
	        },
	        _onDoubleClick: {
	            value: function _onDoubleClick() {
	                this.setState({ isEditing: true });
	            }
	        },
	        _onSave: {

	            /**
	             * Event handler called within TodoTextInput.
	             * Defining this here allows TodoTextInput to be used in multiple places
	             * in different ways.
	             * @param {string} text
	             */

	            value: function _onSave(text) {
	                TodoActions.updateText(this.props.todo.id, text);
	                this.setState({ isEditing: false });
	            }
	        },
	        _onDestroyClick: {
	            value: function _onDestroyClick() {
	                TodoActions.destroy(this.props.todo.id);
	            }
	        }
	    });

	    return TodoItem;
	})(React.Component);

	module.exports = TodoItem;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var AppDispatcher = _interopRequire(__webpack_require__(6));

	var TodoConstants = _interopRequire(__webpack_require__(7));

	var createActionsStream = AppDispatcher.filter(function (action) {
	    return action.actionType === TodoConstants.TODO_CREATE;
	}).map(function (action) {
	    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	    return {
	        id: id,
	        complete: false,
	        text: action.text
	    };
	}).map(function (todo) {
	    return function (todos) {
	        todos[todo.id] = todo;
	        return todos;
	    };
	});

	var updateActionsStream = AppDispatcher.filter(function (action) {
	    return action.actionType === TodoConstants.TODO_UPDATE_TEXT;
	}).map(function (action) {
	    return function (todos) {
	        todos[action.id].text = action.text;
	        return todos;
	    };
	});

	var undoCompleteActionsStream = AppDispatcher.filter(function (action) {
	    return action.actionType === TodoConstants.TODO_UNDO_COMPLETE;
	}).map(function (action) {
	    return function (todos) {
	        todos[action.id].complete = false;
	        return todos;
	    };
	});

	var doCompleteActionsStream = AppDispatcher.filter(function (action) {
	    return action.actionType === TodoConstants.TODO_COMPLETE;
	}).map(function (action) {
	    return function (todos) {
	        todos[action.id].complete = true;
	        return todos;
	    };
	});

	var togleCompleteAllActionsStream = AppDispatcher.filter(function (action) {
	    return action.actionType === TodoConstants.TODO_TOGGLE_COMPLETE_ALL;
	}).map(function (action) {
	    return function (todos) {
	        for (var id in todos) {
	            todos[id].complete = true;
	        }
	        return todos;
	    };
	});

	var destroyActionsStream = AppDispatcher.filter(function (action) {
	    return action.actionType === TodoConstants.TODO_DESTROY;
	}).map(function (action) {
	    return function (todos) {
	        delete todos[action.id];
	        return todos;
	    };
	});

	var destroyCompletedActionsStream = AppDispatcher.filter(function (action) {
	    return action.actionType === TodoConstants.TODO_DESTROY_COMPLETED;
	}).map(function (action) {
	    return function (todos) {
	        for (var id in todos) {
	            if (todos[id].complete) {
	                delete todos[id];
	            }
	        }
	        return todos;
	    };
	});

	var todosStream = Kefir.merge([createActionsStream, updateActionsStream, undoCompleteActionsStream, doCompleteActionsStream, togleCompleteAllActionsStream, destroyActionsStream, destroyCompletedActionsStream]).scan(function (prevTodos, modificationFunc) {
	    return modificationFunc(prevTodos);
	}, {});

	var areAllCompleteStream = todosStream.map(function (todos) {
	    for (var id in todos) {
	        if (!todos[id].complete) {
	            return false;
	        }
	    }
	    return true;
	}).skipDuplicates();

	module.exports = {
	    todosStream: todosStream,
	    areAllCompleteStream: areAllCompleteStream
	};

/***/ }
/******/ ]);