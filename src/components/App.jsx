import { useRoute } from 'react-router5';
import Nav from '../components/Nav.jsx';
import Tbody from '../components/Tbody.jsx';


function Main() {
  const {route} = useRoute();
  console.log('Main',route);
  switch (route?.name) {
    case 'home':
      return <h1>Home</h1>;
    case 'users':
      return <Tbody />;
    case 'posts':
      return <h1>Post</h1>;
    default:
      return <h1>Not Found {route.name}</h1>;
  }
}

export default function App() {
  return (
    <>
      <Nav />
      <main><Main /></main>
    </>
  );
}