import { create } from "jss";
import preset from "jss-preset-default";
import isolate from "jss-isolate";

import { getFirstElementChild, simplifyWhiteSpace } from '../utils/utils';
import styles from './styles';

const jss = create(preset());
jss.use(isolate({reset: "all"}));

const { classes: style }  = jss.createStyleSheet(styles).attach();

let buttonId = 0;

const buttonTemplate = `
  <button class="${style.button}"></button>
`;

class Button {
  static generateId() {
    buttonId += 1;
    return `button${buttonId - 1}`;
  }

  set id(x) {
    this.node.setAttribute("id", `button_${x}`);
    this.props.id = x;
  }

  get id() {
    return this.props.id;
  }

  set isSubmitButton(x) {
    this.props.isSubmitButton = x;
    if (x === true) this.node.setAttribute("type", "submit");
    else this.node.setAttribute("type", "button");
  }

  get isSubmitButton() {
    return this.props.isSubmitButton;
  }

  set isPrimary(x) {
    this.props.isPrimary = x;
    if (x === true) {
      this.node.classList.add(style.buttonPrimary);
    } else {
      this.node.classList.remove(style.buttonPrimary);
    }
  }

  set isSmall(x) {
    this.props.isSmall = x;
    if (x === true) {
      this.node.classList.add(style.buttonSmall);
    } else {
      this.node.classList.remove(style.buttonSmall);
    }
  }

  set isDisabled(x) {
    if (x === "disabled" || x === true) {
      this.node.setAttribute("disabled", "disabled");
    } else if (x === false) {
      this.node.removeAttribute("disabled");
    }
    this.props.isDisabled = x;
  }

  get isDisabled() {
    return this.props.isDisabled;
  }

  set title(text) {
    let index = 0;
    for (index = 0; index < this.node.childNodes.length; index += 1) {
      if (this.node.childNodes[index].nodeType === 3) {
        this.node.replaceChild(
          document.createTextNode(text),
          this.node.childNodes[index]
        );
        break;
      }
    }
    if (index === this.node.childNodes.length) {
      // TODO:
      // Once jsdom supports node.insertAdjacentElement stop
      // using insertAdjacentHTML :)

      // const titleDiv = document.createElement("div");
      // const titleText = document.createTextNode(text);
      // titleDiv.appendChild(titleText);
      // this.node.insertAdjacentElement("afterbegin", titleDiv);

      this.node.insertAdjacentHTML('afterbegin', `<div>${simplifyWhiteSpace(text)}</div>`);
    }
    this.props.title = text;
  }

  get title() {
    return this.props.title;
  }

  set className(x) {
    if (x !== "") {
      const arr = x.split(" ");
      arr.forEach(y => {
        this.node.classList.add(y);
      });
      this.props.className = x;
    }
  }

  get className() {
    return this.props.className;
  }

  set onClick(x) {
    this.node.removeEventListener("click", this.props.onClick);
    this.node.addEventListener("click", x);
    this.props.onClick = x;
  }

  get onClick() {
    return this.props.onClick;
  }

  set isLoading(x) {
    this.props.isLoading = x;
    if (x) {
      this.node.classList.add(style.loading);
      this.node.setAttribute("aria-busy", "true");
    } else {
      this.node.classList.remove(style.loading);
      this.node.setAttribute("aria-busy", "false");
    }
  }

  constructor(placeholderSelector) {
    this.defaultProps = {
      id: Button.generateId(),
      onClick: () => {},
      isSubmitButton: false,
      isDisabled: false,
      isPrimary: false,
      isSmall: false,
      isLoading: false,
      title: "",
      className: "",
      placeholderSelector
    };

    if (document.querySelector(placeholderSelector) !== null) {
      console.log('querySelector: ', placeholderSelector);
      console.log(document.querySelector(placeholderSelector));
      this.node = document.querySelector(placeholderSelector);
    } else {
      console.error(
        `${placeholderSelector} doesn't exist in document. Please pass a valid container selector to button component`
      );
    }
  }

  render(props) {
    const buttonFragment = document
      .createRange()
      .createContextualFragment(buttonTemplate);

    const buttonTemp = this.node;
    this.node = getFirstElementChild(buttonFragment);

    this.props = { ...this.defaultProps, ...props };
    this.id = this.props.id;
    this.onClick = this.props.onClick;
    this.isSubmitButton = this.props.isSubmitButton;
    this.isDisabled = this.props.isDisabled;
    this.title = this.props.title;
    this.isPrimary = this.props.isPrimary;
    this.isSmall = this.props.isSmall;
    this.className = this.props.className;
    this.isLoading = this.props.isLoading;

    buttonTemp.parentNode.replaceChild(this.node, buttonTemp);
  }
}

export default Button;
