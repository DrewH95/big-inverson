import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersomCardComponent from './componets/PersonCard';

function App() {
  return (
    <div className = "App">
      <PersomCardComponent firstName = "Ted" lastName = "Mosby" age = {28} hairColor = "Black"/>
      <PersomCardComponent firstName = "John" lastName = "Smith" age = {900} hairColor = "Brown" />
      <PersomCardComponent firstName = "Ted" lastName = "Lasso" age = {36} hairColor = "Brown"/>
      <PersomCardComponent firstName = "Lumpy" lastName = "Space-Princess" age = {22} hairColor = "Purple"/>
    </div>
  );
}

export default App;
