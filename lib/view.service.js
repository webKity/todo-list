"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

require("reflect-metadata");

var _tsyringe = require("tsyringe");

var _dec, _class, _temp, _dec2, _dec3, _dec4, _class3, _temp2;

var Dom = (_dec = (0, _tsyringe.injectable)(), _dec(_class = (_temp = /*#__PURE__*/function () {
  function Dom() {
    (0, _classCallCheck2["default"])(this, Dom);
    this.inputValue = '';
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
    key: "addEvent",
    value: function addEvent(btnCallback, toggleCallback) {
      var _this = this;

      var inputElem = document.getElementById("input");
      var buttonElem = document.getElementById("button");
      var listElem = document.getElementById("list");
      inputElem === null || inputElem === void 0 ? void 0 : inputElem.addEventListener('input', function (event) {
        _this.inputValue = event.target.value;
      });
      buttonElem === null || buttonElem === void 0 ? void 0 : buttonElem.addEventListener('click', function () {
        btnCallback(_this.inputValue);
        _this.inputValue = "";
        inputElem.value = "";
      });
      listElem.addEventListener("click", function (event) {
        var target = event.target;

        if (target.className.indexOf("task-name") >= 0 || target.className.indexOf("task") >= 0) {
          var name = target.getAttribute("data-name");
          toggleCallback(name);
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.contentFactory(document.body);
    }
  }, {
    key: "update",
    value: function update(tasks) {
      var _this2 = this;

      var listElem = document.getElementById("list");
      listElem.innerHTML = "".concat(tasks.map(function (task) {
        return _this2.factory(task);
      }).join(''));
    }
  }]);
  return Dom;
}(), _temp)) || _class);
var TodoService = (_dec2 = (0, _tsyringe.injectable)(), _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof Dom === "undefined" ? Object : Dom]), _dec2(_class3 = _dec3(_class3 = _dec4(_class3 = (_temp2 = /*#__PURE__*/function () {
  function TodoService(dom) {
    (0, _classCallCheck2["default"])(this, TodoService);
    this.dom = dom;
    this.todos = [];
  }

  (0, _createClass2["default"])(TodoService, [{
    key: "init",
    value: function init() {
      var _this3 = this;

      this.dom.init();
      this.dom.addEvent(function (name) {
        return _this3.add(name);
      }, function (name) {
        return _this3.toggle(name);
      });
      this.dom.update(this.todos);
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
      this.dom.update(this.todos);
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

      this.dom.update(this.todos);
    }
  }]);
  return TodoService;
}(), _temp2)) || _class3) || _class3) || _class3);

var todoService = _tsyringe.container.resolve(TodoService);

todoService.init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOlsiRG9tIiwiaW5wdXRWYWx1ZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJ0YXNrIiwibmFtZSIsInN0YXRlIiwiYnRuQ2FsbGJhY2siLCJ0b2dnbGVDYWxsYmFjayIsImlucHV0RWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJidXR0b25FbGVtIiwibGlzdEVsZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImluZGV4T2YiLCJnZXRBdHRyaWJ1dGUiLCJjb250ZW50RmFjdG9yeSIsImJvZHkiLCJ0YXNrcyIsIm1hcCIsImZhY3RvcnkiLCJqb2luIiwiVG9kb1NlcnZpY2UiLCJkb20iLCJ0b2RvcyIsImluaXQiLCJhZGRFdmVudCIsImFkZCIsInRvZ2dsZSIsInVwZGF0ZSIsInB1c2giLCJpbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJ0b2RvU2VydmljZSIsImNvbnRhaW5lciIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUFRTUEsRyxXQURMLDJCOzs7U0FFU0MsVSxHQUFhLEU7Ozs7O21DQUVFQyxPLEVBQXNCO0FBQzNDQSxNQUFBQSxPQUFPLENBQUNDLFNBQVI7QUFhRDs7OzRCQUVlQyxJLEVBQWdCO0FBQzlCLCtEQUNpQ0EsSUFBSSxDQUFDQyxJQUR0Qyx1Q0FFa0JELElBQUksQ0FBQ0UsS0FBTCxLQUFlLENBQWYsR0FBbUIsZ0JBQW5CLEdBQXNDLFdBRnhELHVDQUdtQkYsSUFBSSxDQUFDQyxJQUh4Qiw0QkFJUUQsSUFBSSxDQUFDQyxJQUpiO0FBUUQ7Ozs2QkFFUUUsVyxFQUF1QkMsYyxFQUEwQjtBQUFBOztBQUN4RCxVQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFsQjtBQUNBLFVBQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxjQUFU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ckIsQ0FBZDs7QUFFQSxVQUFJLEtBQUt3QixLQUFMLENBQVdPLEtBQVgsRUFBa0I5QixLQUFsQixLQUE0QixDQUFoQyxFQUFtQztBQUNqQyxhQUFLdUIsS0FBTCxDQUFXTyxLQUFYLEVBQWtCOUIsS0FBbEIsR0FBMEIsQ0FBMUI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLdUIsS0FBTCxDQUFXTyxLQUFYLEVBQWtCOUIsS0FBbEIsR0FBMEIsQ0FBMUI7QUFDRDs7QUFFRCxXQUFLc0IsR0FBTCxDQUFTTSxNQUFULENBQWdCLEtBQUtMLEtBQXJCO0FBQ0Q7Ozs7O0FBR0gsSUFBTVUsV0FBVyxHQUFHQyxvQkFBVUMsT0FBVixDQUFrQmQsV0FBbEIsQ0FBcEI7O0FBQ0FZLFdBQVcsQ0FBQ1QsSUFBWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGNvbnRhaW5lciB9IGZyb20gJ3RzeXJpbmdlJztcblxuaW50ZXJmYWNlIFRvZG9JdGVtIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzdGF0ZTogMCB8IDE7XG59XG5cbkBpbmplY3RhYmxlKClcbmNsYXNzIERvbSB7XG4gIHByaXZhdGUgaW5wdXRWYWx1ZSA9ICcnO1xuXG4gIHByaXZhdGUgY29udGVudEZhY3RvcnkoY29udGVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxoMT50b2RvIGRlbW88L2gxPlxuICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJpbnB1dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXku7vliqFcIlxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgIOa3u+WKoFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImxpc3RcIj48L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBmYWN0b3J5KHRhc2s6IFRvZG9JdGVtKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCIgZGF0YS1uYW1lPVwiJHt0YXNrLm5hbWV9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCIke3Rhc2suc3RhdGUgPT09IDEgPyBcInRhc2stbmFtZSBkb25lXCIgOiBcInRhc2stbmFtZVwifVwiXG4gICAgICAgICAgZGF0YS1uYW1lPVwiJHt0YXNrLm5hbWV9XCI+XG4gICAgICAgICAgJHt0YXNrLm5hbWV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGFkZEV2ZW50KGJ0bkNhbGxiYWNrOiBGdW5jdGlvbiwgdG9nZ2xlQ2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgY29uc3QgaW5wdXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGJ1dHRvbkVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvblwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdCBsaXN0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGlucHV0RWxlbT8uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5pbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uRWxlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBidG5DYWxsYmFjayh0aGlzLmlucHV0VmFsdWUpO1xuICAgICAgdGhpcy5pbnB1dFZhbHVlID0gXCJcIjtcbiAgICAgIGlucHV0RWxlbS52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG5cbiAgICBsaXN0RWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgaWYgKFxuICAgICAgICB0YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoXCJ0YXNrLW5hbWVcIikgPj0gMCB8fFxuICAgICAgICB0YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoXCJ0YXNrXCIpID49IDBcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuYW1lID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKTtcbiAgICAgICAgdG9nZ2xlQ2FsbGJhY2sobmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuY29udGVudEZhY3RvcnkoZG9jdW1lbnQuYm9keSk7XG4gIH1cblxuICB1cGRhdGUodGFza3M6IFRvZG9JdGVtW10pIHtcbiAgICBjb25zdCBsaXN0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGxpc3RFbGVtLmlubmVySFRNTCA9IGAke3Rhc2tzLm1hcCh0YXNrID0+IHRoaXMuZmFjdG9yeSh0YXNrKSkuam9pbignJyl9YDtcbiAgfVxufVxuXG5AaW5qZWN0YWJsZSgpXG5jbGFzcyBUb2RvU2VydmljZSB7XG4gIHByaXZhdGUgdG9kb3M6IFRvZG9JdGVtW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRvbTogRG9tXG4gICkge31cblxuICBpbml0KCkge1xuICAgIHRoaXMuZG9tLmluaXQoKTtcbiAgICB0aGlzLmRvbS5hZGRFdmVudChcbiAgICAgIChuYW1lOiBzdHJpbmcpID0+IHRoaXMuYWRkKG5hbWUpLFxuICAgICAgKG5hbWU6IHN0cmluZykgPT4gdGhpcy50b2dnbGUobmFtZSlcbiAgICApO1xuICAgIHRoaXMuZG9tLnVwZGF0ZSh0aGlzLnRvZG9zKTtcbiAgfVxuXG4gIGFkZChuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAobmFtZSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9kb3MucHVzaCh7IG5hbWUsIHN0YXRlOiAwIH0pO1xuXG4gICAgdGhpcy5kb20udXBkYXRlKHRoaXMudG9kb3MpO1xuICB9XG5cbiAgdG9nZ2xlKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2Rvcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gbmFtZSk7XG5cbiAgICBpZiAodGhpcy50b2Rvc1tpbmRleF0uc3RhdGUgPT09IDApIHtcbiAgICAgIHRoaXMudG9kb3NbaW5kZXhdLnN0YXRlID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2Rvc1tpbmRleF0uc3RhdGUgPSAwO1xuICAgIH1cblxuICAgIHRoaXMuZG9tLnVwZGF0ZSh0aGlzLnRvZG9zKTtcbiAgfVxufVxuXG5jb25zdCB0b2RvU2VydmljZSA9IGNvbnRhaW5lci5yZXNvbHZlKFRvZG9TZXJ2aWNlKTtcbnRvZG9TZXJ2aWNlLmluaXQoKTsiXX0=