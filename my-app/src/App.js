import logo from "./logo.svg";
import "./App.css";
// import { createElement } from "react";

export const App = () => {
	const appBlock = createNewElement("div", "App");
	const appHeaderBlock = createNewElement("header", "App-header");
	const appLogoBlock = createNewElement("img", "App-logo");
	appLogoBlock.setAttribute("src", `${logo}`);
	appLogoBlock.setAttribute("alt", "logo");
	const logoLinck = document.createElement("p");
	logoLinck.innerHTML =
		"<p>Edit <code>src/App.js</code> and save to reload.</p>";
	const appLinkBlock = createNewElement("a", "App-link");
	appLinkBlock.setAttribute("href", "https://reactjs.org");
	appLinkBlock.setAttribute("target", "_blank");
	appLinkBlock.setAttribute("rel", "noopener noreferrer");
	appLinkBlock.textContent = "Learn React";
	const currentYear = createNewElement("p", "");
	currentYear.textContent = `${new Date().getFullYear()}`;
	appHeaderBlock.append(appLogoBlock, logoLinck, appLinkBlock, currentYear);
	appBlock.append(appHeaderBlock);
	console.log(appBlock);
	return appBlock;
};

const createNewElement = (element, className) => {
	const createEl = document.createElement(element);
	createEl.className = className;
	return createEl;
};
