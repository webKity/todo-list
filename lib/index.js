"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

require("reflect-metadata");

var _tsyringe = require("tsyringe");

require("./style.css");

var _dec, _class, _temp, _dec2, _dec3, _dec4, _class3, _temp2;

var TodoService = (_dec = (0, _tsyringe.injectable)(), _dec(_class = (_temp = /*#__PURE__*/function () {
  function TodoService() {
    (0, _classCallCheck2["default"])(this, TodoService);
    this._onUpdate = void 0;
    this.todos = [];
  }

  (0, _createClass2["default"])(TodoService, [{
    key: "update",
    value: function update() {
      this._onUpdate && this._onUpdate(this.todos);
    }
  }, {
    key: "add",
    value: function add(name) {
      if (name === "") {
        return;
      }

      this.todos.push({
        name: name,
        state: 0
      });
      this.update();
    }
  }, {
    key: "toggle",
    value: function toggle(name) {
      var index = this.todos.findIndex(function (item) {
        return item.name === name;
      });

      if (this.todos[index].state === 0) {
        this.todos[index].state = 1;
      } else {
        this.todos[index].state = 0;
      }

      this.update();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(callback) {
      typeof callback === "function" && (this._onUpdate = callback);
    }
  }]);
  return TodoService;
}(), _temp)) || _class);
var Dom = (_dec2 = (0, _tsyringe.injectable)(), _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof TodoService === "undefined" ? Object : TodoService]), _dec2(_class3 = _dec3(_class3 = _dec4(_class3 = (_temp2 = /*#__PURE__*/function () {
  function Dom(todoService) {
    (0, _classCallCheck2["default"])(this, Dom);
    this.todoService = todoService;
    this.inputValue = "";
  }

  (0, _createClass2["default"])(Dom, [{
    key: "contentFactory",
    value: function contentFactory(content) {
      content.innerHTML = "\n      <h1>todo demo</h1>\n      <div id=\"content\">\n        <input\n          id=\"input\"\n          placeholder=\"\u8BF7\u8F93\u5165\u4EFB\u52A1\"\n        />\n        <button id=\"button\" type=\"button\">\n          \u6DFB\u52A0\n        </button>\n      </div>\n      <div id=\"list\"></div>\n    ";
    }
  }, {
    key: "factory",
    value: function factory(task) {
      return "\n      <div class=\"task\" data-name=\"".concat(task.name, "\">\n        <div class=\"").concat(task.state === 1 ? "task-name done" : "task-name", "\"\n          data-name=\"").concat(task.name, "\">\n          ").concat(task.name, "\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "update",
    value: function update(tasks) {
      var _this = this;

      var listElem = document.getElementById("list");
      listElem.innerHTML = tasks ? tasks.map(function (task) {
        return _this.factory(task);
      }).join("") : "";
    }
  }, {
    key: "addEvent",
    value: function addEvent() {
      var _this2 = this;

      var inputElem = document.getElementById("input");
      var buttonElem = document.getElementById("button");
      var listElem = document.getElementById("list");
      inputElem === null || inputElem === void 0 ? void 0 : inputElem.addEventListener('input', function (event) {
        _this2.inputValue = event.target.value;
      });
      buttonElem === null || buttonElem === void 0 ? void 0 : buttonElem.addEventListener('click', function () {
        _this2.todoService.add(_this2.inputValue);

        _this2.inputValue = "";
        inputElem.value = "";
      });
      listElem.addEventListener("click", function (event) {
        var target = event.target;

        if (target.className.indexOf("task-name") >= 0 || target.className.indexOf("task") >= 0) {
          var name = target.getAttribute("data-name");

          _this2.todoService.toggle(name);
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.contentFactory(document.body);
      this.todoService.onUpdate(this.update.bind(this));
      this.addEvent();
    }
  }]);
  return Dom;
}(), _temp2)) || _class3) || _class3) || _class3);

var domService = _tsyringe.container.resolve(Dom);

domService.init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJUb2RvU2VydmljZSIsIl9vblVwZGF0ZSIsInRvZG9zIiwibmFtZSIsInB1c2giLCJzdGF0ZSIsInVwZGF0ZSIsImluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsImNhbGxiYWNrIiwiRG9tIiwidG9kb1NlcnZpY2UiLCJpbnB1dFZhbHVlIiwiY29udGVudCIsImlubmVySFRNTCIsInRhc2siLCJ0YXNrcyIsImxpc3RFbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1hcCIsImZhY3RvcnkiLCJqb2luIiwiaW5wdXRFbGVtIiwiYnV0dG9uRWxlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYWRkIiwiY2xhc3NOYW1lIiwiaW5kZXhPZiIsImdldEF0dHJpYnV0ZSIsInRvZ2dsZSIsImNvbnRlbnRGYWN0b3J5IiwiYm9keSIsIm9uVXBkYXRlIiwiYmluZCIsImFkZEV2ZW50IiwiZG9tU2VydmljZSIsImNvbnRhaW5lciIsInJlc29sdmUiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0lBUU1BLFcsV0FETCwyQjs7O1NBRVNDLFM7U0FFQUMsSyxHQUFvQixFOzs7Ozs2QkFFWDtBQUNmLFdBQUtELFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxDQUFlLEtBQUtDLEtBQXBCLENBQWxCO0FBQ0Q7Ozt3QkFFR0MsSSxFQUFjO0FBQ2hCLFVBQUlBLElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ2Y7QUFDRDs7QUFFRCxXQUFLRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0I7QUFBRUQsUUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFFLFFBQUFBLEtBQUssRUFBRTtBQUFmLE9BQWhCO0FBRUEsV0FBS0MsTUFBTDtBQUNEOzs7MkJBRU1ILEksRUFBYztBQUNuQixVQUFNSSxLQUFLLEdBQUcsS0FBS0wsS0FBTCxDQUFXTSxTQUFYLENBQXFCLFVBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNOLElBQUwsS0FBY0EsSUFBeEI7QUFBQSxPQUFyQixDQUFkOztBQUVBLFVBQUksS0FBS0QsS0FBTCxDQUFXSyxLQUFYLEVBQWtCRixLQUFsQixLQUE0QixDQUFoQyxFQUFtQztBQUNqQyxhQUFLSCxLQUFMLENBQVdLLEtBQVgsRUFBa0JGLEtBQWxCLEdBQTBCLENBQTFCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0gsS0FBTCxDQUFXSyxLQUFYLEVBQWtCRixLQUFsQixHQUEwQixDQUExQjtBQUNEOztBQUVELFdBQUtDLE1BQUw7QUFDRDs7OzZCQUVRSSxRLEVBQXVDO0FBQzlDLGFBQU9BLFFBQVAsS0FBb0IsVUFBcEIsS0FBbUMsS0FBS1QsU0FBTCxHQUFpQlMsUUFBcEQ7QUFDRDs7OztJQUtHQyxHLFlBREwsMkI7QUFJQyxlQUNVQyxXQURWLEVBRUM7QUFBQTtBQUFBLFNBRFNBLFdBQ1QsR0FEU0EsV0FDVDtBQUFBLFNBSk9DLFVBSVAsR0FKb0IsRUFJcEI7QUFBRTs7OzttQ0FFb0JDLE8sRUFBc0I7QUFDM0NBLE1BQUFBLE9BQU8sQ0FBQ0MsU0FBUjtBQWFEOzs7NEJBRWVDLEksRUFBZ0I7QUFDOUIsK0RBQ2lDQSxJQUFJLENBQUNiLElBRHRDLHVDQUVrQmEsSUFBSSxDQUFDWCxLQUFMLEtBQWUsQ0FBZixHQUFtQixnQkFBbkIsR0FBc0MsV0FGeEQsdUNBR21CVyxJQUFJLENBQUNiLElBSHhCLDRCQUlRYSxJQUFJLENBQUNiLElBSmI7QUFRRDs7OzJCQUVjYyxLLEVBQW1CO0FBQUE7O0FBQ2hDLFVBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWpCO0FBQ0FGLE1BQUFBLFFBQVEsQ0FBQ0gsU0FBVCxHQUFxQkUsS0FBSyxHQUFHQSxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFBTCxJQUFJO0FBQUEsZUFBSSxLQUFJLENBQUNNLE9BQUwsQ0FBYU4sSUFBYixDQUFKO0FBQUEsT0FBZCxFQUFzQ08sSUFBdEMsQ0FBMkMsRUFBM0MsQ0FBSCxHQUFvRCxFQUE5RTtBQUNEOzs7K0JBRWtCO0FBQUE7O0FBQ2pCLFVBQU1DLFNBQVMsR0FBR0wsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWxCO0FBQ0EsVUFBTUssVUFBVSxHQUFHTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBbkI7QUFDQSxVQUFNRixRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFqQjtBQUVBSSxNQUFBQSxTQUFTLFNBQVQsSUFBQUEsU0FBUyxXQUFULFlBQUFBLFNBQVMsQ0FBRUUsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBQ0MsS0FBRCxFQUFnQjtBQUNuRCxRQUFBLE1BQUksQ0FBQ2QsVUFBTCxHQUFrQmMsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQS9CO0FBQ0QsT0FGRDtBQUlBSixNQUFBQSxVQUFVLFNBQVYsSUFBQUEsVUFBVSxXQUFWLFlBQUFBLFVBQVUsQ0FBRUMsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBTTtBQUMxQyxRQUFBLE1BQUksQ0FBQ2QsV0FBTCxDQUFpQmtCLEdBQWpCLENBQXFCLE1BQUksQ0FBQ2pCLFVBQTFCOztBQUVBLFFBQUEsTUFBSSxDQUFDQSxVQUFMLEdBQWtCLEVBQWxCO0FBQ0FXLFFBQUFBLFNBQVMsQ0FBQ0ssS0FBVixHQUFrQixFQUFsQjtBQUNELE9BTEQ7QUFPQVgsTUFBQUEsUUFBUSxDQUFDUSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxLQUFELEVBQWdCO0FBQ2pELFlBQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFyQjs7QUFFQSxZQUNFQSxNQUFNLENBQUNHLFNBQVAsQ0FBaUJDLE9BQWpCLENBQXlCLFdBQXpCLEtBQXlDLENBQXpDLElBQ0FKLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkMsT0FBakIsQ0FBeUIsTUFBekIsS0FBb0MsQ0FGdEMsRUFHRTtBQUNBLGNBQU03QixJQUFJLEdBQUd5QixNQUFNLENBQUNLLFlBQVAsQ0FBb0IsV0FBcEIsQ0FBYjs7QUFFQSxVQUFBLE1BQUksQ0FBQ3JCLFdBQUwsQ0FBaUJzQixNQUFqQixDQUF3Qi9CLElBQXhCO0FBQ0Q7QUFDRixPQVhEO0FBWUQ7OzsyQkFFTTtBQUNMLFdBQUtnQyxjQUFMLENBQW9CaEIsUUFBUSxDQUFDaUIsSUFBN0I7QUFDQSxXQUFLeEIsV0FBTCxDQUFpQnlCLFFBQWpCLENBQTBCLEtBQUsvQixNQUFMLENBQVlnQyxJQUFaLENBQWlCLElBQWpCLENBQTFCO0FBQ0EsV0FBS0MsUUFBTDtBQUNEOzs7OztBQUdILElBQU1DLFVBQVUsR0FBR0Msb0JBQVVDLE9BQVYsQ0FBa0IvQixHQUFsQixDQUFuQjs7QUFDQTZCLFVBQVUsQ0FBQ0csSUFBWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGNvbnRhaW5lciB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbnRlcmZhY2UgVG9kb0l0ZW0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHN0YXRlOiAwIHwgMTtcbn1cblxuQGluamVjdGFibGUoKVxuY2xhc3MgVG9kb1NlcnZpY2Uge1xuICBwcml2YXRlIF9vblVwZGF0ZTogKChkb21zOiBUb2RvSXRlbVtdKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcblxuICBwcml2YXRlIHRvZG9zOiBUb2RvSXRlbVtdID0gW107XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKSB7XG4gICAgdGhpcy5fb25VcGRhdGUgJiYgdGhpcy5fb25VcGRhdGUodGhpcy50b2Rvcyk7XG4gIH1cblxuICBhZGQobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKG5hbWUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRvZG9zLnB1c2goeyBuYW1lLCBzdGF0ZTogMCB9KTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB0b2dnbGUobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRvZG9zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcblxuICAgIGlmICh0aGlzLnRvZG9zW2luZGV4XS5zdGF0ZSA9PT0gMCkge1xuICAgICAgdGhpcy50b2Rvc1tpbmRleF0uc3RhdGUgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZG9zW2luZGV4XS5zdGF0ZSA9IDA7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIG9uVXBkYXRlKGNhbGxiYWNrOiAodGFza3M6IFRvZG9JdGVtW10pID0+IHZvaWQpIHtcbiAgICB0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiAmJiAodGhpcy5fb25VcGRhdGUgPSBjYWxsYmFjayk7XG4gIH1cbn1cblxuXG5AaW5qZWN0YWJsZSgpXG5jbGFzcyBEb20ge1xuICBwcml2YXRlIGlucHV0VmFsdWUgPSBcIlwiO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdG9kb1NlcnZpY2U6IFRvZG9TZXJ2aWNlXG4gICl7fVxuXG4gIHByaXZhdGUgY29udGVudEZhY3RvcnkoY29udGVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxoMT50b2RvIGRlbW88L2gxPlxuICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJpbnB1dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXku7vliqFcIlxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgIOa3u+WKoFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImxpc3RcIj48L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBmYWN0b3J5KHRhc2s6IFRvZG9JdGVtKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCIgZGF0YS1uYW1lPVwiJHt0YXNrLm5hbWV9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCIke3Rhc2suc3RhdGUgPT09IDEgPyBcInRhc2stbmFtZSBkb25lXCIgOiBcInRhc2stbmFtZVwifVwiXG4gICAgICAgICAgZGF0YS1uYW1lPVwiJHt0YXNrLm5hbWV9XCI+XG4gICAgICAgICAgJHt0YXNrLm5hbWV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKHRhc2tzOiBUb2RvSXRlbVtdKSB7XG4gICAgY29uc3QgbGlzdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgbGlzdEVsZW0uaW5uZXJIVE1MID0gdGFza3MgPyB0YXNrcy5tYXAodGFzayA9PiB0aGlzLmZhY3RvcnkodGFzaykpLmpvaW4oXCJcIikgOiBcIlwiO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRFdmVudCgpIHtcbiAgICBjb25zdCBpbnB1dEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgYnV0dG9uRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0XCIpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgaW5wdXRFbGVtPy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfSk7XG5cbiAgICBidXR0b25FbGVtPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMudG9kb1NlcnZpY2UuYWRkKHRoaXMuaW5wdXRWYWx1ZSk7XG5cbiAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IFwiXCI7XG4gICAgICBpbnB1dEVsZW0udmFsdWUgPSBcIlwiO1xuICAgIH0pO1xuXG4gICAgbGlzdEVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudDogYW55KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKFwidGFzay1uYW1lXCIpID49IDAgfHxcbiAgICAgICAgdGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKFwidGFza1wiKSA+PSAwXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik7XG5cbiAgICAgICAgdGhpcy50b2RvU2VydmljZS50b2dnbGUobmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuY29udGVudEZhY3RvcnkoZG9jdW1lbnQuYm9keSk7XG4gICAgdGhpcy50b2RvU2VydmljZS5vblVwZGF0ZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmFkZEV2ZW50KCk7XG4gIH1cbn1cblxuY29uc3QgZG9tU2VydmljZSA9IGNvbnRhaW5lci5yZXNvbHZlKERvbSk7XG5kb21TZXJ2aWNlLmluaXQoKTsiXX0=