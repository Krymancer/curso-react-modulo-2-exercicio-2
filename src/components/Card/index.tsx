import React from "react";

import { Icon } from "@iconify/react";

import "./index.scss";

interface Props {
  title: string;
  author: string;
  url: string;
}

class Card extends React.Component<Props> {
  render() {
    return (
      <div className="card">
        <div>
          <Icon icon="ant-design:user-outlined" /> {this.props.author}
        </div>
        <div>
          <Icon icon="bx:bxs-book" /> {this.props.title}
        </div>
        <div>
          <Icon icon="il:url" /> {this.props.url}
        </div>
      </div>
    );
  }
}

export default Card;
