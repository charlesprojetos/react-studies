import React, {Component} from "react";

interface InterfaceNews {
    key: number;
    object: {
        title: string;
        description: string;
        author: string;
    }
}

const newsObject = [
    {
        id: 1,
        title: 'Title 1',
        description: 'Description 1',
        author: 'Author 1'
    },
    {
        id: 2,
        title: 'Title 2',
        description: 'Description 2',
        author: 'Author 2'
    },
    {
        id: 3,
        title: 'Title 3',
        description: 'Description 3',
        author: 'Author 3'
    },
    {
        id: 4,
        title: 'Title 4',
        description: 'Description 4',
        author: 'Author 4'
    }
]


class MapKeyComponent extends Component {

    render() {

        const listObject = newsObject.map(
            list =>
                <News key={list.id} object={list}/>
        )

        return (
            <div>
                <h1>News</h1>
                <hr/>
                {listObject}
            </div>
        );
    }
}

class News extends Component<InterfaceNews> {

    render() {

        const {title, description, author} = this.props.object;

        return(
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <small>{author}</small>
            </div>
        )
    }
}

export default MapKeyComponent;