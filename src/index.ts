import "reflect-metadata";
import { injectable, container } from 'tsyringe';
import './style.css';

interface TodoItem {
  name: string;
  state: 0 | 1;
}

@injectable()
class TodoService {
  private _onUpdate: ((doms: TodoItem[]) => void) | undefined;

  private todos: TodoItem[] = [];

  private update() {
    this._onUpdate && this._onUpdate(this.todos);
  }

  add(name: string) {
    if (name === "") {
      return;
    }

    this.todos.push({ name, state: 0 });

    this.update();
  }

  toggle(name: string) {
    const index = this.todos.findIndex((item) => item.name === name);

    if (this.todos[index].state === 0) {
      this.todos[index].state = 1;
    } else {
      this.todos[index].state = 0;
    }

    this.update();
  }

  onUpdate(callback: (tasks: TodoItem[]) => void) {
    typeof callback === "function" && (this._onUpdate = callback);
  }
}


@injectable()
class Dom {
  private inputValue = "";

  constructor(
    private todoService: TodoService
  ){}

  private contentFactory(content: HTMLElement) {
    content.innerHTML = `
      <h1>todo demo</h1>
      <div id="content">
        <input
          id="input"
          placeholder="请输入任务"
        />
        <button id="button" type="button">
          添加
        </button>
      </div>
      <div id="list"></div>
    `;
  }

  private factory(task: TodoItem) {
    return `
      <div class="task" data-name="${task.name}">
        <div class="${task.state === 1 ? "task-name done" : "task-name"}"
          data-name="${task.name}">
          ${task.name}
        </div>
      </div>
    `;
  }

  private update(tasks: TodoItem[]) {
    const listElem = document.getElementById("list") as HTMLElement;
    listElem.innerHTML = tasks ? tasks.map(task => this.factory(task)).join("") : "";
  }

  private addEvent() {
    const inputElem = document.getElementById("input") as HTMLInputElement;
    const buttonElem = document.getElementById("button") as HTMLButtonElement;
    const listElem = document.getElementById("list") as HTMLElement;

    inputElem?.addEventListener('input', (event: any) => {
      this.inputValue = event.target.value;
    });

    buttonElem?.addEventListener('click', () => {
      this.todoService.add(this.inputValue);

      this.inputValue = "";
      inputElem.value = "";
    });

    listElem.addEventListener("click", (event: any) => {
      const target = event.target;

      if (
        target.className.indexOf("task-name") >= 0 ||
        target.className.indexOf("task") >= 0
      ) {
        const name = target.getAttribute("data-name");

        this.todoService.toggle(name);
      }
    });
  }

  init() {
    this.contentFactory(document.body);
    this.todoService.onUpdate(this.update.bind(this));
    this.addEvent();
  }
}

const domService = container.resolve(Dom);
domService.init();