import React, { Component } from "react";
import Axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };

  componentDidMount() {
    // USe To get data From server best place is compnent Did mount because it will get data ater making jsx ready for ui to display
    Axios.get("/posts")
      .then((response) => this.setState({ posts: response.data.slice(1, 5) }))
      .catch((err) => console.log(err));
  }

  postsSelectedHandler(id) {
    this.setState({ selectedPostId: id });
  }

  postsDeleteHandler(id) {
    const updatedPosts = this.state.posts.slice();

    const deletedPost = this.state.posts.findIndex((e) => e.id === id);
    if (deletedPost !== -1) {
      updatedPosts.splice(deletedPost, 1);
    }

    this.setState({ posts: updatedPosts });
  }

  render() {
    const posts = this.state.posts.map((e) => (
      <Post
        title={e.title}
        key={e.id}
        Clicked={() => this.postsSelectedHandler(e.id)}
      />
    ));

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost
            id={this.state.selectedPostId}
            deletedPostId={() =>
              this.postsDeleteHandler(this.state.selectedPostId)
            }
          />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
