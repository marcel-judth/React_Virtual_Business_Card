function Home({ currentLoggedonUser }) {
  return <h1>Welcome Home! {currentLoggedonUser?.firstname}</h1>;
}

export default Home;
