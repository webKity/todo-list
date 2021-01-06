import "reflect-metadata";
import { injectable, container } from 'tsyringe';

interface TodoItem {
  name: string;
  state: 0 | 1;
}

@injectable()
class Dom {
  private inputValue = '';

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

  addEvent(btnCallback: Function, toggleCallback: Function) {
    const inputElem = document.getElementById("input") as HTMLInputElement;
    const buttonElem = document.getElementById("button") as HTMLButtonElement;
    const listElem = document.getElementById("list") as HTMLElement;

    inputElem?.addEventListener('input', (event: any) => {
      this.inputValue = event.target.value;
    });

    buttonElem?.addEventListener('click', () => {
      btnCallback(this.inputValue);
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
        toggleCallback(name);
      }
    });
  }

  init() {
    this.contentFactory(document.body);
  }

  update(tasks: TodoItem[]) {
    const listElem = document.getElementById("list") as HTMLElement;

    listElem.innerHTML = `${tasks.map(task => this.factory(task)).join('')}`;
  }
}

@injectable()
class TodoService {
  private todos: TodoItem[] = [];

  constructor(
    private dom: Dom
  ) {}

  init() {
    this.dom.init();
    this.dom.addEvent(
      (name: string) => this.add(name),
      (name: string) => this.toggle(name)
    );
    this.dom.update(this.todos);
  }

  add(name: string) {
    if (name === "") {
      return;
    }

    this.todos.push({ name, state: 0 });

    this.dom.update(this.todos);
  }

  toggle(name: string) {
    const index = this.todos.findIndex((item) => item.name === name);

    if (this.todos[index].state === 0) {
      this.todos[index].state = 1;
    } else {
      this.todos[index].state = 0;
    }

    this.dom.update(this.todos);
  }
}

const todoService = container.resolve(TodoService);
todoService.init();