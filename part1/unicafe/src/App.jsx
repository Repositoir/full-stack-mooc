import { useState } from 'react'

const Button = (props) => {
    const [value, setValue] = props.values;
    const btnName = props.name;

    return (
        <>
            <button onClick={() => setValue(value + 1)}>{btnName}</button>
        </>
    );
}

const StatisticLine = (props) => {

    // handle percentage sign
    const percentageSign = () => {
        if (props.text === "positive"){
            return " %";
        } else {
            return "";
        }
    }

    return (
        <>
            <td>{props.text}</td>
            <td>{props.value}{percentageSign()}</td>
        </>
    );
}

const Statistics = (props) => {
    const [good, neutral, bad] = props.stats;

    if (good === 0 && neutral === 0 && bad === 0){
        return (
            <>
                <p>No feedback given</p>
            </>
        )
    }

    const total = good + neutral + bad;
    const average = (good - bad) / total;
    const positive = (good / total) * 100;

    return (
        <>
            <table>
                <tbody>
                <tr>
                    <StatisticLine text="good" value={good} />
                </tr>
                <tr>
                    <StatisticLine text="neutral" value={neutral} />
                </tr>
                <tr>
            <StatisticLine text="bad" value={bad} />
                </tr>
                <tr>
            <StatisticLine text="all" value={total} />
                </tr>
                <tr>
            <StatisticLine text="average" value={parseFloat(average.toString()).toFixed(1)} />
                </tr>
                <tr>
            <StatisticLine text="positive" value={parseFloat(positive.toString()).toFixed(1)} />
                </tr>
                </tbody>
            </table>
        </>
    );
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <Button name="good" values={[good, setGood]} />
            <Button name="neutral" values={[neutral, setNeutral]} />
            <Button name="bad" values={[bad, setBad]} />
            <h1>statistics</h1>
            <Statistics stats={[good, neutral, bad]} />
        </div>
    );
}

export default App;
