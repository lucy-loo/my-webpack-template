import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router";
import { Link, BrowserRouter, HashRouter } from "react-router-dom";
import classNames from "classnames";
import * as globalStyle from "@/styles/index.module.scss";

ReactDOM.render(<App />, document.getElementById("root"));

function App() {
  React.useEffect(() => {
    document.title = "React Project";
  }, []);
  return (
    <div className={classNames(globalStyle.wrapper)}>
      <HashRouter></HashRouter>
      <article>
        <h1>Hi,</h1>
        <p>
          this is a template for ReactJs, TypeScript, Webpack and
          PostCSS(syntex: scss, support css-module).
        </p>
        <p>Support the following libs/tools by defaults:</p>
        <ul>
          <li>ReactJs</li>
          <li>Webpack</li>
          <li>TypeScript</li>
          <li>PostCss(syntx: scss, support css-module)</li>
        </ul>
      </article>
    </div>
  );
}
