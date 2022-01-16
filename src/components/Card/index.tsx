import React from "react";

import { Icon } from "@iconify/react";

import "./index.scss";

interface Props {
  title: string;
  author: string;
  url: string;
}

const Card: React.FC<Props> = ({ title, author, url }) => {
  return (
    <div className="card">
      <div>
        <Icon icon="ant-design:user-outlined" /> {author}
      </div>
      <div>
        <Icon icon="bx:bxs-book" /> {title}
      </div>
      <div>
        <Icon icon="il:url" /> {url}
      </div>
    </div>
  );
};

export default Card;
