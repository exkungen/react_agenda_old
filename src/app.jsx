import React from 'react';
import Student from './components/student';
import Agenda from './components/agenda';
import Button from './components/button';
import Tuesday from "./components/tuesday";
import Wednesday from "./components/wednesday";
import Thursday from "./components/thursday";
import Friday from "./components/friday";
import Monday from "./components/monday";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                MD2 React app om te oefenen


                <Monday
                    day="Monday"
                    arrangement="slapen"
                    time="06:00"
                />
                <Tuesday
                    day="Tuesday"
                    arrangement="opstaan"
                    time="07:00"
                />
                <Wednesday
                    day="Wednesday"
                    arrangement="ontbijten"
                    time="07:40"
                />
                <Thursday
                    day="Thursday"
                    arrangement="douchen"
                    time="08:10"
                />
                <Friday
                    day="Friday"
                    arrangement="bus pakken"
                    time="08:45"
                />






            </div>
        );
    }

}
export default App;