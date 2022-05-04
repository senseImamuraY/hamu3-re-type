import "./styles.css";
import Counter from "./Counter";

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  // const { message } = props;
  return (
    <>
      <div>
        <Counter />
      </div>
    </>
  );
};

App.defaultProps = {
  message: "not a type, it`s a message"
};

export default App;
