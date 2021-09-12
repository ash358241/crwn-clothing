import React from "react";
import "../Directory/Directory.scss";
import MenuItem from "../MenuItem/MenuItem";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          image: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
        },
        {
            title: "jackets",
            image: "https://i.ibb.co/px2tCc3/jackets.png",
            id: 2,
          },
          {
            title: "sneakers",
            image: "https://i.ibb.co/0jqHpnp/sneakers.png",
            id: 1,
          },
          {
            title: "women",
            image: "https://i.ibb.co/GCCdy8t/womens.png",
            id: 1,
            size: 'large'
          },
          {
            title: "men",
            image: "https://i.ibb.co/R70vBrQ/men.png",
            id: 1,
            size: 'large'
          },
      ],
    };
  }

  render(){
      return(
        <div className="directory-menu">
            {
                this.state.sections.map(({id, ...otherSectionProps}) => (<MenuItem key={id} {...otherSectionProps}></MenuItem>))
            }
        </div>
      )
  }
}

export default Directory;
