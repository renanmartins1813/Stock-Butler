import React from "react";

interface IContainerProps {
  title?: string;
  description?: string;
  icon?: string;
  graph?: string;
  graphOptions?: object;
  children?: any;
  subinfoIcon?: "up" | "down";
  subinfoText?: string;
  link?: string;
  main?: string | number;
}

export default function Container({
  children,
  title,
  description,
  main,
  icon,
  graph,
  graphOptions,
  subinfoIcon,
  subinfoText,
  link,
}: IContainerProps) {
  return (
    <div className="container">
      <div className="container-title">
        {title && <h1>{title}</h1>}
        {icon && <i className={icon}></i>}
      </div>

      <div className="container-main">
        {description && (
          <h1 className="container-main__description">{description}</h1>
        )}
        {main && <h1 className="container-main__text">{main}</h1>}

        <div className="container-main__subinfo">
          {subinfoIcon ? (
            subinfoIcon === "up" ? (
              <i className="bi bi-caret-up-square-fill"></i>
            ) : (
              <i className="bi bi-caret-down-square-fill"></i>
            )
          ) : (
            ""
          )}
          {subinfoText ? <h5>{subinfoText}</h5> : ""}
        </div>
      </div>

      <hr className="container__separator" />
      <a className="container-link" href="#">
        <i className="bi bi-box-arrow-up-right"></i>
        <h5>Open Chart</h5>
      </a>

      {children}
    </div>
  );
}
