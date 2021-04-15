import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

const PrismWrapper = (props) => {
  const className = props.children.props.className;
  const language = className.replace(/language-/, "");

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <div>
            <pre className={className} style={style}>
              <div className="code-tab">{language}</div>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        );
      }}
    </Highlight>
  );
};

export default PrismWrapper;
