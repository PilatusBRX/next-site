import { Container, Post, Item, Desc, Title } from "./style";

const Users = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => (
        <Post key={post.id}>
          <Item>
            <Title>{post.title}</Title>
            <Desc>{post.body}</Desc>
          </Item>
        </Post>
      ))}
    </Container>
  );
};

export default Users;
