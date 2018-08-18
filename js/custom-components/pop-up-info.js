class PopUpInfo extends HTMLElement {

  constructor() {
    super();
    this.configureComponent();
  }

  configureComponent() {
    const style = this.createStyles();
    const component = this.createComponent();
    
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(style);
    shadow.appendChild(component);
  }

  createComponent() {
    const icon = this.createIcon();
    const info = this.createInfo();
    
    const component = document.createElement('span');
    component.setAttribute('class', 'wrapper');
    component.appendChild(icon);
    component.appendChild(info);

    return component;
  }

  createIcon() {
    const icon = document.createElement('span');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', 0);

    const img = document.createElement('img');
    img.src = this.hasAttribute('img') ? this.getAttribute('img') : 'assets/img/pop-up-info-default-icon.png';
    icon.appendChild(img);

    return icon;
  }

  createInfo() {
    const info = document.createElement('span');
    info.setAttribute('class', 'info');
    info.textContent = this.innerHTML;

    return info;
  }

  createStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        position: relative;
      }
      
      .icon {
        width: 15px;
        height: 15px;
        display: inline-block;
      }
      
      .icon img {
        width: 100%;
      }
      
      .info {
        box-sizing: border-box;
        border-radius: 5px;
        background-color: #eee;
        font-size: 0.8rem;
        padding: 8px 10px 10px;
        width: 200px;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(100%, -100%);
        overflow: hidden;
        z-index: 3;
        display: none;
      }
      
      .wrapper:hover .info {
        display: block;
      }
    `;

    return style;
  }

}

customElements.define('popup-info', PopUpInfo);
