import Form from './components/form/Form';
import Header from './components/Header';
import MultimediaList from './components/multimediaList/MultimediaList';
import QuickAction from './components/QuickAction';

function App() {
  return (
    <div
      className="bg-my-bg bg-my-image bg-opacity-99
    bg-cover text-grey-50 font-poppins min-h-screen"
    >
      <Header />
      <main className="mx-20">
        <QuickAction />
        <Form />
        <MultimediaList />
      </main>
    </div>
  );
}

export default App;
